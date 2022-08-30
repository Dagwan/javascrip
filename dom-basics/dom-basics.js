const newparagraph = document.createElement("p");
newparagraph.innerHTML = "Added with JavaScript!";
document.body.appendChild(newparagraph);

//2. adding image

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Descirption of image");
document.body.appendChild(newImage);

//3. complex HTML

const newDiv = document.createElement("div")
newDiv.innerHTML = `<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul> `;

document.body.appendChild(newDiv);

//4. challenge

const newSection = document.createElement("section");
newSection.innerHTML = `<h2>CSE 12b</h2><p>Welcome to JavaScript Language</p>`

document.body.appendChild(newSection);


