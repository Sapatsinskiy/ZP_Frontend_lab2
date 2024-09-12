let body = document.querySelector("body")
body.style.fontFamily = "Arial";

let paragraphs = document.querySelectorAll("p")
let stylesArr = [
    "color: orange; background:yellow; font-size:16px; text-align:center; padding:5px",
    "color: blue; background:lightblue; font-size:14px; text-align:right; padding:5px",
    "color: red; background:lightcoral; font-size:12px; text-align:left; padding:5px"]

for(let i=0; i<stylesArr.length; i++){
    paragraphs[i].style.cssText = stylesArr[i]
}