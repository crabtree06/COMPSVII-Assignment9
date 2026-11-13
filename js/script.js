console.log("script.js loaded");
// html element selectors
const searchInput = document.querySelector("#search-input");
const container = document.querySelector("#gif-container"); 
// endpoint for the Giphy API
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=jNDwSbXG8x1SkLtyNKe8ohcne12IZ1oc&q=dogs&limit=5";
async function fetchGifs() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("API request failed");
        }
        