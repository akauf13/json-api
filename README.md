# Avatar The Last Airbender API

Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony. Then, everything changed when the Fire Nation attacked. Only the Avatar, master of all four elements, could stop them, but when the world needed him most, he vanished. A hundred years passed and my brother and I discovered the new Avatar, an airbender named Aang. And although his airbending skills are great, he has a lot to learn before he's ready to save anyone. But I believe Aang can save the world.

#

## Model

Raw data on the characters in ATLA is located in the characters.json file in the seed folder.

The character model has the following setup:
```
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
```

#

## Routes

The root api is found at the link:
http://localhost:3000/

You can search for all characters by adding "/characters" to the api root:
http://localhost:3000/characters

To find, update, or delete a specific character by their id, add the parameters "/:id" to the link.
Example:
To find the character "Katara" search: http://localhost:3000/characters/635195620bbc931373194b91

Which will return:
```
{
_id: "635195620bbc931373194b91",
name: "Katara",
nationality: "Southern Water Tribe",
bendingElement: "Water",
weaponOfChoice: [
"Water"
],
fightingStyle: [
"Water bending",
"Blood bending"
],
Affiliations: [
"Southern Water Tribe",
"Team Avatar"
],
isAvatar: false,
quote: "Stealing is wrong...Unless it's from pirates.",
image: "https://static.wikia.nocookie.net/avatar/images/7/7a/Katara_smiles_at_coronation.png",
__v: 0
}
```

To find, update, or delete a specific character by their name, add the parameters "/name/:name" to the link.
Example:
To find the character "Toph" search: http://localhost:3000/characters/name/Toph

Which will return:
```
[
{
_id: "635195620bbc931373194b93",
name: "Toph",
nationality: "Earth Kingdom",
bendingElement: "Earth",
weaponOfChoice: [
"Earth",
"Metal"
],
fightingStyle: [
"Earth bending",
"Metal bending"
],
Affiliations: [
"Earth Kingdom",
"Team Avatar"
],
isAvatar: false,
quote: "I am the greatest earth bender in the world!",
image: "https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png",
__v: 0
}
]
```
