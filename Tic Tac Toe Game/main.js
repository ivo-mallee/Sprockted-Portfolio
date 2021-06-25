var BlockData = Array.from(Array(3), () => new Array(3));
var turn ="Red"

for (let X =0; X<3; X++) 
{
    for (let Y =0; Y<3; Y++) 
    {
    BlockData[X][Y] = "NONE";
    
        
    }
}
console.log(BlockData);
function ClickEvent(X,Y) 
{
if (BlockData[Y][X] == "NONE") {BlockData[Y][X] = turn; console.log(BlockData);}
UpdateTiles();
CheckRed();
CheckGreen() 
if (turn == "Green") {turn = "Red";} else if (turn == "Red") {turn = "Green"}

}


function UpdateTiles() 
{
    for (let X =0; X<3; X++) 
    {
        for (let Y =0; Y<3; Y++) 
        {
        document.getElementById(X+","+Y).style.backgroundColor = BlockData[Y][X];
        
            
        }
    }
}

function CheckRed() 
{
    if (BlockData[0][0] == "Red" && BlockData[1][0] == "Red" && BlockData[2][0] == "Red") {BlockData[0][0] = "cyan";  BlockData[1][0] = "cyan"; BlockData[2][0] = "cyan"; UpdateTiles(); winner("Red");}
    if (BlockData[0][1] == "Red" && BlockData[1][1] == "Red" && BlockData[2][1] == "Red") {BlockData[0][1] = "cyan"; BlockData[1][1] = "cyan"; BlockData[2][1] = "cyan" ;UpdateTiles(); winner("Red");}
    if (BlockData[0][2] == "Red" && BlockData[1][2] == "Red" && BlockData[2][2] == "Red") {BlockData[0][2] = "cyan"; BlockData[1][2] = "cyan"; BlockData[2][2] = "cyan"; UpdateTiles(); winner("Red");}
    
    if (BlockData[0][0] == "Red" && BlockData[0][1] == "Red" && BlockData[0][2] == "Red") {BlockData[0][0] = "cyan";  BlockData[0][1] = "cyan"; BlockData[0][2] = "cyan"; UpdateTiles(); winner("Red");}
    if (BlockData[1][0] == "Red" && BlockData[1][1] == "Red" && BlockData[1][2] == "Red") {BlockData[1][0] = "cyan";  BlockData[1][1] = "cyan"; BlockData[1][2] = "cyan"; UpdateTiles(); winner("Red");}
    if (BlockData[2][0] == "Red" && BlockData[2][1] == "Red" && BlockData[2][2] == "Red") {BlockData[2][0] = "cyan";  BlockData[2][1] = "cyan"; BlockData[2][2] = "cyan"; UpdateTiles(); winner("Red");}
    
    if (BlockData[0][0] == "Red" && BlockData[1][1] == "Red" && BlockData[2][2] == "Red") {BlockData[0][0] = "cyan";  BlockData[1][1] = "cyan"; BlockData[2][2] = "cyan"; UpdateTiles(); winner("Red");}
    if (BlockData[0][2] == "Red" && BlockData[1][1] == "Red" && BlockData[2][0] == "Red") {BlockData[0][2] = "cyan";  BlockData[1][1] = "cyan"; BlockData[2][0] = "cyan"; UpdateTiles(); winner("Red");}
    

}

function CheckGreen() 
{
if (BlockData[0][0] == "Green" && BlockData[1][0] == "Green" && BlockData[2][0] == "Green") {BlockData[0][0] = "cyan";  BlockData[1][0] = "cyan"; BlockData[2][0] = "cyan"; UpdateTiles(); winner("green");}
if (BlockData[0][1] == "Green" && BlockData[1][1] == "Green" && BlockData[2][1] == "Green") {BlockData[0][1] = "cyan"; BlockData[1][1] = "cyan"; BlockData[2][1] = "cyan" ;UpdateTiles(); winner("green");}
if (BlockData[0][2] == "Green" && BlockData[1][2] == "Green" && BlockData[2][2] == "Green") {BlockData[0][2] = "cyan"; BlockData[1][2] = "cyan"; BlockData[2][2] = "cyan"; UpdateTiles(); winner("green");}

if (BlockData[0][0] == "Green" && BlockData[0][1] == "Green" && BlockData[0][2] == "Green") {BlockData[0][0] = "cyan";  BlockData[0][1] = "cyan"; BlockData[0][2] = "cyan"; UpdateTiles(); winner("green");}
if (BlockData[1][0] == "Green" && BlockData[1][1] == "Green" && BlockData[1][2] == "Green") {BlockData[1][0] = "cyan";  BlockData[1][1] = "cyan"; BlockData[1][2] = "cyan"; UpdateTiles(); winner("green");}
if (BlockData[2][0] == "Green" && BlockData[2][1] == "Green" && BlockData[2][2] == "Green") {BlockData[2][0] = "cyan";  BlockData[2][1] = "cyan"; BlockData[2][2] = "cyan"; UpdateTiles(); winner("green");}

if (BlockData[0][0] == "Green" && BlockData[1][1] == "Green" && BlockData[2][2] == "Green") {BlockData[0][0] = "cyan";  BlockData[1][1] = "cyan"; BlockData[2][2] = "cyan"; UpdateTiles(); winner("green");}
if (BlockData[0][2] == "Green" && BlockData[1][1] == "Green" && BlockData[2][0] == "Green") {BlockData[0][2] = "cyan";  BlockData[1][1] = "cyan"; BlockData[2][0] = "cyan"; UpdateTiles(); winner("green");}
}



function winner(P1) 
{
document.getElementById("winnerBox").innerHTML = P1 + " Won!";
for (let X =0; X<3; X++) 
{
    for (let Y =0; Y<3; Y++) 
    {
    BlockData[X][Y] = "cyan";
    
        
    }
}


    
}