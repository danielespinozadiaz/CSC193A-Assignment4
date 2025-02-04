const text = require("body-parser/lib/types/text");

function displayMessage(){
    document.getElementById("userText").style.fontSize = "24pt";
    alert("Text area changed!");
}

function makeFancy(){
    document.getElementById("userText").style.textDecoration = "underline";
    document.getElementById("userText").style.fontWeight = "bold";
    document.getElementById("userText").style.color = "blue";
    alert("Changes have been made!");
}

function makeBoring(){
    document.getElementById("userText").style.textDecoration = "none";
    document.getElementById("userText").style.fontWeight = "normal";
    document.getElementById("userText").style.color = "black";
}

function moo() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase().trim();
    
    var sentence = text.split(".");
    for(var i = 0; i < sentence.length; i++){
        var word = sentence[i].split(" ");
        if(word.length > 0){
            word[word.length - 1] += "-Moo";
            sentence[i] = word.join(" ");
        }
    }

    textArea.value = sentence.join(". ");
}