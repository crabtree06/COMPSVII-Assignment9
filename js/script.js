console.log("script.js loaded");
// html element selectors
const searchInput = document.querySelector("#search-input");
const container = document.querySelector("#gif-container"); 
const button = document.querySelector("#fetch-gif-btn");
// endpoint for the Giphy API
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=jNDwSbXG8x1SkLtyNKe8ohcne12IZ1oc&q=dogs&limit=5";
// function to fetch and display gifs
async function fetchGifs() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("API request failed");
        }
        const data = await response.json();
// store the gif urls in an array and loop for each gif to create an img element and append it to the container
        const images = [];
        for (const gif of data.data) {
            images.push(gif.images.original.url);
        }
         container.innerHTML = "";

        for (const image of images) {
            container.innerHTML += `<img src="${image}" class="col-3 mb-3" alt="GIF">`;
        }
    } catch (error) {
        console.log("Error:", error);
    }
}
// run the function when the button is clicked
button.addEventListener("click", fetchGifs);

       