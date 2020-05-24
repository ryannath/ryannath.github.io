// querySelector() returns the first element that
// matches the CSS selector given as argument.
// It is a method of the document class.
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";
console.log(myHeading);


// First get the element with class "hero-image"
imageContainer = document.querySelector(".hero-image");

// if clicked, call a function
imageContainer.onclick = function() {

    // Get the style from CSS file using getComputerStyle, specifically get the
    // background-image css property
    let imageUrl = getComputedStyle(imageContainer).backgroundImage;

    // We need to get only the url from the background-image.
    let index = imageUrl.indexOf("images");

    // slice that url
    imageUrl = imageUrl.slice(index, imageUrl.length - 2)

    // change url accordingly.
    if (imageUrl === "images/space.jpeg") {
        imageContainer.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),"+
                                               "url(images/land_compress.jpg)";
    }
    else {
        imageContainer.style.backgroundImage = "url(images/space.jpeg)";
    }
}


