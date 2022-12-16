function handleClick(){
alert("you have clicked the button");
}
function handleMouseOver(event){
    console.log(event)
}
//another way of handling the event
//document.getElementById("buttonClick").onclick = handleClick;

//recommended way for event listening
//addEventListener function takes two parameters one: event_name two: refernece_of_funtion
document.getElementById("buttonClick").addEventListener("click",handleClick);
document.getElementById("start").addEventListener("click",function handleClick(){

    document.addEventListener("mouseover",handleMouseOver);
});
document.getElementById("stop").addEventListener("click",function handleClick(){

    document.removeEventListener("mouseover",handleMouseOver);
});
//all the properties shown inside console are the attributes of this event object
document.addEventListener("keypress",function(e){
    console.log("Keypress");
    //here i am accessing only the key that is being pressed by the user
    console.log(e.key);
    //a certain key can be prevented to be accepted as an input
    if(e.key=="2")
    e.preventDefault();
})
//you can see the default order of keypress ,keydown and keyup events inside the cosole log
document.addEventListener("keydown",function(e){
console.log("keydown");
console.log(e.key);

})
document.addEventListener("keyup",function(e){
console.log("keyup");
console.log(e.key);
})
//focus event and blur events
document.getElementById("maintext").addEventListener("focus",function(){
    console.log("focused!");
    
})
document.getElementById("maintext").addEventListener("blur",function(){
    console.log("out of focus!");

})
//event capturing and concept of event_bubbling
document.querySelector(".parent").addEventListener("click",function(){
    console.log("parent was clicked");
    
})
document.querySelector(".child").addEventListener("click",function(event){
    console.log("child was clicked");
    event.stopPropagation();

})
document.querySelector("#childbtn").addEventListener("click",function(event){
    console.log("child button was clicked");
    event.stopPropagation();

})
//event bubbling
// when event handler of the child element handler execution ends it bubbles up to its parent
//and because parent element is also listening the same event it's event handler invokes 


//if you want to prevent it from happening than you can use attribute of event object that is stopPropagation()
// it should be done in child element which is obvious.
