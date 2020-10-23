-- a. Retrieve a list of all the games, ordered by date with the most recent game coming first.
-- b. Retrieve all the games that occurred in the past week.
-- c. Retrieve a list of players who have (non-NULL) names.
-- d. Retrieve a list of IDs for players who have some game score larger than 2000.
-- e. Retrieve a list of players who have GMail accounts.

-- a.
SELECT * FROM GAME
ORDER BY time DESC

-- b.
SELECT * FROM GAME
WHERE time >= CURRENT_TIMESTAMP - interval '7 days';

-- c. 
SELECT *
FROM Player
WHERE name IS NOT NULL;

-- d.
SELECT DISTINCT playerID from PlayerGame WHERE score > 2000;

-- e. 
SELECT *
FROM Player
WHERE emailAddress LIKE '%gmail%';

---- 8.2
-- a. Retrieve all “The King”’s game scores in decreasing order.
SELECT score
FROM Player, PlayerGame
WHERE Player.ID = PlayerGame.PlayerID AND Player.name = 'The King'
ORDER BY score DESC;

-- b. Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.
SELECT name 
    FROM Player, PlayerGame, Game
    WHERE PlayerID = PlayerGame.PlayerID 
        AND PlayerGame.GameID = Game.ID 
        AND Game.time = timestamp '2006-06-28 13:20:00'
    ORDER BY score DESC
    LIMIT 1;

-- c. So what does that P1.ID < P2.ID clause do in the last example query?
--      It's making sure that it only gives you each result once because if 
--      you didn't have that it would also give you the vice versa when it go to the other player. 

-- d. The query that joined the Player table to itself seems rather contrived. Can you think of a realistic 
-- situation in which you’d want to join a table to itself?
--      When you want to compare data in the table with other data in the same table eg. Player1, Player2; checking 
--      results against other ones in the same table

