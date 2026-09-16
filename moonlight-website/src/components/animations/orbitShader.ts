// A ray-marched, twisted light membrane. No remote textures or user data.
export const orbitShader = `
struct Settings { resolution: vec2f, pointer: vec2f, time: f32, mode: f32, }
@group(0) @binding(0) var<uniform> settings: Settings;
fn rotate(p: vec2f, a: f32) -> vec2f {
  return vec2f(cos(a)*p.x - sin(a)*p.y, sin(a)*p.x + cos(a)*p.y);
}
fn field(pos: vec3f) -> f32 {
  var p = pos;
  let xz = rotate(p.xz, settings.time * 0.16 + settings.pointer.x * 0.7);
  p = vec3f(xz.x, p.y, xz.y);
  let yz = rotate(p.yz, -0.55 + settings.pointer.y * 0.6);
  p = vec3f(p.x, yz.x, yz.y);
  let twist = rotate(p.xy, p.z * (0.65 + settings.mode * 0.18) + settings.time * 0.08);
  p = vec3f(twist, p.z);
  let a = atan2(p.y, p.x);
  let fold = 0.1 * sin(a * 3.0 + settings.time * 0.3);
  let ring = length(p.xy) - (0.98 + fold);
  let thickness = 0.24 + 0.09 * sin(a * 2.0 - settings.time * 0.2 + settings.mode);
  return (length(vec2f(ring, p.z * 0.95)) - thickness) * 0.65;
}
fn normalAt(p: vec3f) -> vec3f {
  let e = 0.002;
  return normalize(vec3f(field(p+vec3f(e,0,0))-field(p-vec3f(e,0,0)),
    field(p+vec3f(0,e,0))-field(p-vec3f(0,e,0)),
    field(p+vec3f(0,0,e))-field(p-vec3f(0,0,e))));
}
@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let res = settings.resolution;
  let q = (uv - 0.5) * res / min(res.x, res.y);
  let ro = vec3f(0.0, 0.0, 3.6);
  let rd = normalize(vec3f(q * 2.65, -3.0));
  var depth = 0.0;
  var nearest = 1.0;
  var hit = false;
  for (var i = 0; i < 72; i = i + 1) {
    let distance = field(ro + rd * depth);
    nearest = min(nearest, abs(distance));
    if (distance < 0.0015) { hit = true; break; }
    depth += max(distance, 0.003);
    if (depth > 6.0) { break; }
  }
  var color = vec3f(0.018, 0.021, 0.03);
  let aura = exp(-length(q * vec2f(1.0,1.1)) * 3.6);
  color += vec3f(0.05, 0.09, 0.16) * aura * 0.55;
  if (hit) {
    let p = ro + rd * depth;
    let n = normalAt(p);
    let facing = max(dot(n, -rd), 0.0);
    let fresnel = pow(1.0-facing, 2.1);
    let light = normalize(vec3f(-1.0, 1.5, 2.0));
    let diffuse = max(dot(n, light), 0.0);
    let phase = facing * 2.3 + p.y * 0.6 + p.x * 0.2 + settings.mode * 0.18 + settings.time * 0.025;
    let spectral = 0.52 + 0.48 * cos(6.28318 * (phase + vec3f(0.0, 0.22, 0.49)));
    let ridges = pow(0.5+0.5*sin((atan2(p.y,p.x) * 90.0 + p.z*36.0)), 7.0);
    let specular = pow(max(dot(reflect(-light,n),-rd),0.0),48.0);
    color = spectral * (0.22 + diffuse * 0.85 + fresnel * 0.7);
    color += vec3f(0.64,0.81,1.0) * ridges * 0.16;
    color += vec3f(0.85,0.94,1.0) * specular * 1.4;
    color += vec3f(0.15,0.4,0.7) * fresnel * 0.45;
    color = pow(color, vec3f(0.85));
  } else {
    color += vec3f(0.17,0.35,0.6) * exp(-nearest*35.0) * 0.045;
  }
  let vignette = 1.0 - smoothstep(0.52,0.85,length(q));
  return vec4f(color * vignette, vignette);
}`;
