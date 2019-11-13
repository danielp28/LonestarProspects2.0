import axios from "axios";

export default {

  //create account
  createAccount : function () {
    return axios.post("FORM");
  },
  // Gets all players
  getPlayers: function () {
    return axios.get("/api/players");
  },

  // Gets the player with the given id
  getPlayer: function (id) {
    return axios.get("/api/players/" + id);
  },

  // Saves a player to the database
  savePlayer: function (savedPlayers) {
    return axios.post("/api/players", savedPlayers);
  },

  // Deletes the player with the given id
  deletePlayer: function (id) {
    return axios.delete("/api/players/" + id);
  }
};
