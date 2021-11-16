const mongoose = require("mongoose");

const SaldoSchema = mongoose.Schema(
    {
        currency: {
            type: String,
            require: true
        },
        amount: {
            type: String,
            require: true
        }
    }
)

const Saldo = mongoose.model('Saldo', SaldoSchema)

module.exports = Saldo;
