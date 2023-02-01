import mongoose from "mongoose";
const { Schema, model } = mongoose;

const jugadoresSchema = new Schema({
  playerName: {
    type: "string",
    required: true,
    unique: true,
  },
});

jugadoresSchema.methods.toJSON = function () {
  return Jugador;
};

const Jugador = model("Jugador", jugadoresSchema);
module.exports = Jugador;
