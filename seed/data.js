import db from "../db/connection.js"
import Character from "../models/Character.js"
import characters from "./characters.json" assert { type: "json" }

const insertData = async () => {
  //reset database
  // await db.dropDatabase()
  await Character.deleteMany({})
  
  //insert data
  await Character.create(characters)
  
  //close db connection (doesn't need await)
  await db.close()
}

insertData()
