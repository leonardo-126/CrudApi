import { db } from "../db.js";

export const getUsers = (req, res) => {
    const sql = "SELECT * FROM usuarios";

    db.query(sql, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data)
    })
}

export const addUser = (req, res) => {
    const sql = "INSERT INTO usuarios (`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ]

    db.query(sql, [values], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuario criado om sucesso.")
    })

}
export const UpdateUser = (req, res) => {
    const sql = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone`= ?, `data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ]

    db.query(sql, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuario atualizado com sucesso.")
    })

}

export const DeleteUser = (req, res) => {
    const sql = "DELETE FROM usuarios WHERE `id` = ?";
    db.query(sql, [req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuario deletado com sucesso.")
    })

}