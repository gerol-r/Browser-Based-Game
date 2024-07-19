# Browser-Based-Game
NBA 5v5
NBA 5v5

Premise:

The game is a Player vs Computer format. 
The computer randomly selects a team of 5 players. 
The player then picks their own team. 
A random generator presents five options for the player to choose from. 
The player picks one player for each position (Point Guard, Shooting Guard, Small Forward, Power Forward, and Center). 
After each selection, the generator randomizes again, offering new options. 
This process continues until all five positions on the player’s team are filled. 
 

 

The pool of players from the teams can be formed will be the top 10 players of all time by position. 

 

Each player has stats, and the team will comprise an average of the team's stats. The stats are weighted based on importance.  

 

A winner is determined based on the best average stats: 

 

Player Efficiency Rating (PER): 20% 
Scoring Average: 15% 
Shooting Percentage: 10% 
Defensive Rating: 15% 
Assists: 10% 
Rebounds: 10% 
Steals: 10% 
Blocks: 5% 
Turnovers: -5%(A negative weight because turnovers are bad) 
Final Score = 0.20 x Average PER + 0.15 x Average Scoring  + 0.10 x Average Shooting Percentage  - 0.15 x Average Defensive Rating  + 0.10 x Average Assists  + 0.10 x Average Rebounds  + 0.10 x Average Steals  + 0.05 x  Average Blocks  - 0.05 x Average Turnovers 

Pseudocode:

Initialize an object for each NBA player with their stats (PER, Scoring Average, Shooting Percentage, Defensive Rating, Assists, Rebounds, Steals, Blocks, Turnovers).
Create a list of players for each position (Point Guard, Shooting Guard, Small Forward, Power Forward, Center).
Randomly select 5 players for the computer's team, one for each position.
Players on computer's team no longer available in player pool. 
For the player's team:
For each position:
Randomly select 5 players from the list of players for that position. 
Display the 5 players to the user. 
Let the user select one player. 
Add the selected player to the player's team. 
Once selected, player is no longer in player pool 
Once both teams are selected:
For each team:
Calculate the team's score based on the weighted average of the players' stats:
         Score = 0.20 * Average PER + 0.15 * Average Scoring + 0.10 * Average Shooting Percentage - 0.15 * Average Defensive Rating + 0.10 * Average Assists + 0.10 * Average Rebounds + 0.10 * Average Steals + 0.05 * Average Blocks - 0.05 * Average Turnovers 

Compare the scores of the two teams.
The team with the higher score is the winner.
Display the winner to the user.
