"use client";

import { useEffect, useRef } from "react";
import { orbitShader } from "./orbitShader";

export function MoonlightGpuCanvas({ paused = false, mode = 0 }: { paused?: boolean; mode?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(paused);
  const modeRef = useRef(mode);
  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !("gpu" in navigator)) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;
    let request = 0;
    let visible = true;
    let elapsed = 0;
    let previous = 0;
    let lastFrame = 0;
    let appearance = modeRef.current;
    const pointer = [0, 0];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(canvas);
    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer[0] = (event.clientX - rect.left) / rect.width - 0.5;
      pointer[1] = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const parent = canvas.parentElement;
    parent?.addEventListener("pointermove", move);
    async function start() {
      try {
        const { init, effect, frame, surface } = await import("vgpu");
        if (cancelled) return;
        const gpu = await init({ powerPreference: "low-power" });
        if (cancelled) { gpu.dispose(); return; }
        dispose = () => gpu.dispose();
        const output = surface(gpu, canvas!, { dpr: 1, alphaMode: "premultiplied", clearColor: [0, 0, 0, 0] });
        const shader = effect(gpu, orbitShader);
        let failed = false;
        gpu.onError(() => { failed = true; canvas!.style.opacity = "0"; });
        let painted = false;
        const render = (now: number) => {
          if (cancelled || failed) return;
          request = requestAnimationFrame(render);
          const delta = Math.min((now - previous) / 1000, 0.05);
          previous = now;
          if (document.hidden || !visible) return;
          if (now - lastFrame < 33) return;
          if (painted && (motion.matches || pausedRef.current) && Math.abs(appearance - modeRef.current) < 0.001) return;
          lastFrame = now;
          if (!motion.matches && !pausedRef.current) elapsed += delta * 2;
          appearance = motion.matches ? modeRef.current : appearance + (modeRef.current - appearance) * 0.06;
          shader.set({ settings: { resolution: output.size, pointer: motion.matches ? [0, 0] : pointer, time: elapsed, mode: appearance } });
          frame(gpu, f => f.pass(output, shader));
          canvas!.style.opacity = "1";
          painted = true;
        };
        request = requestAnimationFrame(render);
      } catch {
        // Keep the static light field visible when WebGPU is unavailable.
        canvas!.style.opacity = "0";
        dispose?.();
      }
    }
    void start();
    return () => {
      cancelled = true;
      cancelAnimationFrame(request);
      observer.disconnect();
      parent?.removeEventListener("pointermove", move);
      dispose?.();
    };
  }, []);
  return <canvas ref={canvasRef} className="orbit-canvas" aria-hidden="true" />;
}
