import { PixSchema } from "../schemas/pixSchema";
import { WithdrawSchema } from "../schemas/withdrawSchema";
import User from "../models/User";
import Withdraw from "../models/Withdraw";
import { pix } from "../controllers/pixController";
import Transaction from "../models/Transaction";

export const withdraw = async (req, res) =>{

    try {
        await WithdrawSchema.validateAsync(req.body)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

    const { address } = await User.findOne({ cpf: req.body.cpf })
    const { base } = await User.findOne({base: req.body.base })
    const body = {
        message: 'Transaçao realizada com sucesso',
        address: re.body.address,
        cpf: req.body.cpf,
        base: base,
        date: Date.now()
    }


}