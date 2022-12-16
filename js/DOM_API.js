// function compare(num1, num2) {
//     if (num1 > num2) console.log(num1 + " is greater than " + num2);
//     else if (num1 < num2) console.log(num1 + " is lesser than " + num2);
//     else console.log("both are equal");
//   }
//   let num1 = 4;
//   let num2 = 5;
// compare(num1,num2);

//in order to create an element use createElement function and assign its reference to a variable 
const para = document.createElement("p");


// to some text in this paragraph use textContent property 
para.textContent = "this is created using dom api";


// we can also set attributes as well
const span = document.createElement("span");// this is a dom node
span.id="span_id";
span.className = "span_class";
para.appendChild(span);
// classlist for adding class, add funtion used with classList property to add a class.
para.classList.add("one");  
//another class
para.classList.add("two");



//two ramove a classname 
para.classList.remove("two");

//css object model to manipulate the css of an object through dom api
span.style.color = "black";
span.textContent = " this span is created with dom api and appended in this para";
span.style.backgroundColor ="skyblue";
//instead of textContent we can use innerHtml property because it can make html written in plain text work as actual html.
span.innerHTML = "this span is created with dom api <em>and appended in this para</em>";

// the element that is created above it needs to be appended into the html document's body tag 
// because it will be the child tag of body tag so use appendChild function
document.body.appendChild(para);

const hobbies = ["singing", "swimming", "reading"];
const list = document.createElement("ul");
for(let hobby of hobbies){
    list.innerHTML += "<li class='blue'>"+hobby+"</li>";
}
document.body.appendChild(list);

// another way of setting attribute is using setAttribute() funtion
para.setAttribute("id","orange");

console.log(document.getElementById("span_id").textContent);
console.log(document.getElementsByClassName("blue"));