//The DOM defines a standard for accessing documents.


// Will see some of the methods of accessing data of elements as shown below

// getElementById method
view1 = document.getElementById("view1");

console.log(view1);

// querySelector method
const view2 = document.querySelector("#view2");

console.log(view2);

// styling methods
// view1.style.display = "none";
// view2.style.display = "flex";

// Accesing elements through class names:
const views = document.getElementsByClassName("view");

console.log(views);

const sameViews = document.querySelectorAll(".view");

console.log(sameViews);

// Accesing divs inside the section:

// The following "view1" is the variable which we assigned in line 4.We are using it again here
const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n");
console.log(evenDivs);

evenDivs[4].style.backgroundColor = "purple";

for(i=0; i<evenDivs.length; i++) {
    evenDivs[i].style.width = "150px";
    evenDivs[i].style.backgroundColor = "green";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";

const navBar = document.querySelector("nav");
navBar.innerHTML = "<h1> Aji</h1> <p> Hello </p>";
console.log(navBar);

navBar.style.justifyContent = "flex-start";


console.log(evenDivs[0]); //from line 35

console.log(evenDivs[0].parentElement);

console.log(evenDivs[0].parentElement.children);

console.log(evenDivs[0].parentElement.childNodes);

console.log(evenDivs[0].parentElement.hasChildNodes());

console.log(evenDivs[0].parentElement.lastChild);

console.log(evenDivs[0].parentElement.lastElementChild);

console.log(evenDivs[0].parentElement.firstChild);

console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].nextSibling);

console.log(evenDivs[0].nextElementSibling);

console.log(evenDivs[0].nextElementSibling.nextElementSibling);

console.log(evenDivs[0].previousSibling);

console.log(evenDivs[0].previousElementSibling);


// Now lets see about how to add or remove elements just by using java script itself!

view1.style.display = "none";

view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexwrap = "wrap";
view2.style.margin = "10px";

console.log(view2.lastElementChild);

// view2.lastElementChild.remove();

while(view2.lastChild){
    view2.lastChild.remove();
};

// Adding an element by our own using js:

const createDiv = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.color = "black";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}

for(let i=1; i<11; i++){
    createDiv(view2, i);

}

//Will discuss about Events and event listeners will be discuseed in another dom project file.
