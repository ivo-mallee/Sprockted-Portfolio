document.getElementById("githubLink").addEventListener("click",githubredirect);
document.getElementById("YoutubeLink").addEventListener("click",youtubeRedirct);
function githubredirect() 
{
    window.location.replace("https://github.com/ivo-mallee");
}

function youtubeRedirct() 
{
    window.location.replace("https://www.youtube.com/channel/UCdTh4Tgan083mfWJ0Ip1GOg");
}

function Object(X, Y,health) {
    this.X = X;
    this.Y = Y;
    this.health = health;
  }


let player = new Object(40,600,100);
let aliens = [];
let AliensAlive =0;
let direction = 1;
let Missile  = new Object(1000,1000,100);
for (let i =0; i<20;i++) 
{
 let test = new Object(i*15,40,100);
 aliens.push(test);
}
console.log(aliens);
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

document.addEventListener('keydown', function(event) 
{
if (event.key == "d") {player.X+=10;}
if (event.key == "a") {player.X-=10;}
if (event.key == "f") {shoot();}
if (event.key == "r" && AliensAlive ==0) {ResetGame();}
})

function ResetGame() 
{
    for (let i=0; i<aliens.length;i++) 
    {
       aliens[i].X = i*15;
       aliens[i].Y = 40;
       aliens[i].health = 100;
    }
}


setInterval(Update,1);

function Update() 
{
checkCollisions();
moveAliens();
Draw(true); //update the screen
checkGameState();
}

function Draw(DrawAliens) 
{
    ctx.beginPath();
    ctx.clearRect(0,0,800,600);
    if (DrawAliens) {
    for (let i=0; i<aliens.length;i++)  //draw all the aliens
    {
        if (aliens[i].health != 0) {
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.arc(aliens[i].X,aliens[i].Y,5,0,2*Math.PI);
        ctx.stroke();
        }
    }
}
    ctx.strokeStyle = 'red';//set the color to red and draw the player
    ctx.beginPath();
    ctx.arc(player.X,player.Y,5,0,2*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = 'Blue'; //set the color to blue and draw the players' missile
    ctx.beginPath();
    ctx.arc(Missile.X,Missile.Y,1,0,2*Math.PI);
    ctx.stroke();
}

function moveAliens() 
{
    for (let i=0; i<aliens.length;i++) //loop through all the aliens
    {
        aliens[i].X +=direction; //move all the aliens either left or right
        if (aliens[i].X > 790) {direction = -1;} //if one of the aliens is too close to the edge on the right. make it go left
        if (aliens[i].X < 10) {direction = 1;} //if one of the aliens is too close to the edge on the left. make it go right
    }
    Missile.Y--; //move the missile up
}
function checkCollisions() 
{
    for (let i=0; i<aliens.length;i++) 
    {
        let distance = Math.sqrt( //calculate the distance between the alien selected by i
            Math.pow(aliens[i].Y-Missile.Y,2) 
            + 
            Math.pow(aliens[i].X-Missile.X,2)
        );
        
        if (distance <10) {aliens[i].health=0;} //if this distance is lower than 10 kill the alien
    }
}

function shoot() 
{
Missile.X = player.X; //reset the missile to the players position
Missile.Y = player.Y;
}

function checkGameState() 
{
        AliensAlive =0; //assume all the aliens are dead
        for (let i=0; i<aliens.length;i++) //loop through all the aliens
        {
        if (aliens[i].health != 0) {AliensAlive++;} //if this alien is alive make it add to the alien count
        }
        if (AliensAlive ==0) {
        ctx.font = "30px Arial";
        ctx.strokeText("You Won! Press R to restart", 10, 50); /*if all the aliens are dead */
} 


}