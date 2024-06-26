const vertShader = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 pos;

void main(void){
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    pos = aTextureCoord;
}`;

const fragShader = `varying vec2 pos;
uniform sampler2D texture;
uniform float delta;
uniform float ratio;

vec4 transparent = vec4(0.0);
vec4 mainColor = vec4(0.0823529411764706, 0.231372549019608, 0.313725490196078, 1.0);

void main(void){
    vec4 perlin = texture2D(texture, vec2(pos.x, pos.y * ratio) * 0.5);
    vec4 mask = step(perlin, vec4(delta));  
    vec4 outColor = mix(transparent, mainColor, vec4(mask.x));
    gl_FragColor = outColor;
}`

const app = new PIXI.Application({
    backgroundColor: 0x153B50,
    backgroundAlpha: 0
});

const frame = document.getElementById("frame");
frame.appendChild(app.view);
const canvas = frame.querySelector("canvas");

window.addEventListener("resize", () =>{
    uniforms.ratio = document.body.scrollHeight / document.body.scrollWidth;
    resizeShader();
});

console.log();

let uniforms = {
    delta: 0,
    ratio: document.body.scrollHeight / document.body.scrollWidth,
    texture: PIXI.Texture.from("data:image/jpeg;base64,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")
};

uniforms.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

const myFilter = new PIXI.Filter(vertShader, fragShader, uniforms);

const img = new PIXI.Sprite(PIXI.Texture.from(canvas));

img.filters = [myFilter];

app.stage.addChild(img);

app.ticker.add(animate);

let fadeIn = false;
let fadeOut = false;
let nextLocation = "";
let delta = 1;
let fadeSpeed = 1.2;
function animate(){
    if(fadeIn){
        delta -= fadeSpeed * app.ticker.elapsedMS / 1000;
        uniforms.delta = delta;
        if(delta <= 0){
            fadeIn = false;
        }
    }
    else if(fadeOut){
        delta += fadeSpeed * app.ticker.elapsedMS / 1000;
        uniforms.delta = delta;
        if(delta >= 1){
            fadeOut = false;
            window.location = nextLocation;
        }
    }
}

const resizeShader = () => {
    const parent = app.view.parentNode;
    app.renderer.resize(parent.clientWidth, parent.clientHeight);
    img.width = parent.clientWidth;
    img.height = parent.clientHeight;
}

resizeShader();

const leavePage = (event) =>{
    event.preventDefault();
    nextLocation = event.currentTarget.getAttribute("href");
    fadeOut = true;
}

const links = document.getElementsByClassName("link-button");
for(let i = 0; i < links.length; i++){
    links[i].addEventListener("click", leavePage);
}

window.onpageshow = ()=>{
    document.getElementById("frame").style.backgroundColor = "#00000000";
    fadeIn = true;
}