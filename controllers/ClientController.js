import Client from "../models/Client.js"

class ClientController {
    static cadastrarClient = (req, res) => {
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
            Client.create(client)
            res.status(201).json({ message: 'Client inserido!' })
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    static listarClients = (req, res) => {
        Client.find()
        .exec((error, clients) => {
            res.status(200).json(clients)
        });
    };

    static listarClientsPorId = (req, res) => {
        const id = req.params.id;
        Client.findById(id)
            .exec((error, clients) => {
                if(error) {
                    res.status(400).send({message: `${error.message} - Id do client não localizado`});
                } else {
                    res.status(200).send(clients);
                }
            })
    }

    static atualizarClient = (req, res) => {
        const id = req.params.id;
        Client.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(!error) {
                res.status(200).send({message: "Client atualizado com sucesso"});
            } else {
                res.status(500).send({message: error.message})
            }
        });
    }

    static DeleteClient = (req, res) => {
        const id = req.params.id;
        Client.findByIdAndDelete(id, error => {
            if(!error) {
                res.status(200).send({message: "Client removido com sucesso"})
            } else {
                res.status(500).send({message: error.message});
            }
        });
    }
}

export default ClientController;