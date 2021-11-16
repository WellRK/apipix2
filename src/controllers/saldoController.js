import { SaldoSchema } from "../schemas/saldoSchema";
import Saldo from "../models/Saldo";

export const getSaldo = async (req, res) => {
    try {
        await SaldoSchema.validateAsync(req.body)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

    const { CUSD, MCO2 } = await Saldo.findOne({ cpf: req.body.cpf })
    const body = {
        CUSD,
        MCO2
    }
    return res.status(200).json(body)
}

export const updateSaldo = async (currency, value, cpf) => {
    if (currency != 'CUSD' && currency != 'MCO2') throw new Error('Moeda inválida')

    const saldoAnterior = await Saldo.findOne({ cpf }); // objeto contendo cpf, brl, cusd, mco2
    let novoSaldo = saldoAnterior[currency] + Number(value)
    novoSaldo = parseFloat(novoSaldo.toFixed(8)) // Deve ter 8 casas decimais
    await Saldo.updateOne({ cpf }, { $set: { [currency]: novoSaldo } })

    return novoSaldo
}