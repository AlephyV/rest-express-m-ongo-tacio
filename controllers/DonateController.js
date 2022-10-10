import Donate from "../models/Donate.js"

class DonateController {
    static cadastrarDonate = (req, res) => {
        const { name, cpf } = req.body
        const client = {
            name,
            cpf
        }

        if(!client.name || !client.cpf) {
            res.status(500).json({ erro: "dados faltando" })
            return
        }

        try {
            Donate.create(client)
            res.status(201).json({ message: 'Donate inserido!' })
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    static listarDonates = (req, res) => {
        Donate.find()
        .populate("client", "name")
        .exec((error, clients) => {
            res.status(200).json(clients)
        });
    };

    static listarDonatesPorId = (req, res) => {
        const id = req.params.id;
        Donate.findById(id)
            .populate("client", "name")
            .exec((error, clients) => {
                if(error) {
                    res.status(400).send({message: `${error.message} - Id do client não localizado`});
                } else {
                    res.status(200).send(clients);
                }
            })
    }

    static atualizarDonate = (req, res) => {
        const id = req.params.id;
        Donate.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(!error) {
                res.status(200).send({message: "Donate atualizado com sucesso"});
            } else {
                res.status(500).send({message: error.message})
            }
        });
    }

    static DeleteDonate = (req, res) => {
        const id = req.params.id;
        Donate.findByIdAndDelete(id, error => {
            if(!error) {
                res.status(200).send({message: "Donate removido com sucesso"})
            } else {
                res.status(500).send({message: error.message});
            }
        });
    }
}

export default DonateController;