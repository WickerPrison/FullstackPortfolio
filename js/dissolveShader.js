const fragShader = `varying vec2 pos;
uniform sampler2D texture;
uniform float delta;

vec4 transparent = vec4(0.0);
vec4 mainColor = vec4(0.0823529411764706, 0.231372549019608, 0.313725490196078, 1.0);

void main(void){
    vec4 perlin = texture2D(texture, pos);
    vec4 mask = step(perlin, vec4(delta));

    vec4 outColor = mix(transparent, mainColor, vec4(mask.x));

    //vec4 outColor = mix(transparent, vec4(1.0), vec4(mask.x));
    //vec4 mask2 = step(perlin, vec4(delta - 0.05));
    //outColor = mix(outColor, mainColor, mask2);

    gl_FragColor = outColor;
}`