var baseUrl = new URL("https://games-world.herokuapp.com/games"); 

    fetch(baseUrl.href, {method:"GET"})
    .then(
        function (response){
            return response.json();
        })
    .then(function(jsonResponse){
        console.log(jsonResponse);
        jsonResponse.forEach(function(element){
           displayGames(element);
        })
    })

function displayGames(games){
    var gamesList = document.getElementById("games");
    var items = document.createElement("li");
    var img = document.createElement("IMG");

    img.src = games.imageUrl;
    items.style.padding = "15px"
    
    items.innerHTML = games.title + " : " + games.description;
    img.innerHTML = games.imageUrl;

    gamesList.appendChild(items);
    gamesList.appendChild(img);
}

fetch(baseUrl.href + "/5f67052e2994670020a5bcd1", {method:"DELETE"})//Delete grand turismo
.then(
    function (response){
        return response.json();
    })
.then(function(jsonResponse){
    console.log(jsonResponse);
})
