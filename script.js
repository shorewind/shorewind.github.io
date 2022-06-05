function show(){
    let image = document.getElementById("image");
    image.src = "assets/image.png"

    document.getElementById("button").style.display = "none";
    document.getElementById("hello").style.display = "none";
    document.getElementById("intro").style.display = "none";

    let music = new Audio("assets/music.mp3");
    music.addEventListener("ended", function() {
        this.currentTime = 0;
        this.play();
    })
    music.play();
} 

function date(){
    const options = {month: "long", day: "numeric", year: "numeric"}
    document.write(new Date().toLocaleDateString(undefined, options));
}

function imageClick(url){
    window.open(url);
}
