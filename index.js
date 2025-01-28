// function handleclick(event) {
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// }

document.querySelectorAll(".letter").forEach((button) => {
    button.addEventListener("click", function() {
        getSound(this.innerHTML);
        activeButton(this.innerHTML);
    }) ;
}) ;

document.addEventListener("keydown", function(event) {
    getSound(event.key);
    activeButton(event.key);
});

function getSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "d":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(this.innerHTML);
            break;
    }
}

function activeButton(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}