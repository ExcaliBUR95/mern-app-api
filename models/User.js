const mongoose = require("mongoose");

const schemaUser = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Link" }],
});

const User = mongoose.model("User", schemaUser);

module.exports = User;
