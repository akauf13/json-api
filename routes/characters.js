import { Router } from "express";
import * as controllers from "../controllers/characters.js"

const router = Router()

router.get("/", controllers.getCharacters)
router.get("/:id", controllers.getCharacter)
router.get("/name/:name", controllers.getCharacterName)
router.post("/", controllers.createCharacter)
router.put("/:id", controllers.updateCharacter)
router.put("/name/:name", controllers.updateCharacterName)
router.delete("/:id", controllers.deleteCharacter)
router.delete("/name/:name", controllers.deleteCharacterName)

export default router