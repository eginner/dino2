const dino = document.getElementById("dino");
const block = document.querySelector ('.block');
const cactus = document.querySelector ('.cactus');

document.addEventListener("touchstart", function(event) {

    if(dino.className !== "jump"){
        jump();
    }
    
})

document.addEventListener("keydown", function(event) {

    if(dino.className !== "jump"){
        jump();
    }
    
})

function jump () {

        dino.classList.add("jump")

    setTimeout(function(){
        dino.classList.remove("jump")
    },1200)
}

let i = 0

setInterval(() => {
    i++
}, 2500);



let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusTop = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusTop < 50 && cactusTop > 0 && dinoTop >= -105){
        block.classList.remove("block")
        block.classList.add("block2")
        cactus.classList.remove('cactus')
        cactus.classList.add('stop')
        alert(i)
         setTimeout(function(){
            window.location.reload()
        },1600) 

       /*  alert('papapa') */
    }
},10)

/* game.addEventListener("click", () => {
    dino.classList.add ("jump");
}); */