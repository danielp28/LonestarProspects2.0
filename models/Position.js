const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allSkills = {
    "Size": { type: Number, required: false },
    "Accuracy": { type: Number, required: false },
    "Arm Strength": { type: Number, required: false },
    "Release": { type: Number, required: false },
    "Throw on the Run": { type: Number, required: false },
    "Poise": { type: Number, required: false },
    "Pocket Presence": { type: Number, required: false },
    "Decision Making": { type: Number, required: false },
    "Touch": { type: Number, required: false },
    "Instinct": { type: Number, required: false },
    "Footwork": { type: Number, required: false },
    'Elusiveness': { type: Number, required: false },
    'Speed': { type: Number, required: false },
    'Agility': { type: Number, required: false },
    'Vision': { type: Number, required: false },,
    'Power': { type: Number, required: false },,
    'Tackle Breaking': { type: Number, required: false },
    'Awareness': { type: Number, required: false },
    'Catching': { type: Number, required: false },
    'Acceleration': { type: Number, required: false },
    'Catch': { type: Number, required: false },
    'Catch in Traffic': { type: Number, required: false },
    'Route Running': { type: Number, required: false },
    'Frame': { type: Number, required: false },
    'Pass Block': { type: Number, required: false },
    'Run Block': { type: Number, required: false },
    'Athleticism': { type: Number, required: false },
    'Strength': { type: Number, required: false },
    'Quickness': { type: Number, required: false },
    'Blocking': { type: Number, required: false },
    'Point of Attack': { type: Number, required: false },
    'First Step': { type: Number, required: false },
    'Explosiveness': { type: Number, required: false },
    'Pursuit': { type: Number, required: false },
    'Tackle': { type: Number, required: false },
    'Play Recognition': { type: Number, required: false },
    'Reaction Time': { type: Number, required: false },
    'Coverage': { type: Number, required: false },
    'Ball Skills': { type: Number, required: false },
    'Instincts': { type: Number, required: false },
};

const skillsByPosition = {
    proStyleQB: [
        "Size", "Accuracy", "Arm Strength", "Release", "Throw on the Run", "Poise", "Pocket Presence", "Decision Making", "Touch", "Instinct", "Footwork"
    ]
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
    skills: 

});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
