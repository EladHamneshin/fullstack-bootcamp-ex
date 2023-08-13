const API_KEY = "3f920f7438d74beda65c372710840d86";

async function getJoke(){
    const response = await fetch(`https://api.humorapi.com/jokes/search?api-key=${API_KEY}`);
    if(!response.ok){
        throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    return data;
}

getJoke().then(data => {
    const container = document.querySelector("#joke");
    container.textContent = data.jokes[0].joke;
}).catch(error => { console.log(error.message) });