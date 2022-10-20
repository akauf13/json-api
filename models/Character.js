import mongoose from "mongoose";
const Schema = mongoose.Schema

let Character = new Schema({
  name: {type: String},
  nationality: { type: String },
  bendingElement: {type: String},
  weaponOfChoice: [{ type: String }],
  fightingStyle: [{type: String}],
  Affiliations: [{type: String}],
  isAvatar: {type: Boolean},
  quote: {type: String},
  image: { type: String },
})

export default mongoose.model("characters", Character)
  