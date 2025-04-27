// This is a JavaScript file that will be used to manipulate the DOM
let heading = document.querySelector(".head2")
let head2 = document.querySelector("button")

console.log(head2.innerHTML);
console.log(heading.innerHTML);

// This function will change the text of the heading when the button is clicked

let head3 = document.querySelector(".head2")
let butt12 = document.querySelector(".butt12")

butt12.addEventListener("click", function(){
    head3.style.color = "blue"
    head3.style.fontWeight = "bold"
})

