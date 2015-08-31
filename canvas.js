// creates Canvas with Score and image of kitten

var c = document.querySelector("#c");
    var ctx = c.getContext("2d");

    ctx.font = "36px impact";
    ctx.textAlign = "center";

    ctx.fillStyle = "white";
    ctx.strokeText("CLICKS: ", c.width / 2, 40); 

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeText("CLICKS: ", c.width / 2, 40);

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 2, 45);
    }
    img.src='kitten.jpg';

// working on eventhandler



$('#my-elem').click(function(e) {
    score =+ 1;
    console.log(score);
});

function score() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    //This displays the score and the level
    ctx.font = "36px impact";
    ctx.textAlign = "center";

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeText("Score: " + score + 250, 90); 
};