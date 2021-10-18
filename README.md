# MineSweeperBot
**Public Minesweeper Bot**

Welcome to the ReadMe section. Here, you can learn how to play Minesweeper HaxBall bot. Firstly, let's start to explain what Mine Sweeper is:

**Mine Sweeper**

Minesweeper is an old single player game in which you uncover the cells and avoid to encounter with the mines. Originally, it has three difficulty levels such as easy (standard: 9x9 background with 10 mines), medium (standard: 16x16 background with 40 mines) and expert (standard: 16x30 background with 99 mines) and various amount of mines (able to be increased up to 667).

Here are some links from gameplay of Mine Sweeper old PC version:

https://www.youtube.com/watch?v=GrZCWx0fnfc (Minesweeper Easy World Record in 31.133 seconds)
https://www.youtube.com/watch?v=n6cbdeQ3YA4 (Clearing 667 mines in 81 seconds)
https://www.youtube.com/watch?v=ZTl1o3sV5fw (Biggest Minesweeper ever solved)

[Minesweeper_Typically_Found_Theme_Style](https://user-images.githubusercontent.com/68077608/117831780-95dee100-b27d-11eb-8dfc-aea995260c16.png) (Minesweeper gameplay)

Now, it's also playable in HaxBall. I have made it playable in HaxBall with (because of the map would be just a trash without a bot). Now let's explain how it's played.

# How Minesweeper is Played? (HaxBall)

You have press **X** to uncover the cells and avoid uncovering mines. Apart from its original, here, the first cell uncovered can have mine; and the game is always played with 10 mines under 10x10 background. Also, colored balls are used instead of texts, as a difference. For example, you see a red ball instead of red **3** on the cell.

Cells in which you pressed **X** will be marked as checked and colored balls will be settled into the cells (near you) who are adjacents of mines. By the way, these colors are equivalent of the numbers in its original. Now, let's explain which color is which number:

* **(1)** Small blue ball: This cell has only **one** adjacent cell who has mine.
* **(2)** Small green ball: This cell has **two** adjacent cells who have mine.
* **(3)** Red ball: This cell has **three** adjacent cells who have mine.
* **(4)** Dark blue ball: This cell has **four** adjacent cells who have mine.
* **(5)** Maroon ball: This cell has **five** adjacent cells who has mine.
* **(6)** Big green ball: This cell has **six** adjacent cells who have mine.
* **(7)** Big black ball: This cell has **seven** adjacent cells who have mine.
* **(8)** Big gray ball: This cell has **eight** adjacent cells who have mine.

Also, there are two more colors... They are **mines** and **flags** as expected. Mines are small black balls in the game and flags are big orange balls (the prevent confusion with small red balls) in HaxBall version.

A screenshot from gameplay with timer... The colored balls are settled into the cells with respect to the locations of mines. Also avatar of the player is automatically changed with respect to the number of cells checked. 
![ms_gameplay](https://user-images.githubusercontent.com/68077608/117837916-857d3500-b282-11eb-9e36-1a50ecf0fe77.png)

A screenshot when player uncovers a cell with mine... All other cells who is adjacent to mines will be filled.
![ms_gameplay_end](https://user-images.githubusercontent.com/68077608/117838342-ed338000-b282-11eb-9bd1-c19d43a68d40.png)

You can mark the suspicious cells with **flags**. How to do this will be shared in commands.
![ms_gameplay_flags](https://user-images.githubusercontent.com/68077608/117838466-089e8b00-b283-11eb-871d-8f540693ca67.jpg)

**Commands**

Frankly you will see all the commands when I upload the scripts here but I think that it's benefitful to list some important commands:

* **!getadmin**: Get/leave admin rights.
* **!flag**: Adds a flag into the cell where you are. You can add 10 flags at most.
* **!rr**: Reset the game.

**Other Features**

* **Timer**: It runs from zero when the game is started, a warning message is announced when the game is ended in any means.
* **Avatar Change**: Player avatar is changed with respect to the number of checked cells after each press on **X**.
* **Checked Cell Warning**: Player is warned when trying to uncover a checked cell.
* **Mine Warning**: Player is warned after trying to uncover a cell with mine. (It's also counted as loss.)
* **Detailed Logs**: The data is logged after event handlers (like **room.onPlayerJoin**, **room.onPlayerChat** etc.) were triggered.
