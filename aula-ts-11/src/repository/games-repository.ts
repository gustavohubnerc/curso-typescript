import { CreateGame, Game } from "../protocols/game-protocol";
import { connection } from "../database/database-connection";

async function getGames() {
  const { rows } = await connection.query<Game>("SELECT * FROM games");
  return rows;
} 

async function createGame(game: CreateGame) {
  await connection.query(`INSERT INTO games (title, platform) VALUES ($1, $2)`, [game.title, game.platform]); 
}

async function getGameByTitleAndPlatform(game: CreateGame) {
  const { rows } = await connection.query<CreateGame>(`SELECT * FROM games WHERE title = $1 AND platform = $2`, [game.title, game.platform]);
  return rows[0];
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;