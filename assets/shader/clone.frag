uniform sampler2D src, srcBlur, dstBlur;
uniform ivec2 ciWindowSize;

in vec2     TexCoord;
out highp vec4   Color;

void main() {
    vec4 srcColorBlur = texture2D(srcBlur, TexCoord);
    if(srcColorBlur.a > 0.) {
        vec3 srcColor = texture2D(src, TexCoord).rgb;
        vec3 dstColorBlur = texture2D(dstBlur, TexCoord).rgb;
        vec3 offset = (dstColorBlur.rgb - srcColorBlur.rgb);
        Color = vec4(srcColor + offset, 1.);
    } else {
        Color = vec4(0.);
    }
}