const mongoose = require("mongoose");

const WithdrawSchema = mongoose.Schema(
  {
    addres: {
        type: String,
        required: true
    },
    amount: {
      type: Number,
      required: true,
    },
    base: {
        type: Number,
        required: true
    },
    date: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Withdraw = mongoose.model('Transderencia', WithdrawSchema);

module.exports = Withdraw;