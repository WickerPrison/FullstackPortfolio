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

const app = new PIXI.Application({
    backgroundColor: 0x153B50,
    backgroundAlpha: 0
});

const frame = document.getElementById("frame");
frame.appendChild(app.view);
const canvas = frame.querySelector("canvas");

window.addEventListener("resize", () =>{
    resizeShader();
});

let vShader = vertShader;
let fShader = fragShader;
let uniforms = {
    delta: 0,
    texture: PIXI.Texture.from("https://imgs.search.brave.com/RUDoz4srPjriKOWd0E7nUwDgGKVhTVU5TSRAJAbvyf8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnN0/YWNrLmltZ3VyLmNv/bS9JRjd0MC5wbmc")
};

const myFilter = new PIXI.Filter(vShader, fShader, uniforms);

const img = new PIXI.Sprite(PIXI.Texture.from(canvas));

img.filters = [myFilter];

app.stage.addChild(img);

app.ticker.add(animate);

let fadeIn = true;
let fadeOut = false;
let nextLocation = "";
let delta = 1;
let fadeSpeed = 1.5;
function animate(){
    if(fadeIn){
        console.log(app.ticker.FPS);
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

window.onload = ()=>{
    document.getElementById("frame").style.backgroundColor = "#00000000";
}