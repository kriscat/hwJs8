let lefttop = document.getElementById("leftCorner");
let righttop = document.getElementById("rightCorner");
let leftBottom = document.getElementById("leftBottom");
let rightBottom = document.getElementById("rightBottom");
let gallery = document.getElementById("gallery");

gallery.style.border = "2px dotted silver";
gallery.style.margin = "5px";
gallery.style.width = "85%";
gallery.style.justifyContent = "center";
gallery.style.textAlign = "center";

document.body.style.margin = "10px";
document.body.style.padding = "15px";
document.body.style.boxSizing = "border-box";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = "grey";
document.body.style.width = "100%";

let x = document.querySelectorAll("img");
for (i = 0; i < x.length; i++) {
    x[i].style.border = " 1px solid silver";
    x[i].style.width = "25%";
    x[i].style.justifyContent = "center";
    x[i].style.margin = "20px 30px";

}
x.forEach(function(x) {
    x.addEventListener('mouseover', function hover() {
        x.style.cursor = "pointer";
        x.style.boxShadow = "3px 3px 15px wheat";
        x.style.transition = "0.8s"
    });
    x.addEventListener('mouseleave', function leave() {
        x.style.cursor = "auto";
        x.style.boxShadow = "none";
    });
});

function myFunction(a) {
    if (a.matches) {
        gallery.style.width = "90%";
        gallery.style.borderRadius = "5%";
        lefttop.style.borderTopLeftRadius = "0%";
        righttop.style.borderTopRightRadius = "0%";
        leftBottom.style.borderBottomLeftRadius = "0%";
        rightBottom.style.borderBottomRightRadius = "0%";
        document.body.style.padding = "10px";

        for (i = 0; i < x.length; i++) {
            x[i].style.border = " 1px solid silver";
            x[i].style.width = "26%";
            x[i].style.justifyContent = "center";
            x[i].style.margin = "10px 5px";
        }
    } else {
        gallery.style.width = "85%";
        gallery.style.borderRadius = "15%";
        lefttop.style.borderTopLeftRadius = "45%";
        righttop.style.borderTopRightRadius = "45%";
        leftBottom.style.borderBottomLeftRadius = "45%";
        rightBottom.style.borderBottomRightRadius = "45%";
        document.body.style.padding = "15px";
    }
}
var a = window.matchMedia("(max-width: 700px)")
myFunction(a)
a.addListener(myFunction)