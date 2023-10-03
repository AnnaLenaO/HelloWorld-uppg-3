// Get h1 & button
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

// JS variabel
const newText = "Goodbye World";

// Add pointer & EventListener to the button
button.setAttribute("class", "button");
button.addEventListener("click", function () {

    // Change color & text for h1 & remove button
    h1.setAttribute("class", "h1");
    h1.innerText = newText;
    button.remove();
})
