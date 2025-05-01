import { Request, Response } from "express";
import { respondWithError, respondWithJSON } from "./json.js";
import { createUser } from "../db/queries/users.js";
import { User } from "../db/schema.js";

export async function handlerUsersCreate(req: Request, res: Response, user: User) {
  try {
    const { name } = req.body;
    
    await createUser({
      id: user.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      name,
      apiKey: user.apiKey,
    });
    
    respondWithJSON(res, 201, user);
  } catch (err) {
    respondWithError(res, 500, "Couldn't create user", err);
  }
}

export async function handlerUsersGet(req: Request, res: Response, user: User) {
  respondWithJSON(res, 200, user);
}


