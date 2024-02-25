module.exports = {
	vertexShader: () => {
		return `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uVelo;
        void main() {
          vec3 pos = position;
          pos.x += sin(pos.y*uVelo+uTime)/1.5 * uVelo;
          pos.y += sin(pos.x*uVelo+uTime)/1.5 * uVelo;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
        }`;
	},
	fragmentShader: () => {
		return `
        uniform sampler2D uTexture;
        uniform sampler2D uTexture2;
        uniform vec2 uResolution;
        varying vec2 vUv;
        uniform vec2 uMouse;
        uniform float uTime;
        uniform float uVelo;
        uniform float uOpacity;
        uniform float scale;
        uniform float smoothness;
        uniform float seed;
        float random(vec2 co) {
            highp float a = seed;
            highp float b = 78.233;
            highp float c = 43758.5453;
            highp float dt= dot(co.xy ,vec2(a,b));
            highp float sn= mod(dt,3.14);
            return fract(sin(sn) * c);
        }
        float noise (in vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);
  
            // Four corners in 2D of a tile
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));
  
            // Smooth Interpolation
  
            // Cubic Hermine Curve.  Same as SmoothStep()
            vec2 u = f*f*(3.0-2.0*f);
            // u = smoothstep(0.,1.,f);
  
            // Mix 4 coorners porcentages
            return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
            uv -= disc_center;
            uv*=uResolution;
            float dist = sqrt(dot(uv, uv));
            return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
        }
        void main()  {
            vec2 newUV = vUv;
            float c = circle(vUv, uMouse, 0.075 + (1.0 - uVelo), 0.025);
            float r = texture2D(uTexture2, newUV.xy  -= c * (0.1 * .1 * uVelo)).x;
            float g = texture2D(uTexture2, newUV.xy).y;
            float b = texture2D(uTexture2, newUV.xy  += c * (0.1 * .1 * uVelo)).z;
            vec4 color = vec4(r * 0.4, g * (1.0 - uVelo), b * 1.75, uOpacity);
            vec4 color2 = vec4(r * 0.3, g * 0.3, b, uOpacity);
            if (uOpacity < 1.0) {
                gl_FragColor = color2;
                return;
            }

            float finalMask = smoothstep(0.4, 0.5, c);
  
            vec4 hover = texture2D(uTexture, vUv);
  
            float m = step(distance(hover, color), uVelo);
            vec4 finalImage = mix(mix(hover, color, m), color, pow(uVelo, 5.0));
            if (uVelo == 0.0) {
                gl_FragColor = finalImage;
            } else {
                gl_FragColor = mix(color2, finalImage, c);
            }
		}`;
	}
};
