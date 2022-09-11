// Lấy đối tượng
var button = document.getElementById("color0");
var colorhex = document.getElementById("color-hex");

var button1 = document.getElementById("color1");
var colorhex1 = document.getElementById("color-hex1");

var button2 = document.getElementById("color2");
var colorhex2 = document.getElementById("color-hex2");

var saveButton = document.getElementById("color");
var saveButtonGardent = document.getElementById("color-gardent");

// Thêm sự kiện cho đối tượng
button.addEventListener('click', function(){
    setColor(colorhex)
});

saveButton.addEventListener('click', function(){
    setBgColor(colorhex.value);
});


button1.addEventListener('click', function(){
    setColor(colorhex1)
});
button2.addEventListener('click', function(){
    setColor(colorhex2)
});

saveButtonGardent.addEventListener('click', function(){
    setBgColorGardent(colorhex1.value,colorhex2.value);
});

// Thêm function
function setColor(input) {
    const ranColor = Math.floor(Math.random()*16777215).toString(16);
    input.value = "#" + ranColor;
}

function setBgColor(color) {
    document.body.style.removeProperty("background-image");
    document.body.style.backgroundColor = color;
}

function setBgColorGardent(color1,color2) {
    document.body.style.removeProperty("background-color");
    document.body.style.backgroundImage = "linear-gradient("+color1+","+color2+")";
}