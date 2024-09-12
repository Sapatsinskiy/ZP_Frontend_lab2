let lines = document.querySelectorAll(".tableLine")

for(let i=0; i<lines.length; i++){
  let blokcs = lines[i].querySelectorAll(".tableBlock")
  for(let j=0; j<blokcs.length; j++){
    if(i%2==0){
        if(j%2==0){
            blokcs[j].classList.toggle("selected")
        }
    }
    else{
        if(j%2!=0){
            blokcs[j].classList.toggle("selected")
        }
    }
  }
}
