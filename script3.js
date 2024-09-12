let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;
//1
let text1 = text[12]+text[6]+text[18]+text[25]
console.log(text1)
//2
console.log(text.toLowerCase())


//3
let positions = [];
let index = 0;

search = "in"
while (true) {
    index = text.indexOf(search, index);
    if (index === -1) break; 

    positions.push(index);
    index += search.length; 
}
console.log(positions);

//4
let worlds = text.split(" ")
console.log(worlds)

//5
console.log(text.split("").reverse().join(""))
//6
function ucFirst(txt) {
    let newTxt = txt[0].toUpperCase()+txt.slice(1)
    return newTxt;
 }
 console.log(ucFirst("some text"));
 