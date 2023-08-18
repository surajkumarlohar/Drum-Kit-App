const drum = document.querySelectorAll(".drum");
for(i=0; i<drum.length; i++){
    drum[i].addEventListener("click", function(){
        makeSound(this.innerHTML);        
        makeEffect(this.innerHTML);
    })
};

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeEffect(event.key);
});

function makeEffect(key){
    const drumEffect = document.querySelector("." + key);
    drumEffect.classList.add("pressed");
    setTimeout(()=>{
        drumEffect.classList.remove("pressed");
    }, 100)
};

function makeSound(key){
    switch(key){
        case "w":
            let audioW = new Audio("./sounds/tom-1.mp3");
            audioW.play();
        break;
        case "a":
            let audioA = new Audio("./sounds/tom-2.mp3");
            audioA.play();
        break;
        case "s":
            let audioS = new Audio("./sounds/tom-3.mp3");
            audioS.play();
        break;
        case "d":
            let audioD = new Audio("./sounds/tom-4.mp3");
            audioD.play();
        break;
        case "j":
            let audioJ = new Audio("./sounds/snare.mp3");
            audioJ.play();
        break;
        case "k":
            let audioK = new Audio("./sounds/crash.mp3");
            audioK.play();
        break;
        case "l":
            let audioL = new Audio("./sounds/kick-bass.mp3");
            audioL.play();
        break;
        default: console.log(key + ": This is a wrong key Buddy!!!");
    }

    // if(this.innerHTML == "w"){
        //     let audioW = new Audio("./sounds/tom-1.mp3");
        //     audioW.play();
        // }
        // else if(this.innerHTML == "a"){
        //     let audioA = new Audio("./sounds/tom-2.mp3");
        //     audioA.play();
        // }
        // else if(this.innerHTML == "s"){
        //     let audioS = new Audio("./sounds/tom-3.mp3");
        //     audioS.play();
        // }
        // else if(this.innerHTML == "d"){
        //     let audioD = new Audio("./sounds/tom-4.mp3");
        //     audioD.play();
        // }
        // else if(this.innerHTML == "j"){
        //     let audioJ = new Audio("sounds/snare.mp3");
        //     audioJ.play();
        // }
        // else if(this.innerHTML == "k"){
        //     let audioK = new Audio("./sounds/crash.mp3");
        //     audioK.play();
        // }
        // else{
        //     let audioL = new Audio("./sounds/kick-bass.mp3");
        //     audioL.play();
        // }
}