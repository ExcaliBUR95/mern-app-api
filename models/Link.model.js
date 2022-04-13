const mongoose = require("mongoose");

const schemaLink = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Link = mongoose.model("Link", schemaLink);

module.exports = Link;
