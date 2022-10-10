import mongoose from "mongoose";

const Client = mongoose.model('Client', {
  name: {type: String, required: true},
  cpf: {type: String, required: true}
});

export default Client;