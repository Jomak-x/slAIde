module.exports = [
"[project]/app/components/Background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiquidEther
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const defaultColors = [
    '#5227FF',
    '#FF9FFC',
    '#B19EEF'
];
function LiquidEther({ mouseForce = 20, cursorSize = 100, isViscous = false, viscous = 30, iterationsViscous = 32, iterationsPoisson = 32, dt = 0.014, BFECC = true, resolution = 0.5, isBounce = false, colors = defaultColors, style = {}, className = '', autoDemo = true, autoSpeed = 0.5, autoIntensity = 2.2, takeoverDuration = 0.25, autoResumeDelay = 1000, autoRampDuration = 0.6 }) {
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const webglRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeObserverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intersectionObserverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isVisibleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const resizeRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mountRef.current) return;
        function makePaletteTexture(stops) {
            let arr;
            if (Array.isArray(stops) && stops.length > 0) {
                arr = stops.length === 1 ? [
                    stops[0],
                    stops[0]
                ] : stops;
            } else {
                arr = [
                    '#ffffff',
                    '#ffffff'
                ];
            }
            const w = arr.length;
            const data = new Uint8Array(w * 4);
            for(let i = 0; i < w; i++){
                const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](arr[i]);
                data[i * 4 + 0] = Math.round(c.r * 255);
                data[i * 4 + 1] = Math.round(c.g * 255);
                data[i * 4 + 2] = Math.round(c.b * 255);
                data[i * 4 + 3] = 255;
            }
            const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTexture"](data, w, 1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RGBAFormat"]);
            tex.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
            tex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
            tex.wrapS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
            tex.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
            tex.generateMipmaps = false;
            tex.needsUpdate = true;
            return tex;
        }
        const paletteTex = makePaletteTexture(colors);
        // Hard-code transparent background vector (alpha 0)
        const bgVec4 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 0, 0);
        class CommonClass {
            width = 0;
            height = 0;
            aspect = 1;
            pixelRatio = 1;
            isMobile = false;
            breakpoint = 768;
            fboWidth = null;
            fboHeight = null;
            time = 0;
            delta = 0;
            container = null;
            renderer = null;
            clock = null;
            init(container) {
                this.container = container;
                this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
                this.resize();
                this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    antialias: true,
                    alpha: true
                });
                // Always transparent
                this.renderer.autoClear = false;
                this.renderer.setClearColor(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x000000), 0);
                this.renderer.setPixelRatio(this.pixelRatio);
                this.renderer.setSize(this.width, this.height);
                const el = this.renderer.domElement;
                el.style.width = '100%';
                el.style.height = '100%';
                el.style.display = 'block';
                this.clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clock"]();
                this.clock.start();
            }
            resize() {
                if (!this.container) return;
                const rect = this.container.getBoundingClientRect();
                this.width = Math.max(1, Math.floor(rect.width));
                this.height = Math.max(1, Math.floor(rect.height));
                this.aspect = this.width / this.height;
                if (this.renderer) this.renderer.setSize(this.width, this.height, false);
            }
            update() {
                if (!this.clock) return;
                this.delta = this.clock.getDelta();
                this.time += this.delta;
            }
        }
        const Common = new CommonClass();
        class MouseClass {
            mouseMoved = false;
            coords = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            coords_old = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            diff = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            timer = null;
            container = null;
            isHoverInside = false;
            hasUserControl = false;
            isAutoActive = false;
            autoIntensity = 2.0;
            takeoverActive = false;
            takeoverStartTime = 0;
            takeoverDuration = 0.25;
            takeoverFrom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            takeoverTo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            onInteract = null;
            _onMouseMove = this.onDocumentMouseMove.bind(this);
            _onTouchStart = this.onDocumentTouchStart.bind(this);
            _onTouchMove = this.onDocumentTouchMove.bind(this);
            _onMouseEnter = this.onMouseEnter.bind(this);
            _onMouseLeave = this.onMouseLeave.bind(this);
            _onTouchEnd = this.onTouchEnd.bind(this);
            init(container) {
                this.container = container;
                container.addEventListener('mousemove', this._onMouseMove);
                container.addEventListener('touchstart', this._onTouchStart, {
                    passive: true
                });
                container.addEventListener('touchmove', this._onTouchMove, {
                    passive: true
                });
                container.addEventListener('mouseenter', this._onMouseEnter);
                container.addEventListener('mouseleave', this._onMouseLeave);
                container.addEventListener('touchend', this._onTouchEnd);
            }
            dispose() {
                const c = this.container;
                if (!c) return;
                c.removeEventListener('mousemove', this._onMouseMove);
                c.removeEventListener('touchstart', this._onTouchStart);
                c.removeEventListener('touchmove', this._onTouchMove);
                c.removeEventListener('mouseenter', this._onMouseEnter);
                c.removeEventListener('mouseleave', this._onMouseLeave);
                c.removeEventListener('touchend', this._onTouchEnd);
            }
            setCoords(x, y) {
                if (!this.container) return;
                if (this.timer) window.clearTimeout(this.timer);
                const rect = this.container.getBoundingClientRect();
                const nx = (x - rect.left) / rect.width;
                const ny = (y - rect.top) / rect.height;
                this.coords.set(nx * 2 - 1, -(ny * 2 - 1));
                this.mouseMoved = true;
                this.timer = window.setTimeout(()=>{
                    this.mouseMoved = false;
                }, 100);
            }
            setNormalized(nx, ny) {
                this.coords.set(nx, ny);
                this.mouseMoved = true;
            }
            onDocumentMouseMove(event) {
                if (this.onInteract) this.onInteract();
                if (this.isAutoActive && !this.hasUserControl && !this.takeoverActive) {
                    if (!this.container) return;
                    const rect = this.container.getBoundingClientRect();
                    const nx = (event.clientX - rect.left) / rect.width;
                    const ny = (event.clientY - rect.top) / rect.height;
                    this.takeoverFrom.copy(this.coords);
                    this.takeoverTo.set(nx * 2 - 1, -(ny * 2 - 1));
                    this.takeoverStartTime = performance.now();
                    this.takeoverActive = true;
                    this.hasUserControl = true;
                    this.isAutoActive = false;
                    return;
                }
                this.setCoords(event.clientX, event.clientY);
                this.hasUserControl = true;
            }
            onDocumentTouchStart(event) {
                if (event.touches.length === 1) {
                    const t = event.touches[0];
                    if (this.onInteract) this.onInteract();
                    this.setCoords(t.pageX, t.pageY);
                    this.hasUserControl = true;
                }
            }
            onDocumentTouchMove(event) {
                if (event.touches.length === 1) {
                    const t = event.touches[0];
                    if (this.onInteract) this.onInteract();
                    this.setCoords(t.pageX, t.pageY);
                }
            }
            onTouchEnd() {
                this.isHoverInside = false;
            }
            onMouseEnter() {
                this.isHoverInside = true;
            }
            onMouseLeave() {
                this.isHoverInside = false;
            }
            update() {
                if (this.takeoverActive) {
                    const t = (performance.now() - this.takeoverStartTime) / (this.takeoverDuration * 1000);
                    if (t >= 1) {
                        this.takeoverActive = false;
                        this.coords.copy(this.takeoverTo);
                        this.coords_old.copy(this.coords);
                        this.diff.set(0, 0);
                    } else {
                        const k = t * t * (3 - 2 * t);
                        this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo, k);
                    }
                }
                this.diff.subVectors(this.coords, this.coords_old);
                this.coords_old.copy(this.coords);
                if (this.coords_old.x === 0 && this.coords_old.y === 0) this.diff.set(0, 0);
                if (this.isAutoActive && !this.takeoverActive) this.diff.multiplyScalar(this.autoIntensity);
            }
        }
        const Mouse = new MouseClass();
        class AutoDriver {
            mouse;
            manager;
            enabled;
            speed;
            resumeDelay;
            rampDurationMs;
            active = false;
            current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 0);
            target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            lastTime = performance.now();
            activationTime = 0;
            margin = 0.2;
            _tmpDir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            constructor(mouse, manager, opts){
                this.mouse = mouse;
                this.manager = manager;
                this.enabled = opts.enabled;
                this.speed = opts.speed;
                this.resumeDelay = opts.resumeDelay || 3000;
                this.rampDurationMs = (opts.rampDuration || 0) * 1000;
                this.pickNewTarget();
            }
            pickNewTarget() {
                const r = Math.random;
                this.target.set((r() * 2 - 1) * (1 - this.margin), (r() * 2 - 1) * (1 - this.margin));
            }
            forceStop() {
                this.active = false;
                this.mouse.isAutoActive = false;
            }
            update() {
                if (!this.enabled) return;
                const now = performance.now();
                const idle = now - this.manager.lastUserInteraction;
                if (idle < this.resumeDelay) {
                    if (this.active) this.forceStop();
                    return;
                }
                if (this.mouse.isHoverInside) {
                    if (this.active) this.forceStop();
                    return;
                }
                if (!this.active) {
                    this.active = true;
                    this.current.copy(this.mouse.coords);
                    this.lastTime = now;
                    this.activationTime = now;
                }
                if (!this.active) return;
                this.mouse.isAutoActive = true;
                let dtSec = (now - this.lastTime) / 1000;
                this.lastTime = now;
                if (dtSec > 0.2) dtSec = 0.016;
                const dir = this._tmpDir.subVectors(this.target, this.current);
                const dist = dir.length();
                if (dist < 0.01) {
                    this.pickNewTarget();
                    return;
                }
                dir.normalize();
                let ramp = 1;
                if (this.rampDurationMs > 0) {
                    const t = Math.min(1, (now - this.activationTime) / this.rampDurationMs);
                    ramp = t * t * (3 - 2 * t);
                }
                const step = this.speed * dtSec * ramp;
                const move = Math.min(step, dist);
                this.current.addScaledVector(dir, move);
                this.mouse.setNormalized(this.current.x, this.current.y);
            }
        }
        const face_vert = `
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`;
        const line_vert = `
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`;
        const mouse_vert = `
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`;
        const advection_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`;
        const color_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`;
        const divergence_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`;
        const externalForce_frag = `
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`;
        const poisson_frag = `
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`;
        const pressure_frag = `
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`;
        const viscous_frag = `
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;
        class ShaderPass {
            props;
            uniforms;
            scene = null;
            camera = null;
            material = null;
            geometry = null;
            plane = null;
            constructor(props){
                this.props = props || {};
                this.uniforms = this.props.material?.uniforms;
            }
            init(..._args) {
                this.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
                this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera"]();
                if (this.uniforms) {
                    this.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawShaderMaterial"](this.props.material);
                    this.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
                    this.plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.geometry, this.material);
                    this.scene.add(this.plane);
                }
            }
            update(..._args) {
                if (!Common.renderer || !this.scene || !this.camera) return;
                Common.renderer.setRenderTarget(this.props.output || null);
                Common.renderer.render(this.scene, this.camera);
                Common.renderer.setRenderTarget(null);
            }
        }
        class Advection extends ShaderPass {
            line;
            constructor(simProps){
                super({
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: advection_frag,
                        uniforms: {
                            boundarySpace: {
                                value: simProps.cellScale
                            },
                            px: {
                                value: simProps.cellScale
                            },
                            fboSize: {
                                value: simProps.fboSize
                            },
                            velocity: {
                                value: simProps.src.texture
                            },
                            dt: {
                                value: simProps.dt
                            },
                            isBFECC: {
                                value: true
                            }
                        }
                    },
                    output: simProps.dst
                });
                this.uniforms = this.props.material.uniforms;
                this.init();
            }
            init() {
                super.init();
                this.createBoundary();
            }
            createBoundary() {
                const boundaryG = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
                const vertices_boundary = new Float32Array([
                    -1,
                    -1,
                    0,
                    -1,
                    1,
                    0,
                    -1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1,
                    -1,
                    0,
                    1,
                    -1,
                    0,
                    -1,
                    -1,
                    0
                ]);
                boundaryG.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](vertices_boundary, 3));
                const boundaryM = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawShaderMaterial"]({
                    vertexShader: line_vert,
                    fragmentShader: advection_frag,
                    uniforms: this.uniforms
                });
                this.line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSegments"](boundaryG, boundaryM);
                this.scene.add(this.line);
            }
            update(...args) {
                const { dt, isBounce, BFECC } = args[0] || {};
                if (!this.uniforms) return;
                if (typeof dt === 'number') this.uniforms.dt.value = dt;
                if (typeof isBounce === 'boolean') this.line.visible = isBounce;
                if (typeof BFECC === 'boolean') this.uniforms.isBFECC.value = BFECC;
                super.update();
            }
        }
        class ExternalForce extends ShaderPass {
            mouse;
            constructor(simProps){
                super({
                    output: simProps.dst
                });
                this.init(simProps);
            }
            init(simProps) {
                super.init();
                const mouseG = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](1, 1);
                const mouseM = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawShaderMaterial"]({
                    vertexShader: mouse_vert,
                    fragmentShader: externalForce_frag,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                    depthWrite: false,
                    uniforms: {
                        px: {
                            value: simProps.cellScale
                        },
                        force: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                        },
                        center: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                        },
                        scale: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](simProps.cursor_size, simProps.cursor_size)
                        }
                    }
                });
                this.mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](mouseG, mouseM);
                this.scene.add(this.mouse);
            }
            update(...args) {
                const props = args[0] || {};
                const forceX = Mouse.diff.x / 2 * (props.mouse_force || 0);
                const forceY = Mouse.diff.y / 2 * (props.mouse_force || 0);
                const cellScale = props.cellScale || {
                    x: 1,
                    y: 1
                };
                const cursorSize = props.cursor_size || 0;
                const cursorSizeX = cursorSize * cellScale.x;
                const cursorSizeY = cursorSize * cellScale.y;
                const centerX = Math.min(Math.max(Mouse.coords.x, -1 + cursorSizeX + cellScale.x * 2), 1 - cursorSizeX - cellScale.x * 2);
                const centerY = Math.min(Math.max(Mouse.coords.y, -1 + cursorSizeY + cellScale.y * 2), 1 - cursorSizeY - cellScale.y * 2);
                const uniforms = this.mouse.material.uniforms;
                uniforms.force.value.set(forceX, forceY);
                uniforms.center.value.set(centerX, centerY);
                uniforms.scale.value.set(cursorSize, cursorSize);
                super.update();
            }
        }
        class Viscous extends ShaderPass {
            constructor(simProps){
                super({
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: viscous_frag,
                        uniforms: {
                            boundarySpace: {
                                value: simProps.boundarySpace
                            },
                            velocity: {
                                value: simProps.src.texture
                            },
                            velocity_new: {
                                value: simProps.dst_.texture
                            },
                            v: {
                                value: simProps.viscous
                            },
                            px: {
                                value: simProps.cellScale
                            },
                            dt: {
                                value: simProps.dt
                            }
                        }
                    },
                    output: simProps.dst,
                    output0: simProps.dst_,
                    output1: simProps.dst
                });
                this.init();
            }
            update(...args) {
                const { viscous, iterations, dt } = args[0] || {};
                if (!this.uniforms) return;
                let fbo_in, fbo_out;
                if (typeof viscous === 'number') this.uniforms.v.value = viscous;
                const iter = iterations ?? 0;
                for(let i = 0; i < iter; i++){
                    if (i % 2 === 0) {
                        fbo_in = this.props.output0;
                        fbo_out = this.props.output1;
                    } else {
                        fbo_in = this.props.output1;
                        fbo_out = this.props.output0;
                    }
                    this.uniforms.velocity_new.value = fbo_in.texture;
                    this.props.output = fbo_out;
                    if (typeof dt === 'number') this.uniforms.dt.value = dt;
                    super.update();
                }
                return fbo_out;
            }
        }
        class Divergence extends ShaderPass {
            constructor(simProps){
                super({
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: divergence_frag,
                        uniforms: {
                            boundarySpace: {
                                value: simProps.boundarySpace
                            },
                            velocity: {
                                value: simProps.src.texture
                            },
                            px: {
                                value: simProps.cellScale
                            },
                            dt: {
                                value: simProps.dt
                            }
                        }
                    },
                    output: simProps.dst
                });
                this.init();
            }
            update(...args) {
                const { vel } = args[0] || {};
                if (this.uniforms && vel) {
                    this.uniforms.velocity.value = vel.texture;
                }
                super.update();
            }
        }
        class Poisson extends ShaderPass {
            constructor(simProps){
                super({
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: poisson_frag,
                        uniforms: {
                            boundarySpace: {
                                value: simProps.boundarySpace
                            },
                            pressure: {
                                value: simProps.dst_.texture
                            },
                            divergence: {
                                value: simProps.src.texture
                            },
                            px: {
                                value: simProps.cellScale
                            }
                        }
                    },
                    output: simProps.dst,
                    output0: simProps.dst_,
                    output1: simProps.dst
                });
                this.init();
            }
            update(...args) {
                const { iterations } = args[0] || {};
                let p_in, p_out;
                const iter = iterations ?? 0;
                for(let i = 0; i < iter; i++){
                    if (i % 2 === 0) {
                        p_in = this.props.output0;
                        p_out = this.props.output1;
                    } else {
                        p_in = this.props.output1;
                        p_out = this.props.output0;
                    }
                    if (this.uniforms) this.uniforms.pressure.value = p_in.texture;
                    this.props.output = p_out;
                    super.update();
                }
                return p_out;
            }
        }
        class Pressure extends ShaderPass {
            constructor(simProps){
                super({
                    material: {
                        vertexShader: face_vert,
                        fragmentShader: pressure_frag,
                        uniforms: {
                            boundarySpace: {
                                value: simProps.boundarySpace
                            },
                            pressure: {
                                value: simProps.src_p.texture
                            },
                            velocity: {
                                value: simProps.src_v.texture
                            },
                            px: {
                                value: simProps.cellScale
                            },
                            dt: {
                                value: simProps.dt
                            }
                        }
                    },
                    output: simProps.dst
                });
                this.init();
            }
            update(...args) {
                const { vel, pressure } = args[0] || {};
                if (this.uniforms && vel && pressure) {
                    this.uniforms.velocity.value = vel.texture;
                    this.uniforms.pressure.value = pressure.texture;
                }
                super.update();
            }
        }
        class Simulation {
            options;
            fbos = {
                vel_0: null,
                vel_1: null,
                vel_viscous0: null,
                vel_viscous1: null,
                div: null,
                pressure_0: null,
                pressure_1: null
            };
            fboSize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            cellScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            boundarySpace = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
            advection;
            externalForce;
            viscous;
            divergence;
            poisson;
            pressure;
            constructor(options){
                this.options = {
                    iterations_poisson: 32,
                    iterations_viscous: 32,
                    mouse_force: 20,
                    resolution: 0.5,
                    cursor_size: 100,
                    viscous: 30,
                    isBounce: false,
                    dt: 0.014,
                    isViscous: false,
                    BFECC: true,
                    ...options
                };
                this.init();
            }
            init() {
                this.calcSize();
                this.createAllFBO();
                this.createShaderPass();
            }
            getFloatType() {
                const isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
                return isIOS ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HalfFloatType"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatType"];
            }
            createAllFBO() {
                const type = this.getFloatType();
                const opts = {
                    type,
                    depthBuffer: false,
                    stencilBuffer: false,
                    minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"],
                    magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"],
                    wrapS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"],
                    wrapT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"]
                };
                for(const key in this.fbos){
                    this.fbos[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](this.fboSize.x, this.fboSize.y, opts);
                }
            }
            createShaderPass() {
                this.advection = new Advection({
                    cellScale: this.cellScale,
                    fboSize: this.fboSize,
                    dt: this.options.dt,
                    src: this.fbos.vel_0,
                    dst: this.fbos.vel_1
                });
                this.externalForce = new ExternalForce({
                    cellScale: this.cellScale,
                    cursor_size: this.options.cursor_size,
                    dst: this.fbos.vel_1
                });
                this.viscous = new Viscous({
                    cellScale: this.cellScale,
                    boundarySpace: this.boundarySpace,
                    viscous: this.options.viscous,
                    src: this.fbos.vel_1,
                    dst: this.fbos.vel_viscous1,
                    dst_: this.fbos.vel_viscous0,
                    dt: this.options.dt
                });
                this.divergence = new Divergence({
                    cellScale: this.cellScale,
                    boundarySpace: this.boundarySpace,
                    src: this.fbos.vel_viscous0,
                    dst: this.fbos.div,
                    dt: this.options.dt
                });
                this.poisson = new Poisson({
                    cellScale: this.cellScale,
                    boundarySpace: this.boundarySpace,
                    src: this.fbos.div,
                    dst: this.fbos.pressure_1,
                    dst_: this.fbos.pressure_0
                });
                this.pressure = new Pressure({
                    cellScale: this.cellScale,
                    boundarySpace: this.boundarySpace,
                    src_p: this.fbos.pressure_0,
                    src_v: this.fbos.vel_viscous0,
                    dst: this.fbos.vel_0,
                    dt: this.options.dt
                });
            }
            calcSize() {
                const width = Math.max(1, Math.round(this.options.resolution * Common.width));
                const height = Math.max(1, Math.round(this.options.resolution * Common.height));
                this.cellScale.set(1 / width, 1 / height);
                this.fboSize.set(width, height);
            }
            resize() {
                this.calcSize();
                for(const key in this.fbos){
                    this.fbos[key].setSize(this.fboSize.x, this.fboSize.y);
                }
            }
            update() {
                if (this.options.isBounce) this.boundarySpace.set(0, 0);
                else this.boundarySpace.copy(this.cellScale);
                this.advection.update({
                    dt: this.options.dt,
                    isBounce: this.options.isBounce,
                    BFECC: this.options.BFECC
                });
                this.externalForce.update({
                    cursor_size: this.options.cursor_size,
                    mouse_force: this.options.mouse_force,
                    cellScale: this.cellScale
                });
                let vel = this.fbos.vel_1;
                if (this.options.isViscous) {
                    vel = this.viscous.update({
                        viscous: this.options.viscous,
                        iterations: this.options.iterations_viscous,
                        dt: this.options.dt
                    });
                }
                this.divergence.update({
                    vel
                });
                const pressure = this.poisson.update({
                    iterations: this.options.iterations_poisson
                });
                this.pressure.update({
                    vel,
                    pressure
                });
            }
        }
        class Output {
            simulation;
            scene;
            camera;
            output;
            constructor(){
                this.simulation = new Simulation();
                this.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
                this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera"]();
                this.output = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawShaderMaterial"]({
                    vertexShader: face_vert,
                    fragmentShader: color_frag,
                    transparent: true,
                    depthWrite: false,
                    uniforms: {
                        velocity: {
                            value: this.simulation.fbos.vel_0.texture
                        },
                        boundarySpace: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]()
                        },
                        palette: {
                            value: paletteTex
                        },
                        bgColor: {
                            value: bgVec4
                        }
                    }
                }));
                this.scene.add(this.output);
            }
            resize() {
                this.simulation.resize();
            }
            render() {
                if (!Common.renderer) return;
                Common.renderer.setRenderTarget(null);
                Common.renderer.render(this.scene, this.camera);
            }
            update() {
                this.simulation.update();
                this.render();
            }
        }
        class WebGLManager {
            props;
            output;
            autoDriver;
            lastUserInteraction = performance.now();
            running = false;
            _loop = this.loop.bind(this);
            _resize = this.resize.bind(this);
            _onVisibility;
            constructor(props){
                this.props = props;
                Common.init(props.$wrapper);
                Mouse.init(props.$wrapper);
                Mouse.autoIntensity = props.autoIntensity;
                Mouse.takeoverDuration = props.takeoverDuration;
                Mouse.onInteract = ()=>{
                    this.lastUserInteraction = performance.now();
                    if (this.autoDriver) this.autoDriver.forceStop();
                };
                this.autoDriver = new AutoDriver(Mouse, this, {
                    enabled: props.autoDemo,
                    speed: props.autoSpeed,
                    resumeDelay: props.autoResumeDelay,
                    rampDuration: props.autoRampDuration
                });
                this.init();
                window.addEventListener('resize', this._resize);
                this._onVisibility = ()=>{
                    const hidden = document.hidden;
                    if (hidden) {
                        this.pause();
                    } else if (isVisibleRef.current) {
                        this.start();
                    }
                };
                document.addEventListener('visibilitychange', this._onVisibility);
            }
            init() {
                if (!Common.renderer) return;
                this.props.$wrapper.prepend(Common.renderer.domElement);
                this.output = new Output();
            }
            resize() {
                Common.resize();
                this.output.resize();
            }
            render() {
                if (this.autoDriver) this.autoDriver.update();
                Mouse.update();
                Common.update();
                this.output.update();
            }
            loop() {
                if (!this.running) return;
                this.render();
                rafRef.current = requestAnimationFrame(this._loop);
            }
            start() {
                if (this.running) return;
                this.running = true;
                this._loop();
            }
            pause() {
                this.running = false;
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
            }
            dispose() {
                try {
                    window.removeEventListener('resize', this._resize);
                    if (this._onVisibility) document.removeEventListener('visibilitychange', this._onVisibility);
                    Mouse.dispose();
                    if (Common.renderer) {
                        const canvas = Common.renderer.domElement;
                        if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
                        Common.renderer.dispose();
                    }
                } catch  {
                /* noop */ }
            }
        }
        const container = mountRef.current;
        container.style.position = container.style.position || 'relative';
        container.style.overflow = container.style.overflow || 'hidden';
        const webgl = new WebGLManager({
            $wrapper: container,
            autoDemo,
            autoSpeed,
            autoIntensity,
            takeoverDuration,
            autoResumeDelay,
            autoRampDuration
        });
        webglRef.current = webgl;
        const applyOptionsFromProps = ()=>{
            if (!webglRef.current) return;
            const sim = webglRef.current.output?.simulation;
            if (!sim) return;
            const prevRes = sim.options.resolution;
            Object.assign(sim.options, {
                mouse_force: mouseForce,
                cursor_size: cursorSize,
                isViscous,
                viscous,
                iterations_viscous: iterationsViscous,
                iterations_poisson: iterationsPoisson,
                dt,
                BFECC,
                resolution,
                isBounce
            });
            if (resolution !== prevRes) sim.resize();
        };
        applyOptionsFromProps();
        webgl.start();
        const io = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            const isVisible = entry.isIntersecting && entry.intersectionRatio > 0;
            isVisibleRef.current = isVisible;
            if (!webglRef.current) return;
            if (isVisible && !document.hidden) {
                webglRef.current.start();
            } else {
                webglRef.current.pause();
            }
        }, {
            threshold: [
                0,
                0.01,
                0.1
            ]
        });
        io.observe(container);
        intersectionObserverRef.current = io;
        const ro = new ResizeObserver(()=>{
            if (!webglRef.current) return;
            if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
            resizeRafRef.current = requestAnimationFrame(()=>{
                if (!webglRef.current) return;
                webglRef.current.resize();
            });
        });
        ro.observe(container);
        resizeObserverRef.current = ro;
        return ()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (resizeObserverRef.current) {
                try {
                    resizeObserverRef.current.disconnect();
                } catch  {
                /* noop */ }
            }
            if (intersectionObserverRef.current) {
                try {
                    intersectionObserverRef.current.disconnect();
                } catch  {
                /* noop */ }
            }
            if (webglRef.current) {
                webglRef.current.dispose();
            }
            webglRef.current = null;
        };
    }, [
        BFECC,
        cursorSize,
        dt,
        isBounce,
        isViscous,
        iterationsPoisson,
        iterationsViscous,
        mouseForce,
        resolution,
        viscous,
        colors,
        autoDemo,
        autoSpeed,
        autoIntensity,
        takeoverDuration,
        autoResumeDelay,
        autoRampDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const webgl = webglRef.current;
        if (!webgl) return;
        const sim = webgl.output?.simulation;
        if (!sim) return;
        const prevRes = sim.options.resolution;
        Object.assign(sim.options, {
            mouse_force: mouseForce,
            cursor_size: cursorSize,
            isViscous,
            viscous,
            iterations_viscous: iterationsViscous,
            iterations_poisson: iterationsPoisson,
            dt,
            BFECC,
            resolution,
            isBounce
        });
        if (webgl.autoDriver) {
            webgl.autoDriver.enabled = autoDemo;
            webgl.autoDriver.speed = autoSpeed;
            webgl.autoDriver.resumeDelay = autoResumeDelay;
            webgl.autoDriver.rampDurationMs = autoRampDuration * 1000;
            if (webgl.autoDriver.mouse) {
                webgl.autoDriver.mouse.autoIntensity = autoIntensity;
                webgl.autoDriver.mouse.takeoverDuration = takeoverDuration;
            }
        }
        if (resolution !== prevRes) sim.resize();
    }, [
        mouseForce,
        cursorSize,
        isViscous,
        viscous,
        iterationsViscous,
        iterationsPoisson,
        dt,
        BFECC,
        resolution,
        isBounce,
        autoDemo,
        autoSpeed,
        autoIntensity,
        takeoverDuration,
        autoResumeDelay,
        autoRampDuration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: `w-full h-full relative overflow-hidden pointer-events-none touch-none ${className || ''}`,
        style: style
    }, void 0, false, {
        fileName: "[project]/app/components/Background.tsx",
        lineNumber: 1223,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/components/Dictaphone.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-speech-recognition/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
"use client";
'use client';
;
;
;
;
const Dictaphone = ({ appendToMessage })=>{
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpeechRecognition"])();
    const Dictaphone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
        loadableGenerated: {
            modules: [
                "[project]/app/components/Dictaphone.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        },
        ssr: false
    });
    // Keep track of what has already been appended
    const lastTranscriptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newSpeech = transcript.replace(lastTranscriptRef.current, "");
        if (newSpeech) {
            appendToMessage((prev)=>prev + newSpeech); // append new speech only
            lastTranscriptRef.current = transcript;
        }
    }, [
        transcript,
        appendToMessage
    ]);
    if (!browserSupportsSpeechRecognition) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-2xl bg-gray-800/50 border border-gray-700 text-white text-center w-64",
            children: "Browser doesn't support speech recognition."
        }, void 0, false, {
            fileName: "[project]/app/components/Dictaphone.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 p-4 rounded-2xl bg-pink-50/20 border border-pink-400 shadow-lg flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-extrabold text-gray-300 text-center",
                children: [
                    "Microphone: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: listening ? "on 🎙️" : "off 🔇"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Dictaphone.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Dictaphone.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].startListening({
                                continuous: true,
                                language: "en-US"
                            }),
                        className: "w-full px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white font-extrabold shadow-md hover:opacity-90 transition-all",
                        children: "Start"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Dictaphone.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stopListening(),
                        className: "w-full font-extrabold px-2 py-2 bg-gray-700 rounded-xl text-white shadow-md hover:bg-gray-600 transition-all",
                        children: "Stop"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Dictaphone.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            resetTranscript(); // clear internal transcript
                            lastTranscriptRef.current = ""; // reset tracking
                            appendToMessage(()=>""); // clear parent textarea
                        },
                        className: "w-full px-2 py-2 bg-pink-600 rounded-xl font-extrabold text-white shadow-md hover:bg-pink-500 transition-all",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Dictaphone.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Dictaphone.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Dictaphone.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Dictaphone;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Dictaphone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Dictaphone.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const learnMoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [htmlString, setHtmlString] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showHtml, setShowHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [htmlUrl, setHtmlUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Update HTML preview URL when htmlString changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!htmlString) return;
        const blob = new Blob([
            htmlString
        ], {
            type: "text/html"
        });
        const url = URL.createObjectURL(blob);
        setHtmlUrl(url);
        return ()=>URL.revokeObjectURL(url);
    }, [
        htmlString
    ]);
    // Create session for AI agent
    const createSession = async ()=>{
        const appName = "lead_agent";
        const userId = "u_123";
        const sessionId = crypto.randomUUID();
        const url = `http://localhost:8000/apps/${appName}/users/${userId}/sessions/${sessionId}`;
        const payload = {
            state: {
                key1: "value1",
                key2: 42
            }
        };
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            console.log("Session created!");
        } catch (err) {
            console.error("Failed to create session:", err);
        }
        return sessionId;
    };
    // Prompt AI agent
    const promptAgent = async ()=>{
        setLoading(true);
        try {
            const id = await createSession();
            const url = "http://localhost:8000/run";
            const payload = {
                app_name: "lead_agent",
                user_id: "u_123",
                session_id: id,
                new_message: {
                    role: "user",
                    parts: [
                        {
                            text: message
                        }
                    ]
                }
            };
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            const htmlOutput = data[2].content.parts[0].text;
            setResponse(htmlOutput);
            setHtmlString(htmlOutput);
            setShowHtml(true);
        } catch (err) {
            console.error("Error calling AI agent:", err);
        } finally{
            setLoading(false);
        }
    };
    // Handle MP3/MP4 file selection for transcription
    const handleFileSelect = async (file)=>{
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("/api/transcribe", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            // Append transcription to existing textarea content
            setMessage((prev)=>prev ? prev + " " + data.text : data.text);
        } catch (err) {
            console.error("Transcription failed:", err);
        } finally{
            setLoading(false);
        }
    };
    const scrollToLearnMore = ()=>{
        learnMoreRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative flex flex-col items-center justify-center min-h-screen w-full text-center p-8 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "absolute top-0 left-0 w-full h-screen",
                    colors: [
                        "#5227FF",
                        "#FF9FFC",
                        "#B19EEF"
                    ],
                    mouseForce: 20,
                    cursorSize: 100,
                    isViscous: false,
                    viscous: 30,
                    iterationsViscous: 32,
                    iterationsPoisson: 32,
                    resolution: 0.5,
                    isBounce: false,
                    autoDemo: true,
                    autoSpeed: 0.5,
                    autoIntensity: 2.2,
                    takeoverDuration: 0.25,
                    autoResumeDelay: 1000,
                    autoRampDuration: 0.6
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 bg-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-left text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-extrabold bg-linear-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent leading-tight text-center space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Presentations "
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "and PDF Generation at the Click of a Button"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 143,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-1 w-full bg-pink-500 mx-auto my-2 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 149,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-200 leading-relaxed mt-2",
                                children: "Transform your text, story, or even audio into a beautiful"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-extrabold text-purple-300 leading-relaxed ",
                                children: "AI-generated presentations"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-200 leading-relaxed mt-2",
                                children: "Just type your story or utilize your microphone to populate the box on the right and we’ll handle the rest!"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: scrollToLearnMore,
                                    className: "px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300",
                                    children: "Learn More"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 5
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 162,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center gap-4",
                        children: [
                            htmlUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: htmlUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all",
                                        children: "Open Generated Slideshow"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: htmlUrl,
                                        download: "generated.html",
                                        className: "px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all",
                                        children: "Download Slideshow"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Enter instructions or preferences for your presentation...",
                                className: "w-full mt-4 p-4 rounded-2xl bg-pink-50/20 border border-pink-400 placeholder-pink-200 text-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition-colors",
                                rows: 4,
                                value: message,
                                onChange: (e)=>setMessage(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center w-full mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 sm:flex-none justify-start items-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Dictaphone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            appendToMessage: (text)=>setMessage(text)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center w-full mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: promptAgent,
                                            className: "px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-all duration-300",
                                            children: "Enter"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: learnMoreRef,
                className: "flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-32 bg-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-left text-white space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent",
                                children: "How It Works"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-300 leading-relaxed",
                                children: "Our app uses A2A (Agent-to-Agent) technology to automatically generate presentations or PDF summaries from any given topic by allowing the user to input their data manually or by using their own microphone input. Behind the scenes, it uses ADK agents that follow a structured protocol to coordinate LLM (Large Language Model) calls, ensuring high-quality, accurate, and visually clear outputs. The goal is simple: make creating presentations easy, fast, and accessible for everyone — even those with no technical background."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex justify-center mt-8 md:mt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/A2A.png",
                            alt: "A2A photo",
                            width: 400,
                            height: 300,
                            className: "rounded-2xl shadow-lg border-2 border-pink-500"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f97d64c0._.js.map