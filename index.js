
var numberOfDrums=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML =this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

    function makesound(key){
        switch(key){
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
                var audio= new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                case "s":
                    var audio= new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;

                    case "d":
                        var audio= new Audio("sounds/tom-4.mp3");
                        audio.play();
                        break;
                        case "j":
                            var audio= new Audio("sounds/snare.mp3");
                            audio.play();
                            break;
                            case "k":
                                var audio= new Audio("sounds/crash.mp3");
                                audio.play();
                                break;
                                case "l":
                                    var audio= new Audio("sounds/kick-bass.mp3");
                                    audio.play();
                                    break;
         default:
             alert(buttonInnerHTML);
    }
    
};

function buttonAnimation(currentKey){
    var activeKey=document.querySelector("."+currentKey);

    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100)
}