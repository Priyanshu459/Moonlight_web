import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { init, effect, frame, target } from "vgpu/node";

const source = readFileSync(new URL("../src/components/animations/orbitShader.ts", import.meta.url), "utf8").split("`")[1];
const gpu = await init();
const errors = [];
gpu.onError(error => errors.push(error.message));
try {
  const output = target(gpu, { size: [128, 128], format: "rgba8unorm" });
  const sculpture = effect(gpu, source);
  sculpture.set({ settings: { resolution: [128, 128], pointer: [0, 0], time: 1, mode: 0 } });
  frame(gpu, f => f.pass(output, sculpture));
  const first = await output.read();
  sculpture.set({ settings: { resolution: [128, 128], pointer: [0.3, -0.2], time: 5, mode: 2 } });
  frame(gpu, f => f.pass(output, sculpture));
  const second = await output.read();
  await gpu.settled();
  assert.equal(errors.length, 0, errors.join("\n"));
  assert(first.some((value, index) => index % 4 !== 3 && value > 70), "Sculpture must contain visible light");
  assert(first.some((value, index) => value !== second[index]), "Time, pointer and appearance must change the frame");
  console.log("Sculpture: GPU compilation, visible output and changing frames passed.");
} finally { gpu.dispose(); }
