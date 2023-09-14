import gamesRepository from "../repository/games-repository";
import { CreateGame, Game } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

function createGame(game: CreateGame) {
  const gameExists = gameAlreadyExists(game);

  if (gameExists) {
    throw { message: "Game already exists" };
  } else {
    gamesRepository.createGame(game);
  }
}

function gameAlreadyExists(game: CreateGame): boolean {
  const result = gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;