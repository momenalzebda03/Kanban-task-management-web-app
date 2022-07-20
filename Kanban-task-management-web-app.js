var click = function () {

    var body = document.getElementById("body");
    var body1 = document.getElementById("body1");
    var body2 = document.getElementById("body2");
    var body3 = document.getElementById("body3");
    var body4 = document.getElementById("body4");
    var body5 = document.getElementById("body5");
    var body6 = document.getElementById("body6");
    var body7 = document.getElementById("body7");
    var body8 = document.getElementById("body8");
    var body9 = document.getElementById("body9");
    var body10 = document.getElementById("body10");
    var body11 = document.getElementById("body11");
    var body12 = document.getElementById("body12");
    var body13 = document.getElementById("body13");
    var imghide = document.getElementById("imghide");

    body.style.display = "none";
    body1.style.display = "none";
    body2.style.display = "none";
    body3.style.display = "none";
    body4.style.display = "none";
    body5.style.display = "none";
    body6.style.display = "none";
    body7.style.display = "none";
    body8.style.display = "none";
    body9.style.display = "none";
    body10.style.display = "none";
    body11.style.display = "none";
    body12.style.display = "none";
    body13.style.display = "none";
    imghide.style.display = "none";
}

document.getElementById("imghide").onclick = click;

var click1 = function () {

    var divblack = document.getElementById("divblack");
    var divdisplay1 = document.getElementById("divdisplay1");
    var divdisplay2 = document.getElementById("divdisplay2");

    divblack.style.display = "block";
    divdisplay1.style.display = "none";
    divdisplay2.style.display = "none";
}

document.getElementById("imgplus").onclick = click1;

var click2 = function () {

    var divblack1 = document.getElementById("divblack1");
    var divblack = document.getElementById("divblack");

    divblack.style.display = "none";
    divblack1.style.display = "block";
}

document.getElementById("createtaks").onclick = click2;