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
    texture: PIXI.Texture.from("./Images/PerlinNoise.png")
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
function animate(){
    if(fadeIn){
        delta -= 0.1;
        uniforms.delta = delta;
        if(delta <= 0){
            fadeIn = false;
        }
    }
    else if(fadeOut){
        delta += 0.1;
        uniforms.delta = delta;
        if(delta >= 1){
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