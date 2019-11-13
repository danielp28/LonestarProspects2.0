const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: {
    name: { type: String, required: true },
    skills: []
  },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  highschool: { type: String, required: true },
  class: { type: Number, required: true },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;



// const findSkills = (currentPosition) => {
//   let skillsNeeded = [];
//   for (i in skillsByPosition[currentPosition]) {
//     for (skill in allSkills) {
//       if (skillsByPosition[currentPosition][i] === skill) {
//         skillsNeeded.push(skill)
//       }
//     }
//   }
//   console.log(skillsNeeded)
// }