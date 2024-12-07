let textArea=document.getElementById("textInput");
let wordSpan = document.getElementById("wordCount");
let charSpan = document.getElementById("charCount");
let senSpan = document.getElementById("senCount");
let puncSpan = document.getElementById("puncCount");
let spacSpan = document.getElementById("spacCount");
let digiSpan = document.getElementById("digiCount");

textArea.addEventListener("input",() => {
 const wordCount=textArea.value.trim().split(/\s+/).filter((item) => item).length;
 const charCount=textArea.value.length;
 wordSpan.textContent=wordCount;
 charSpan.textContent=charCount;
 senSpan.textContent=findSentence();
 puncSpan.textContent=findPunctuation();
 spacSpan.textContent=findSpaces();
 digiSpan.textContent=findDigits();
});

function findSentence(){
let senCount=textArea.value.match(/[\w|\)][.?!](\s|$)/g);
return senCount?senCount.length:0;
}
function findPunctuation(){
let puncCount=textArea.value.match(/[.,?;:!-'"/(){}]/g);
return puncCount?puncCount.length:0;
}
function findSpaces(){
let spacCount=textArea.value.match(/\s/g);
return spacCount?spacCount.length:0;
}
function findDigits(){
let digiCount=textArea.value.match(/\d/g);
return digiCount?digiCount.length:0;
}

function clearText(){
 textArea.value = "";
 wordSpan.textContent = 0;
 charSpan.textContent = 0;
 senSpan.textContent = 0;
 puncSpan.textContent = 0;
 spacSpan.textContent = 0;
 digiSpan.textContent = 0;
}

function UpperCase(){
 if(textArea.value === ""){
    alert('Enter Your Text First !');
 }
 textArea.value = textArea.value.toUpperCase();
}

function LowerCase(){
 if(textArea.value === ""){
    alert('Enter Your Text First !');
 }
 textArea.value = textArea.value.toLowerCase();
}

document.addEventListener('keypress', () => {
   document.getElementById('textInput').focus();
});