const identity = document.getElementById("identities");
console.log(identity);
const phrases = ["Software Engineer...","Student...","Web Developer...","Cybersecurity Expert..."];
let phraseInx = 0;
let letterpos = 0;
const writeSpeed = 150;
const eraseSpeed = 100;
function print(phrase){
    if(letterpos==phrase.length)
    {
        clearLetters();
    }
    else if(letterpos<phrase.length){

        identity.textContent += phrase.charAt(letterpos);
        letterpos+=1;
        // //setTimeout function take two parameters one: refernece of function two: delay in miliseconds 
        // (time the settimeout has to wait before calling the function again)
    
        setTimeout(function(){
            print(phrase);
        },writeSpeed);
    }
}
function clearLetters(){
    if(letterpos==-1){
        phraseInx = (phraseInx+1)%phrases.length;
        letterpos=0;
        print(phrases[phraseInx]);
    }
    else if(letterpos>-1){
       let  updatePhrase="";
        for(let indx=0;indx<letterpos;++indx){
            updatePhrase+=phrases[phraseInx].charAt(indx);
        }
        identity.textContent = updatePhrase;
        letterpos-=1;
        setTimeout(clearLetters(), eraseSpeed);
    }
}
print(phrases[phraseInx]);
