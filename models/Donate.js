import mongoose from "mongoose";

const Donate = mongoose.model('Donate', {
  value: {type: Number, required: true},
  client: {type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true},
});

export default Donate