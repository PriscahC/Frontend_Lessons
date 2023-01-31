var box = document.getElementById("div");
var p = document.querySelector('p');

function changeColor(color) {
    if(box.style.background == 'red') {
        box.style.background = 'blue';
    } else{
        box.style.background = 'red';    //if and else create interchanging of the colors.
    }
    
}       
function btn() {
    changeColor();              //we need the two functions to make the button work on the box.
    p.innerHTML= "Hooray!!";
}      



window.onload = function () {
    let c = document.getElementById("celcius");
    let f = document.getElementById ("fahr");
    c.oninput = function () {
        f.value = (c.value * 9/5) + 32;};   //formula:Fahrenheit=(celcius*9/5)+32
    f.oninput = function () {
        c.value = (f.value-32)*5/9 ; 
    }
};
window.onload = function () {
    let m = document.getElementById("Metres");
    let km = document.getElementById ("Kilometres");
    m.oninput = function () {
        km.value = (m.value / 1000);};   //formula:mtrs to km = value * 1000
    km.oninput = function () {
        m.value = (km.value*1000) ; 
    }
}; 
