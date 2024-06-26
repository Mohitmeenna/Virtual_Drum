for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        switch (button) {
            case "w":
                var sound = new Audio("./sounds/tom-1.mp3");
                sound.play();
                break;
            case "a":
                var sound = new Audio("./sounds/tom-2.mp3");
                sound.play();
                break;
            case "s":
                var sound = new Audio("./sounds/tom-3.mp3");
                sound.play();
                break;
            case "d":
                var sound = new Audio("./sounds/tom-4.mp3");
                sound.play();
                break;
            case "j":
                var sound = new Audio("./sounds/snare.mp3");
                sound.play();
                break;
            case "k":
                var sound = new Audio("./sounds/crash.mp3");
                sound.play();
                break;
            case "l":
                var sound = new Audio("./sounds/kick-bass.mp3");
                sound.play();
                break;

            default:
                break;
        }

        buttonAnimation(button);
    }
    );
}


// it make sound when keyboard button is clicked 
document.addEventListener("keydown", function (event) {
    var key = event.key;
    switch (key) {
        case "w":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;

        default:
            break;
    }
    buttonAnimation(key);
});


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

// var sound = new Audio("./sounds/tom-1.mp3");

// sound.play();

