import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useTranslation } from "../_libs/react-i18next.mjs";
import { a as profile, n as competenciesData, o as whatsappUrl, r as contacts } from "./router-DfkipkJP.mjs";
import { _ as ArrowUpRight, a as ShieldCheck, b as Activity, c as Network, d as Mail, f as Linkedin, g as Check, m as Cloud, n as Workflow, o as Server, p as Github, s as Phone, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Header, t as Footer } from "./Footer-B7iSD0pY.mjs";
import { a as WebGLRenderer, c as LinearFilter, d as PlaneGeometry, f as Scene, g as Vector2, h as Uniform, i as RenderPass, l as Mesh, m as Texture, n as EffectComposer, o as Color, p as ShaderMaterial, r as EffectPass, s as GLSL3, t as Effect, u as OrthographicCamera } from "../_libs/postprocessing+three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CS0Bxknq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setVisible(true);
				observer.disconnect();
			}
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: `reveal ${className}`,
		children
	});
}
var createTouchTexture = () => {
	const size = 64;
	const canvas = document.createElement("canvas");
	canvas.width = size;
	canvas.height = size;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("2D context not available");
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	const texture = new Texture(canvas);
	texture.minFilter = LinearFilter;
	texture.magFilter = LinearFilter;
	texture.generateMipmaps = false;
	const trail = [];
	let last = null;
	const maxAge = 64;
	let radius = .1 * size;
	const speed = 1 / maxAge;
	const clear = () => {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};
	const drawPoint = (p) => {
		const pos = {
			x: p.x * size,
			y: (1 - p.y) * size
		};
		let intensity = 1;
		const easeOutSine = (t) => Math.sin(t * Math.PI / 2);
		const easeOutQuad = (t) => -t * (t - 2);
		if (p.age < maxAge * .3) intensity = easeOutSine(p.age / (maxAge * .3));
		else intensity = easeOutQuad(1 - (p.age - maxAge * .3) / (maxAge * .7)) || 0;
		intensity *= p.force;
		const color = `${(p.vx + 1) / 2 * 255}, ${(p.vy + 1) / 2 * 255}, ${intensity * 255}`;
		const offset = 320;
		ctx.shadowOffsetX = offset;
		ctx.shadowOffsetY = offset;
		ctx.shadowBlur = radius;
		ctx.shadowColor = `rgba(${color},${.22 * intensity})`;
		ctx.beginPath();
		ctx.fillStyle = "rgba(255,0,0,1)";
		ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
		ctx.fill();
	};
	const addTouch = (norm) => {
		let force = 0;
		let vx = 0;
		let vy = 0;
		if (last) {
			const dx = norm.x - last.x;
			const dy = norm.y - last.y;
			if (dx === 0 && dy === 0) return;
			const dd = dx * dx + dy * dy;
			const d = Math.sqrt(dd);
			vx = dx / (d || 1);
			vy = dy / (d || 1);
			force = Math.min(dd * 1e4, 1);
		}
		last = {
			x: norm.x,
			y: norm.y
		};
		trail.push({
			x: norm.x,
			y: norm.y,
			age: 0,
			force,
			vx,
			vy
		});
	};
	const update = () => {
		clear();
		for (let i = trail.length - 1; i >= 0; i--) {
			const point = trail[i];
			const f = point.force * speed * (1 - point.age / maxAge);
			point.x += point.vx * f;
			point.y += point.vy * f;
			point.age++;
			if (point.age > maxAge) trail.splice(i, 1);
		}
		for (let i = 0; i < trail.length; i++) drawPoint(trail[i]);
		texture.needsUpdate = true;
	};
	return {
		canvas,
		texture,
		addTouch,
		update,
		set radiusScale(v) {
			radius = .1 * size * v;
		},
		get radiusScale() {
			return radius / (.1 * size);
		},
		size
	};
};
var createLiquidEffect = (texture, opts) => {
	return new Effect("LiquidEffect", `
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `, { uniforms: /* @__PURE__ */ new Map([
		["uTexture", new Uniform(texture)],
		["uStrength", new Uniform(opts?.strength ?? .025)],
		["uTime", new Uniform(0)],
		["uFreq", new Uniform(opts?.freq ?? 4.5)]
	]) });
};
var SHAPE_MAP = {
	square: 0,
	circle: 1,
	triangle: 2,
	diamond: 3
};
var VERTEX_SRC = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;
var FRAGMENT_SRC = `
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`;
var MAX_CLICKS = 10;
var PixelBlast = ({ variant = "square", pixelSize = 3, color = "#B497CF", className, style, antialias = true, patternScale = 2, patternDensity = 1, liquid = false, liquidStrength = .1, liquidRadius = 1, pixelSizeJitter = 0, enableRipples = true, rippleIntensityScale = 1, rippleThickness = .1, rippleSpeed = .3, liquidWobbleSpeed = 4.5, autoPauseOffscreen = true, speed = .5, transparent = true, edgeFade = .5, noiseAmount = 0 }) => {
	const containerRef = (0, import_react.useRef)(null);
	const visibilityRef = (0, import_react.useRef)({ visible: true });
	const speedRef = (0, import_react.useRef)(speed);
	const threeRef = (0, import_react.useRef)(null);
	const prevConfigRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		speedRef.current = speed;
		const needsReinitKeys = [
			"antialias",
			"liquid",
			"noiseAmount"
		];
		const cfg = {
			antialias,
			liquid,
			noiseAmount
		};
		let mustReinit = false;
		if (!threeRef.current) mustReinit = true;
		else if (prevConfigRef.current) {
			for (const k of needsReinitKeys) if (prevConfigRef.current[k] !== cfg[k]) {
				mustReinit = true;
				break;
			}
		}
		if (mustReinit) {
			if (threeRef.current) {
				const t = threeRef.current;
				t.resizeObserver?.disconnect();
				cancelAnimationFrame(t.raf);
				t.quad?.geometry.dispose();
				t.material.dispose();
				t.composer?.dispose();
				t.renderer.dispose();
				t.renderer.forceContextLoss();
				if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement);
				threeRef.current = null;
			}
			const canvas = document.createElement("canvas");
			const renderer = new WebGLRenderer({
				canvas,
				antialias,
				alpha: true,
				powerPreference: "high-performance"
			});
			renderer.domElement.style.width = "100%";
			renderer.domElement.style.height = "100%";
			renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
			container.appendChild(renderer.domElement);
			if (transparent) renderer.setClearAlpha(0);
			else renderer.setClearColor(0, 1);
			const uniforms = {
				uResolution: { value: new Vector2(0, 0) },
				uTime: { value: 0 },
				uColor: { value: new Color(color) },
				uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new Vector2(-1, -1)) },
				uClickTimes: { value: new Float32Array(MAX_CLICKS) },
				uShapeType: { value: SHAPE_MAP[variant] ?? 0 },
				uPixelSize: { value: pixelSize * renderer.getPixelRatio() },
				uScale: { value: patternScale },
				uDensity: { value: patternDensity },
				uPixelJitter: { value: pixelSizeJitter },
				uEnableRipples: { value: enableRipples ? 1 : 0 },
				uRippleSpeed: { value: rippleSpeed },
				uRippleThickness: { value: rippleThickness },
				uRippleIntensity: { value: rippleIntensityScale },
				uEdgeFade: { value: edgeFade }
			};
			const scene = new Scene();
			const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
			const material = new ShaderMaterial({
				vertexShader: VERTEX_SRC,
				fragmentShader: FRAGMENT_SRC,
				uniforms,
				transparent: true,
				depthTest: false,
				depthWrite: false,
				glslVersion: GLSL3
			});
			const quadGeom = new PlaneGeometry(2, 2);
			const quad = new Mesh(quadGeom, material);
			scene.add(quad);
			const startTime = performance.now();
			const setSize = () => {
				const w = container.clientWidth || 1;
				const h = container.clientHeight || 1;
				renderer.setSize(w, h, false);
				uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
				if (threeRef.current?.composer) threeRef.current.composer.setSize(renderer.domElement.width, renderer.domElement.height);
				uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio();
			};
			setSize();
			const ro = new ResizeObserver(setSize);
			ro.observe(container);
			const randomFloat = () => {
				if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
					const u32 = /* @__PURE__ */ new Uint32Array(1);
					window.crypto.getRandomValues(u32);
					return u32[0] / 4294967295;
				}
				return Math.random();
			};
			const timeOffset = randomFloat() * 1e3;
			let composer;
			let touch;
			let liquidEffect;
			if (liquid) {
				touch = createTouchTexture();
				touch.radiusScale = liquidRadius;
				composer = new EffectComposer(renderer);
				const renderPass = new RenderPass(scene, camera);
				liquidEffect = createLiquidEffect(touch.texture, {
					strength: liquidStrength,
					freq: liquidWobbleSpeed
				});
				const effectPass = new EffectPass(camera, liquidEffect);
				effectPass.renderToScreen = true;
				composer.addPass(renderPass);
				composer.addPass(effectPass);
			}
			if (noiseAmount > 0) {
				if (!composer) {
					composer = new EffectComposer(renderer);
					composer.addPass(new RenderPass(scene, camera));
				}
				const noiseEffect = new Effect("NoiseEffect", `uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} `, { uniforms: /* @__PURE__ */ new Map([["uTime", new Uniform(0)], ["uAmount", new Uniform(noiseAmount)]]) });
				const noisePass = new EffectPass(camera, noiseEffect);
				noisePass.renderToScreen = true;
				if (composer && composer.passes.length > 0) composer.passes.forEach((p) => p.renderToScreen = false);
				composer.addPass(noisePass);
			}
			if (composer) composer.setSize(renderer.domElement.width, renderer.domElement.height);
			const mapToPixels = (e) => {
				const rect = renderer.domElement.getBoundingClientRect();
				const scaleX = renderer.domElement.width / rect.width;
				const scaleY = renderer.domElement.height / rect.height;
				return {
					fx: (e.clientX - rect.left) * scaleX,
					fy: (rect.height - (e.clientY - rect.top)) * scaleY,
					w: renderer.domElement.width,
					h: renderer.domElement.height
				};
			};
			const onPointerDown = (e) => {
				const { fx, fy } = mapToPixels(e);
				const ix = threeRef.current?.clickIx ?? 0;
				uniforms.uClickPos.value[ix].set(fx, fy);
				uniforms.uClickTimes.value[ix] = uniforms.uTime.value;
				if (threeRef.current) threeRef.current.clickIx = (ix + 1) % MAX_CLICKS;
			};
			const onPointerMove = (e) => {
				if (!touch) return;
				const { fx, fy, w, h } = mapToPixels(e);
				touch.addTouch({
					x: fx / w,
					y: fy / h
				});
			};
			renderer.domElement.addEventListener("pointerdown", onPointerDown, { passive: true });
			renderer.domElement.addEventListener("pointermove", onPointerMove, { passive: true });
			let raf = 0;
			const animate = () => {
				if (autoPauseOffscreen && !visibilityRef.current.visible) {
					raf = requestAnimationFrame(animate);
					return;
				}
				uniforms.uTime.value = timeOffset + (performance.now() - startTime) / 1e3 * speedRef.current;
				if (liquidEffect) liquidEffect.uniforms.get("uTime").value = uniforms.uTime.value;
				if (composer) {
					if (touch) touch.update();
					composer.passes.forEach((p) => {
						const effs = p.effects;
						if (effs) effs.forEach((eff) => {
							const u = eff.uniforms?.get("uTime");
							if (u) u.value = uniforms.uTime.value;
						});
					});
					composer.render();
				} else renderer.render(scene, camera);
				raf = requestAnimationFrame(animate);
			};
			raf = requestAnimationFrame(animate);
			threeRef.current = {
				renderer,
				scene,
				camera,
				material,
				clickIx: 0,
				uniforms,
				resizeObserver: ro,
				raf,
				quad,
				timeOffset,
				composer,
				touch,
				liquidEffect
			};
		} else {
			const t = threeRef.current;
			t.uniforms.uShapeType.value = SHAPE_MAP[variant] ?? 0;
			t.uniforms.uPixelSize.value = pixelSize * t.renderer.getPixelRatio();
			t.uniforms.uColor.value.set(color);
			t.uniforms.uScale.value = patternScale;
			t.uniforms.uDensity.value = patternDensity;
			t.uniforms.uPixelJitter.value = pixelSizeJitter;
			t.uniforms.uEnableRipples.value = enableRipples ? 1 : 0;
			t.uniforms.uRippleIntensity.value = rippleIntensityScale;
			t.uniforms.uRippleThickness.value = rippleThickness;
			t.uniforms.uRippleSpeed.value = rippleSpeed;
			t.uniforms.uEdgeFade.value = edgeFade;
			if (transparent) t.renderer.setClearAlpha(0);
			else t.renderer.setClearColor(0, 1);
			if (t.liquidEffect) {
				const uStrength = t.liquidEffect;
				if (uStrength) uStrength.value = liquidStrength;
				const uFreq = t.liquidEffect.uniforms.get("uFreq");
				if (uFreq) uFreq.value = liquidWobbleSpeed;
			}
			if (t.touch) t.touch.radiusScale = liquidRadius;
		}
		prevConfigRef.current = cfg;
		return () => {
			if (threeRef.current && mustReinit) return;
			if (!threeRef.current) return;
			const t = threeRef.current;
			t.resizeObserver?.disconnect();
			cancelAnimationFrame(t.raf);
			t.quad?.geometry.dispose();
			t.material.dispose();
			t.composer?.dispose();
			t.renderer.dispose();
			t.renderer.forceContextLoss();
			if (t.renderer.domElement.parentElement === container) container.removeChild(t.renderer.domElement);
			threeRef.current = null;
		};
	}, [
		antialias,
		liquid,
		noiseAmount,
		pixelSize,
		patternScale,
		patternDensity,
		enableRipples,
		rippleIntensityScale,
		rippleThickness,
		rippleSpeed,
		pixelSizeJitter,
		edgeFade,
		transparent,
		liquidStrength,
		liquidRadius,
		liquidWobbleSpeed,
		autoPauseOffscreen,
		variant,
		color,
		speed
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: `pixel-blast-container ${className ?? ""}`,
		style,
		"aria-label": "PixelBlast interactive background"
	});
};
function Hero() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "topo",
		className: "relative overflow-hidden pt-28 sm:pt-26",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-md border border-border px-6 py-20 text-center sm:px-12 sm:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 z-0",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixelBlast, {
						variant: "circle",
						pixelSize: 5,
						color: "#B497CF",
						patternScale: 2.25,
						patternDensity: .55,
						pixelSizeJitter: .7,
						enableRipples: true,
						rippleSpeed: .4,
						rippleThickness: .12,
						rippleIntensityScale: 1.5,
						liquid: true,
						liquidStrength: .12,
						liquidRadius: 1.2,
						liquidWobbleSpeed: 5,
						speed: .35,
						edgeFade: .5,
						transparent: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-2 rounded-full bg-primary",
								"aria-hidden": "true"
							}), t("hero.availability")]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mx-auto mt-8 max-w-4xl text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl",
								children: profile.name
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-2xl text-base text-white sm:text-lg",
								children: t("profile.role")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 240,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contato",
									className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:w-auto",
									children: [t("header.contact"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										"aria-hidden": "true"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#skills",
									className: "inline-flex w-full items-center justify-center rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary sm:w-auto",
									children: t("skills.title")
								})]
							})
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl text-center font-high leading-tight sm:text-4xl lg:text-5xl",
					children: t("hero.resultsTitle")
				}) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-1 sm:gap-3",
					children: Object.entries({
						experience: t("stats.experience"),
						projects: t("stats.projects"),
						uptime: t("stats.uptime"),
						support: t("stats.support")
					}).map(([key, label], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stat-card h-full rounded-md border border-border px-5 py-6 sm:px-6 sm:py-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl",
								children: [
									"+7",
									"+50",
									"99%",
									"24/7"
								][i]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground sm:text-sm",
								children: label
							})]
						})
					}, key))
				})]
			})]
		})
	});
}
function About() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "py-24 sm:py-15",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground",
				children: t("about.label")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-medium leading-tight sm:text-5xl",
				children: t("about.title")
			})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: t("about.description")
				})
			})]
		})
	});
}
function Skills() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "py-24 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground",
						children: t("skills.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-medium leading-tight sm:text-5xl",
						children: t("skills.heading")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground sm:text-lg",
						children: t("skills.description")
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						titleKey: "skills.programming",
						itemsKey: "skills.languages"
					},
					{
						titleKey: "skills.databases",
						itemsKey: "skills.dbs"
					},
					{
						titleKey: "skills.operatingSystems",
						itemsKey: "skills.os"
					},
					{
						titleKey: "skills.aws",
						itemsKey: "skills.awsServices"
					},
					{
						titleKey: "skills.gcp",
						itemsKey: "skills.gcpServices"
					}
				].map((group, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-surface rounded-md h-full p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: t(group.titleKey)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-2",
							children: t(group.itemsKey, { returnObjects: true }).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-muted-foreground",
								children: item
							}, item))
						})]
					})
				}, group.titleKey))
			})]
		})
	});
}
var icons$1 = {
	network: Network,
	shield: ShieldCheck,
	server: Server,
	cloud: Cloud,
	automation: Workflow,
	monitor: Activity
};
var competencyKeys = [
	"infrastructure",
	"security",
	"servers",
	"cloud",
	"automation",
	"monitoring"
];
var reasonKeys = [
	"Resolução rápida de incidentes",
	"Documentação técnica detalhada",
	"Planejamento de capacidade",
	"Backup e disaster recovery",
	"Otimização de performance",
	"Suporte técnico especializado"
];
function Competencies() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "competencias",
		className: "py-24 sm:py-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground",
							children: t("competencies.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-medium leading-tight sm:text-5xl",
							children: "Áreas de expertise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-muted-foreground sm:text-lg",
							children: "Áreas de expertise desenvolvidas ao longo da carreira para entregar soluções completas."
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: competenciesData.map((item, i) => {
						const Icon = icons$1[item.icon];
						const competencyKey = competencyKeys[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "card-surface rounded-md h-full p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-11 place-items-center rounded-md bg-primary/15 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-lg font-semibold",
										children: t(`competencies.${competencyKey}.title`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: t(`competencies.${competencyKey}.description`)
									})
								]
							})
						}, competencyKey);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aurora mt-6 rounded-md border border-border p-8 sm:p-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-medium sm:text-3xl",
							children: "Por que me escolher?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 grid gap-3 sm:grid-cols-2",
							children: reasonKeys.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-0.5 size-4 shrink-0 text-primary",
									"aria-hidden": "true"
								}), reason]
							}, reason))
						})] })
					})
				})
			]
		})
	});
}
var icons = {
	phone: Phone,
	mail: Mail,
	linkedin: Linkedin,
	github: Github
};
function Contact() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1200px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground",
						children: t("contact.label")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-medium leading-tight sm:text-5xl",
						children: t("contact.heading")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground sm:text-lg",
						children: t("contact.intro")
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: contacts.map((contact, i) => {
						const Icon = icons[contact.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.href,
								target: contact.href.startsWith("http") ? "_blank" : void 0,
								rel: "noreferrer",
								className: "card-surface flex h-full rounded-md items-center gap-4 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-11 shrink-0 place-items-center rounded-md bg-primary/15 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-6",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs uppercase tracking-widest text-muted-foreground",
											children: contact.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block truncate text-sm font-medium",
											children: contact.value
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "ml-auto size-4 shrink-0 text-muted-foreground",
										"aria-hidden": "true"
									})
								]
							})
						}, contact.label);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aurora flex h-full flex-col justify-between gap-8 rounded-md border border-border p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: t("contact.interestTitle")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: t("contact.interestDescription")
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary",
								children: t("contact.whatsapp")
							})
						})]
					})
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Competencies, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Home as component };
