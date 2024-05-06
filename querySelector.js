const btn=document.querySelector("button")
const canvas=document.querySelector("canvas")
const ctx=canvas.getContext("2d")
document.addEventListener("Contect loaded", ()=>{
    canvas.width=document.documentElement.clientWidth;
    canvas.height=document.documentElement.clientHeight;
});
function urge(number){
    return Math.floor(Math.random()*number)
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i=0;i<50;i++){
        ctx.beginPath();
        ctx.fillStyle="red"
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            0,
            2*Math.PI
        );
        ctx.fill()
    }
}
btn.addEventListener("Click",draw)
