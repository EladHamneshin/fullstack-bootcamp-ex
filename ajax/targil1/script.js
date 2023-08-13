async function getUserData(){
    let response = await fetch("https://randomuser.me/api/");
    if(!response.ok){
        throw new Error("HTTP error " + response.status);
    }
    let data = await response.json();
    return data;
}

async function printUserData(data){
    let user = data.results[0];
    let userDiv = document.getElementById("user");
    userDiv.textContent = "";
    let img = document.createElement("img");
    img.src = user.picture.medium;
    userDiv.appendChild(img);
    let name = document.createElement("p");
    name.innerHTML = user.name.first + " " + user.name.last + " ," + user.dob.age;
    userDiv.appendChild(name);
    let email = document.createElement("p");
    email.innerHTML = user.email;
    userDiv.appendChild(email);
}

document.getElementById("user-btn").addEventListener("click", function(){
    getUserData().then(printUserData).catch(err => console.log(err.message));
});


async function getFiveMales(){
    const response = await fetch("https://randomuser.me/api?gender=male&results=5");
    const data = await response.json();
    return data;
}

getFiveMales().then(data => console.log(data.results));