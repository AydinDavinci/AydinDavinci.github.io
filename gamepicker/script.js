const games = [
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4,
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLE ROYALE",
        "price": 29.99,
        "genre": "Looter-shooter",
        "rating": 5
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 2
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS™ FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege    ",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 2
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 1
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    },

    {
        "title": "Hell Let Loose",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Fortnite: Battle Royale",
        "price": 0,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "Mortal Kombat 11",
        "price": 49.99,
        "genre": "Action",
        "rating": 4
    },
    {
        "title": "Minecraft",
        "price": 26.95,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "Steep",
        "price": 19.99,
        "genre": "Sport",
        "rating": 3
    },
    {
        "title": "Wii Sports",
        "price": 39.99,
        "genre": "Sport",
        "rating": 5
    },
    {
        "title": "Skylanders Giants",
        "price": 34.99,
        "genre": "Action",
        "rating": 4
    },
    {
        "title": "Pokémon: GO",
        "price": 0,
        "genre": "Simulation",
        "rating": 2
    }
    // {
    //     "title":"",
    //     "price":,
    //     "genre":"",
    //     "rating":
    // },
]

const gameAmount = games.length;
console.log('Er zijn ' + gameAmount + ' games');

const gameItemListContainer = document.getElementById("overzicht");

function renderGames(gamesToRender) {
    gameItemListContainer.innerHTML = "";

    gamesToRender.forEach(game => {
        const gameItemList = document.createElement("div");
        gameItemList.id = "gameitemlist";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "gamecheckbox";
        checkbox.dataset.gameId = game.title;

        checkbox.addEventListener('change', function () {
            updateSelectedGames(game, checkbox.checked);
        });

        const gameItem = document.createElement("div");
        gameItem.id = "gameitem";

        const gameTitle = document.createElement("h4");
        gameTitle.textContent = game.title;

        const gameRating = document.createElement("div");
        gameRating.id = "gameRating";
        gameRating.textContent = `${game.rating} ★`;

        const gameGenre = document.createElement("div");
        gameGenre.id = "gameGenre";
        gameGenre.textContent = game.genre;

        const gamePrice = document.createElement("div");
        gamePrice.id = "gamePrijs";
        gamePrice.textContent = game.price === 0 ? "GRATIS" : `€${game.price}`;

        if (game.price === 0) {
            gamePrice.id = "gamePrijsGroen";
        }

        gameItemList.appendChild(checkbox);
        gameItem.appendChild(gameTitle);
        gameItem.appendChild(gameRating);
        gameItem.appendChild(gameGenre);
        gameItemList.appendChild(gameItem);
        gameItemList.appendChild(gamePrice);
        gameItemListContainer.appendChild(gameItemList);
    });
}

renderGames(games);

let selectedGames = [];

function updateSelectedGames(game, isSelected) {
    if (isSelected) {
        selectedGames.push(game);
    } else {
        const index = selectedGames.indexOf(game);
        if (index !== -1) {
            selectedGames.splice(index, 1);
        }
    }
}

document.getElementById("okknopgenre").addEventListener("click", function () {
    zetFilter();
});

document.getElementById("okknoprating").addEventListener("click", function () {
    zetFilter();
});

document.getElementById("submitknop").addEventListener("click", function () {
    zetFilter();
});


function zetFilter() {
    const selectedRating = document.getElementById("ratingid").value;
    const prijsMinimaal = Number(document.getElementById("prijsinput").value);
    const selectedGenre = document.getElementById("genreid").value;
    console.log(`Genre: ${selectedGenre}, Rating: ${selectedRating}, Max. prijs: €${prijsMinimaal}`);

    const filteredGames = games.filter(game => {
        let genreMatch;
        if (selectedGenre) {
            genreMatch = game.genre === selectedGenre;
        } else {
            genreMatch = true;
        }

        return genreMatch;
    });

    const ratingFilter = filteredGames.filter(game => {
        let ratingMatch;
        if (selectedRating) {
            ratingMatch = game.rating >= selectedRating;
        } else {
            ratingMatch = true;
        }
        
        return ratingMatch;
    });
    const prijsFilter = ratingFilter.filter(game => {
        let prijsMatch;
        if (prijsMinimaal) {
            prijsMatch = game.price <= prijsMinimaal;
        } else {
            prijsMatch = true;
        }

        return prijsMatch;
        });

        // return genreMatch && ratingMatch && prijsMatch;

    renderGames(prijsFilter)
}

function filterGenre(){
    const selectedGenre = document.getElementById("genreid").value;
    
}

function hide(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = "none";
    }
}
function show(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = "block";
    }
}
function updateSelectedGames(game, isSelected) {
    if (isSelected) {
        selectedGames.push(game);
        alert('Game toegevoegd aan winkelmandje!✅')
    } else {
        const index = selectedGames.indexOf(game);
        if (index !== -1) {
            selectedGames.splice(index, 1);
        }
    }
    localStorage.setItem("selectedGames", JSON.stringify(selectedGames));
}


let mandjeframe = document.getElementById("winkelmandjeframe");
let mainframe = document.getElementById("frame");

document.getElementById("winkelmandjeItems").innerHTML = "";

function updateWinkelmandje() {
    const winkelmandjeContainer = document.getElementById("winkelmandjeItems");
    winkelmandjeContainer.innerHTML = "";

    selectedGames.forEach((game) => {
        const gameElement = document.createElement("div");
        gameElement.className = "game-item";

        gameElement.innerHTML = `
            <button onclick="verwijderUitWinkelmandje('${game.title}')">🗑️</button>
            <h3>${game.title}</h3>
            <p>€${game.price.toFixed(2)}</p>
        `;
        winkelmandjeContainer.appendChild(gameElement);
    });

    updateTotaalPrijs();
}


function verwijderUitWinkelmandje(title) {
    selectedGames = selectedGames.filter((game) => game.title !== title);
    updateWinkelmandje();
}

document.getElementById("doorgaan").addEventListener("click", () => {
    updateWinkelmandje();
    hide("#frame");
    show("#winkelmandjeframe");
});


function updateTotaalPrijs() {
    const totaalPrijs = selectedGames.reduce(function (acc, game) {
        return acc + game.price;
    }, 0);
    document.getElementById("totaalPrijs").textContent = totaalPrijs.toFixed(2);
}


document.getElementById("betaalknop").addEventListener("click", function () {
    alert("Bedankt voor uw aankoop bij Gamepicker!🕹️");
});
