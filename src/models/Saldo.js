const mongoose = require("mongoose");

const SaldoSchema = mongoose.Schema(
  {
    cpf: {
      type: String,
      required: true,
    },
    brl: {
      type: Number,
      required: true,
    },
    cusd: {
      type: Number,
      required: true,
    },
    mco2: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Saldo = mongoose.model('Saldo', SaldoSchema)

module.exports = Saldo;
