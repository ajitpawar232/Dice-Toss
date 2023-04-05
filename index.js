var num1=Math.floor(Math.random()*6)+1;
var imageSource1="images/" + "dice" + num1 + ".png";

var num2=Math.floor(Math.random()*6)+1;
var imageSource2="images/" + "dice" + num2 + ".png";

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

image1.setAttribute("src",imageSource1);
image2.setAttribute("src",imageSource2);

var heading=document.querySelector("h1");

if(num1>num2){
    heading.innerHTML="⛳Player 1 Win!";
}
else if(num2>num1){
    heading.innerHTML="Player 2 Win!⛳";
}
else{
    heading.innerHTML="Draw!";
}