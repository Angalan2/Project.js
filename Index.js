const containerE1 = document.querySelector(".container")
const carrers = ["youtube", "web Developer","freelance","instructor"];
let carrerIndex = 0;
let charcterIndex = 0;
Updatetext() 
function Updatetext() { 
   charcterIndex++;
   containerE1.innerHtml = `<h1>I am ${carrers[carrerIndex].slice(0,1) == "I" ? "an" : "a"} ${carrers[carrerIndex].slice(0, charcterIndex)}</h1>`;
    
    if(charcterIndex == carrers[carrerIndex].length){
        carrerIndex++
        characterIndex = 0
    }
    if(carrerIndex == carrers.length){
        carrerIndex = 0;
    }
    setTimeout(Updatetext, 400);
}
