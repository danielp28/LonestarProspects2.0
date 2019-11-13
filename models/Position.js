const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skills = {
    proStyleQB: {
        "Size": {type: Number, required: true},
         "Accuracy": {type: Number, required: true},
         "Arm Strength": {type: Number, required: true},
         "Release": {type: Number, required: true},
         "Throw on the Run": {type: Number, required: true},
         "Poise": {type: Number, required: true},
         "Pocket Presence": {type: Number, required: true},
         "Decision Making": {type: Number, required: true},
         "Touch": {type: Number, required: true}, 
         "Instinct": {type: Number, required: true},
         "Footwork": {type: Number, required: true}
    }
    ,
    dualThreatQB: [
        "Size", "Accuracy", "Arm Strength", "Release", "Throw on the Run", "Poise", "Pocket Presence", "Decision Making", "Elusiveness"
    ],
    runningBack: [
        "Size", "Speed", "Agility", "Vision", "Elusiveness", "Power", "Tackle Breaking", "Awareness", "Catching"
    ],
    wideReceiver: [
        "Size", "Speed", "Agility", "Acceleration", "Release", "Catch", "Catch in Traffic", "Route Running", "Awareness"
    ],
    offensiveTackle: [
        "Size", "Frame", "Pass Block", "Run Block", "Athleticism", "Strength", "Quickness", "Footwork"
    ],
    tightEnd: [
        "Size", "Speed", "Release", "Route Running", "Catch", "Catch in Traffic", "Blocking", "Athleticism"
    ],
    offensiveGuard: [
        "Size", "Frame", "Pass Block", "Run Block", "Athleticism", "Strength", "Quickness", "Footwork"
    ],
    center: [
        "Size", "Frame", "Pass Block", "Run Block", "Athleticism", "Strength", "Quickness", "Footwork"
    ],
    defensiveTackle: [
        "Size", "Strength", "Point of Attack", "First Step", "Explosiveness", "Athleticism", "Pursuit", "Tackle"
    ],
    defensiveEnd: [
        "Size", "Speed", "Point of Attack", "Frame", "Athleticism", "Strength", "Tackle", "First Step", "Play Recognition", "Pursuit"
    ],
    outsideLinebacker: [
        "Size", "Speed", "Tackle", "Play Recognition", "Athleticism", "Power", "Reaction Time"
    ],
    insideLinebacker: [
        "Size", "Speed", "Tackle", "Play Recognition", "Athleticism", "Power", "Reaction Time"
    ],
    cornerback: [
        "Size", "Speed", "Athleticism", "Coverage", "Ball Skills", "Instincts", "Pursuit", "Tackle"
    ],
    safety: [
        "Size", "Speed", "Athleticism", "Coverage", "Ball Skills", "Instincts", "Pursuit", "Tackle"
    ],
    kicker: [
        "add later"
    ]
}

const positionSchema = new Schema({
    position: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Note model
            ref: "Player"
        }
    ],
    skills: skills

});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
