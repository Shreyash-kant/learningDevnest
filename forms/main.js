document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").addEventListener("submit",function(event){
        event.preventDefault();
        console.log(event);
//so when this output is shown in console, it will get disappear immediately because after submission page gets refershed 
// to prevent it we can use event.preventDefault(); function.
        const form = event.target;
        console.log(form);
        //it is providing the username element by the name attribute
        console.log(form.username);
        //to access the value of this element 
        console.log(form.username.value);
        const mobileNo = form.MobileNumber.value;
        console.log(mobileNo);
    })
    //to access the value of an input tag present outside the form we can simply access it by getElementById and then using value property
    document.addEventListener("click", function(){

        console.log(document.getElementById("outside").value);
    })
})

