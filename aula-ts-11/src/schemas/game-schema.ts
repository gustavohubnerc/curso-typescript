import Joi from "joi";
import { CreateGame } from "protocols/game-protocol";

export const gamesSchema = Joi.object<CreateGame>({
    title: Joi.string().required(),
    platform: Joi.string().required()
})