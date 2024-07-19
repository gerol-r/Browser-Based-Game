let pointGuards = [
    { name: "Magic Johnson", PER: 24.1, scoringAverage: 19.5, shootingPercentage: 0.520, defensiveRating: 104.5, assists: 11.2, rebounds: 7.2, steals: 1.9, blocks: 0.4, turnovers: 3.9, imageUrl: "./player_pix/Magic_Johnson.webp" },
    { name: "Stephen Curry", PER: 23.6, scoringAverage: 23.6, shootingPercentage: 0.473, defensiveRating: 108.2, assists: 6.4, rebounds: 4.7, steals: 1.7, blocks: 0.2, turnovers: 3.1, imageUrl: "./player_pix/Stephen_Curry.webp" },
    { name: "Chris Paul", PER: 24, scoringAverage: 17.5, shootingPercentage: 0.471, defensiveRating: 105.8, assists: 9.4, rebounds: 4.5, steals: 2.1, blocks: 0.1, turnovers: 2.3, imageUrl: "./player_pix/Chris_Paul.webp" },
    { name: "Steve Nash", PER: 20, scoringAverage: 14.3, shootingPercentage: 0.490, defensiveRating: 110.5, assists: 8.5, rebounds: 3, steals: 0.7, blocks: 0.1, turnovers: 2.9, imageUrl: "./player_pix/Steve_Nash.webp" },
    { name: "Jason Kidd", PER: 17.9, scoringAverage: 12.6, shootingPercentage: 0.400, defensiveRating: 101.9, assists: 8.7, rebounds: 6.3, steals: 1.9, blocks: 0.3, turnovers: 2.9, imageUrl: "./player_pix/Jason_Kidd.webp" },
    { name: "Russell Westbrook", PER: 22.1, scoringAverage: 21.7, shootingPercentage: 0.438, defensiveRating: 106.6, assists: 8.1, rebounds: 7.1, steals: 1.6, blocks: 0.3, turnovers: 3.9, imageUrl: "./player_pix/Russell_Westbrook.webp" },
    { name: "Damian Lillard", PER: 22.3, scoringAverage: 25.1, shootingPercentage: 0.470, defensiveRating: 113.1, assists: 6.7, rebounds: 4.3, steals: 1, blocks: 0.3, turnovers: 2.9, imageUrl: "./player_pix/Damian_Lillard.webp" },
    { name: "Kyrie Irving", PER: 22.3, scoringAverage: 23.6, shootingPercentage: 0.474, defensiveRating: 110.5, assists: 5.7, rebounds: 3.9, steals: 1.3, blocks: 0.4, turnovers: 2.6, imageUrl: "./player_pix/Kyrie_Irving.webp" },
    { name: "Luka Doncic", PER: 25.7, scoringAverage: 28.7, shootingPercentage: 0.470, defensiveRating: 110.5, assists: 8.3, rebounds: 8.7, steals: 1, blocks: 0.3, turnovers: 4, imageUrl: "./player_pix/Luka_Doncic.webp" }
];

let shootingGuards = [
    { name: "Michael Jordan", PER: 27.9, scoringAverage: 30.1, shootingPercentage: 49.7, defensiveRating: 104.5, assists: 5.3, rebounds: 6.2, steals: 2.3, blocks: 0.8, turnovers: 3, imageUrl: "./player_pix/Michael_Jordan.webp" },
    { name: "Kobe Bryant", PER: 22.9, scoringAverage: 25, shootingPercentage: 44.7, defensiveRating: 105.2, assists: 4.7, rebounds: 5.3, steals: 1.4, blocks: 0.5, turnovers: 2.7, imageUrl: "./player_pix/Kobe_Bryant.webp" },
    { name: "Dwyane Wade", PER: 23.5, scoringAverage: 22, shootingPercentage: 48, defensiveRating: 105.8, assists: 5.4, rebounds: 4.7, steals: 1.8, blocks: 0.8, turnovers: 3.2, imageUrl: "./player_pix/Dwyane_Wade.webp" },
    { name: "Allen Iverson", PER: 20.9, scoringAverage: 26.7, shootingPercentage: 42.5, defensiveRating: 105.5, assists: 6.2, rebounds: 3.7, steals: 2.2, blocks: 0.2, turnovers: 3.6, imageUrl: "./player_pix/Allen_Iverson.webp" },
    { name: "James Harden", PER: 27.5, scoringAverage: 25.2, shootingPercentage: 44.3, defensiveRating: 108, assists: 7.1, rebounds: 4.5, steals: 1.6, blocks: 0.5, turnovers: 4.4, imageUrl: "./player_pix/James_Harden.webp" },
    { name: "Ray Allen", PER: 18.6, scoringAverage: 18.9, shootingPercentage: 45.2, defensiveRating: 108.1, assists: 3.4, rebounds: 4.1, steals: 1.1, blocks: 0.2, turnovers: 2.6, imageUrl: "./player_pix/Ray_Allen.webp" },
    { name: "Devin Booker", PER: 16.9, scoringAverage: 24.9, shootingPercentage: 45.4, defensiveRating: 114.4, assists: 4.6, rebounds: 4.6, steals: 1, blocks: 0.3, turnovers: 3, imageUrl: "./player_pix/Devin_Booker.webp" },
    { name: "Donovan Mitchell", PER: 16.9, scoringAverage: 23.4, shootingPercentage: 43.8, defensiveRating: 109.5, assists: 4.6, rebounds: 4.6, steals: 1.3, blocks: 0.2, turnovers: 2.8, imageUrl: "./player_pix/Donovan_Mitchell.webp" },
    { name: "Anthony Edwards", PER: 17, scoringAverage: 23.1, shootingPercentage: 41.6, defensiveRating: 112.6, assists: 4.1, rebounds: 4.1, steals: 1.4, blocks: 0.6, turnovers: 2.7, imageUrl: "./player_pix/Anthony_Edwards.webp" }
];

let smallForwards = [
    { name: "LeBron James", PER: 27.1, scoringAverage: 27, shootingPercentage: 50.6, defensiveRating: 104.6, assists: 7.4, rebounds: 7.4, steals: 1.6, blocks: 0.8, turnovers: 3.5, imageUrl: "./player_pix/LeBron_James.webp" },
    { name: "Larry Bird", PER: 23.5, scoringAverage: 24.3, shootingPercentage: 49.6, defensiveRating: 101.5, assists: 6.3, rebounds: 10, steals: 1.7, blocks: 0.8, turnovers: 3.3, imageUrl: "./player_pix/Larry_Bird.webp" },
    { name: "Julius Erving", PER: 23.5, scoringAverage: 24.2, shootingPercentage: 50.7, defensiveRating: 101, assists: 3.9, rebounds: 6.7, steals: 2.2, blocks: 1.8, turnovers: 4.2, imageUrl: "./player_pix/Julius_Erving.webp" },
    { name: "Jayson Taytum", PER: 22.5, scoringAverage: 23.4, shootingPercentage: 45.6, defensiveRating: 107.9, assists: 3.5, rebounds: 7, steals: 1.4, blocks: 0.6, turnovers: 3.5, imageUrl: "./player_pix/Jayson_Taytum.webp" },
    { name: "Paul George", PER: 22.1, scoringAverage: 23.5, shootingPercentage: 43.4, defensiveRating: 104.6, assists: 3.7, rebounds: 6.1, steals: 1.7, blocks: 0.4, turnovers: 3.5, imageUrl: "./player_pix/Paul_George.webp" },
    { name: "Jimmy Buttler", PER: 23.5, scoringAverage: 20.7, shootingPercentage: 45.4, defensiveRating: 107.1, assists: 4.3, rebounds: 5, steals: 1.6, blocks: 0.6, turnovers: 4.3, imageUrl: "./player_pix/Jimmy_Buttler.webp" },
    { name: "Kawhi Leonard", PER: 22.1, scoringAverage: 26, shootingPercentage: 49.5, defensiveRating: 103.2, assists: 3, rebounds: 6.4, steals: 1.8, blocks: 0.7, turnovers: 3, imageUrl: "./player_pix/Kawhi_Leonard.webp" },
    { name: "Dominique Wilkins", PER: 22.1, scoringAverage: 24.8, shootingPercentage: 46.1, defensiveRating: 108.4, assists: 2.5, rebounds: 6.7, steals: 1.3, blocks: 0.6, turnovers: 2.5, imageUrl: "./player_pix/Dominique_Wilkins.webp" },
    { name: "Kevin Durant", PER: 25.3, scoringAverage: 27, shootingPercentage: 49.3, defensiveRating: 106.7, assists: 4.4, rebounds: 7.1, steals: 1.1, blocks: 1.1, turnovers: 4.4, imageUrl: "./player_pix/Kevin_Durant.webp" }
];

let powerForwards = [
    { name: "Tim Duncan", PER: 24.2, scoringAverage: 20.6, shootingPercentage: 50.6, defensiveRating: 95.5, assists: 3.7, rebounds: 10.8, steals: 0.7, blocks: 2.2, turnovers: 2.4, imageUrl: "./player_pix/Tim_Duncan.webp" },
    { name: "Karl Malone", PER: 23.9, scoringAverage: 25, shootingPercentage: 51.6, defensiveRating: 101.1, assists: 3.6, rebounds: 10.1, steals: 1.4, blocks: 0.8, turnovers: 3.07, imageUrl: "./player_pix/Karl_Malone.webp" },
    { name: "Dirk Nowitzki", PER: 22.4, scoringAverage: 22.1, shootingPercentage: 47.1, defensiveRating: 104.3, assists: 2.4, rebounds: 7.5, steals: 0.8, blocks: 0.8, turnovers: 2.2, imageUrl: "./player_pix/Dirk_Nowitzki.webp" },
    { name: "Charles Barkley", PER: 24.7, scoringAverage: 22.1, shootingPercentage: 54.1, defensiveRating: 104.5, assists: 3.9, rebounds: 11.7, steals: 1.5, blocks: 0.8, turnovers: 3.1, imageUrl: "./player_pix/Charles_Barkley.webp" },
    { name: "Kevin Garnett", PER: 22.7, scoringAverage: 17.8, shootingPercentage: 49.7, defensiveRating: 99, assists: 3.7, rebounds: 10, steals: 1.3, blocks: 1.4, turnovers: 2.3, imageUrl: "./player_pix/Kevin_Garnett.webp" },
    { name: "Dennis Rodman", PER: 14.6, scoringAverage: 5.2, shootingPercentage: 52.1, defensiveRating: 100.2, assists: 1.8, rebounds: 13.1, steals: 0.6, blocks: 0.6, turnovers: 1.6, imageUrl: "./player_pix/Dennis_Rodman.webp" },
    { name: "Anthony Davis", PER: 26.84, scoringAverage: 23.9, shootingPercentage: 51.3, defensiveRating: 105.3, assists: 3.9, rebounds: 8.3, steals: 1.4, blocks: 2.4, turnovers: 2, imageUrl: "./player_pix/Anthony_Davis.webp" },
    { name: "Giannis Antetokounmpo", PER: 25.4, scoringAverage: 28.1, shootingPercentage: 52.5, defensiveRating: 105.3, assists: 4.9, rebounds: 11, steals: 1.2, blocks: 1.3, turnovers: 3, imageUrl: "./player_pix/Giannis_Antetokounmpo.webp" },
    { name: "Draymond Green", PER: 14.6, scoringAverage: 8.8, shootingPercentage: 52.9, defensiveRating: 103.6, assists: 5.6, rebounds: 6.7, steals: 1.4, blocks: 0.9, turnovers: 2.3, imageUrl: "./player_pix/Draymond_Green.webp" }
];

let centers = [
    { name: "Kareem Abdul-Jabbar", PER: 24.6, scoringAverage: 24.6, shootingPercentage: 55.9, defensiveRating: 99.4, assists: 3.6, rebounds: 11.2, steals: 1, blocks: 2.6, turnovers: 2.7, imageUrl: "./player_pix/Kareem_Abdul-Jabbar.webp" },
    { name: "Yao Ming", PER: 23, scoringAverage: 19, shootingPercentage: 52.4, defensiveRating: 99.1, assists: 1.6, rebounds: 9.2, steals: 0.4, blocks: 1.9, turnovers: 2.7, imageUrl: "./player_pix/Yao_Ming.webp" },
    { name: "Shaquille O'Neal", PER: 26.4, scoringAverage: 23.7, shootingPercentage: 58.2, defensiveRating: 101.3, assists: 2.5, rebounds: 10.9, steals: 0.6, blocks: 2.3, turnovers: 2.7, imageUrl: "./player_pix/Shaquille_ONeal.webp" },
    { name: "Hakeem Olajuwon", PER: 23.6, scoringAverage: 21.8, shootingPercentage: 51.2, defensiveRating: 97.9, assists: 2.5, rebounds: 11.1, steals: 1.7, blocks: 3.1, turnovers: 3, imageUrl: "./player_pix/Hakeem_Olajuwon.webp" },
    { name: "Joel Embid", PER: 28.4, scoringAverage: 28.2, shootingPercentage: 52.9, defensiveRating: 108.8, assists: 3.6, rebounds: 11.6, steals: 0.9, blocks: 1.3, turnovers: 3.8, imageUrl: "./player_pix/Joel_Embid.webp" },
    { name: "Dwight Howard", PER: 18.9, scoringAverage: 17.4, shootingPercentage: 58.7, defensiveRating: 99.8, assists: 1.3, rebounds: 12.3, steals: 1, blocks: 2, turnovers: 3.3, imageUrl: "./player_pix/Dwight_Howard.webp" },
    { name: "Nikola Jokic", PER: 28.1, scoringAverage: 24, shootingPercentage: 56.6, defensiveRating: 107.6, assists: 6.9, rebounds: 10.8, steals: 1.4, blocks: 0.7, turnovers: 2.9, imageUrl: "./player_pix/Nikola_Jokic.webp" },
    { name: "Marc Gasol", PER: 18, scoringAverage: 14.6, shootingPercentage: 48.1, defensiveRating: 103.9, assists: 3.4, rebounds: 7.6, steals: 0.9, blocks: 1.1, turnovers: 2.2, imageUrl: "./player_pix/Marc_Gasol.webp" },
    { name: "Rudy Gobert", PER: 18.9, scoringAverage: 13.1, shootingPercentage: 66.1, defensiveRating: 101.8, assists: 1.3, rebounds: 13.5, steals: 0.7, blocks: 2.2, turnovers: 1.6, imageUrl: "./player_pix/Rudy_Gobert.webp" }
];

// Initialize an empty object for the player's team
let playerTeam = {
    "Point Guard": null,
    "Shooting Guard": null,
    "Small Forward": null,
    "Power Forward": null,
    "Center": null
};

// Initialize an empty object for the computer's team
let computerTeam = {
    "Point Guard": null,
    "Shooting Guard": null,
    "Small Forward": null,
    "Power Forward": null,
    "Center": null
};

// Function to handle player selection
function selectPlayer(position, player, players) {
    // Add the player to the appropriate position in the player's team
    playerTeam[position] = player;

    // Remove the selected player from the array
    let index = players.indexOf(player);
    if (index !== -1) {
        players.splice(index, 1);
    }

    // Update the display
    displayPlayers(players, position, function(selectedPlayer) {
        selectPlayer(position, selectedPlayer, players);
    });
}

// Function to display players for selection
function displayPlayers(players, position, onSelectPlayer) {
    // Get the card where you want to display the players
    let playerCard = document.getElementById("player-" + position.toLowerCase().replace(" ", "-"));

    // Clear any existing players from the card
    playerCard.innerHTML = "";

    // Create a new img element for each player and add it to the card
    for (let player of players) {
        let imgElement = document.createElement("img");
        imgElement.src = player.imageUrl;  // Replace with the actual image URL
        imgElement.alt = player.name;
        imgElement.className = "player-image";  // Add a class for styling

        // Add a click event listener to the img element
        imgElement.addEventListener("click", function() {
            onSelectPlayer(player, players);
        });

        // Add the img element to the card
        playerCard.appendChild(imgElement);
    }
}

// Function to calculate team score
function calculateTeamScore(team) {
    let totalScore = 0;
    for (let position in team) {
        let player = team[position];
        let playerScore = 0.20 * player.PER + 0.15 * player.scoringAverage + 0.10 * player.shootingPercentage - 0.15 * player.defensiveRating + 0.10 * player.assists + 0.10 * player.rebounds + 0.10 * player.steals + 0.05 * player.blocks - 0.05 * player.turnovers;
        totalScore += playerScore;
    }
    return totalScore;
}

// Function to get a random player from an array
function getRandomPlayer(players) {
    let randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
}

// Function to start the game
function startGame() {
    // Randomly select a player for each position in the computer's team
    computerTeam["Point Guard"] = getRandomPlayer(pointGuards);
    computerTeam["Shooting Guard"] = getRandomPlayer(shootingGuards);
    computerTeam["Small Forward"] = getRandomPlayer(smallForwards);
    computerTeam["Power Forward"] = getRandomPlayer(powerForwards);
    computerTeam["Center"] = getRandomPlayer(centers);

    // Display the computer's team
    for (let position in computerTeam) {
        let playerCard = document.getElementById("computer-" + position.toLowerCase().replace(" ", "-"));
        let imgElement = document.createElement("img");
        imgElement.src = computerTeam[position].imageUrl;
        imgElement.alt = computerTeam[position].name;
        imgElement.className = "player-image";
        playerCard.appendChild(imgElement);
    }

    // Call the displayPlayers function with the array of players and the selectPlayer function for each position
    displayPlayers(pointGuards, "Point Guard", function(selectedPlayer) {
        selectPlayer("Point Guard", selectedPlayer, pointGuards);
    });
    displayPlayers(shootingGuards, "Shooting Guard", function(selectedPlayer) {
        selectPlayer("Shooting Guard", selectedPlayer, shootingGuards);
    });
    displayPlayers(smallForwards, "Small Forward", function(selectedPlayer) {
        selectPlayer("Small Forward", selectedPlayer, smallForwards);
    });
    displayPlayers(powerForwards, "Power Forward", function(selectedPlayer) {
        selectPlayer("Power Forward", selectedPlayer, powerForwards);
    });
    displayPlayers(centers, "Center", function(selectedPlayer) {
        selectPlayer("Center", selectedPlayer, centers);
    });

    // Calculate the scores for each team
    let computerTeamScore = calculateTeamScore(computerTeam);
    let playerTeamScore = calculateTeamScore(playerTeam);

    // Display the winner
    if (computerTeamScore > playerTeamScore) {
        console.log("The winner is: Computer");
    } else if (playerTeamScore > computerTeamScore) {
        console.log("The winner is: Player");
    } else {
        console.log("It's a tie!");
    }
}

// Add a click event listener to the start button
document.getElementById("start-button").addEventListener("click", startGame);