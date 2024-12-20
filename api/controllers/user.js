import { db } from "../db.js";

// Obter todos os produtos
export const getProducts = (_, res) => {
  const q = "SELECT * FROM produtos"; // Refletindo a tabela de produtos

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Adicionar um produto
export const addProduct = (req, res) => {
  const q = "INSERT INTO produtos(`nome`, `quantidade`, `valor`) VALUES(?)"; // Campos ajustados

  const values = [
    req.body.nome,
    req.body.quantidade,
    req.body.valor,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto criado com sucesso.");
  });
};

// Atualizar um produto
export const updateProduct = (req, res) => {
  const q =
    "UPDATE produtos SET `nome` = ?, `quantidade` = ?, `valor` = ? WHERE `id` = ?"; // Ajustado para os campos de produto

  const values = [
    req.body.nome,
    req.body.quantidade,
    req.body.valor,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto atualizado com sucesso.");
  });
};

// Deletar um produto
export const deleteProduct = (req, res) => {
  const q = "DELETE FROM produtos WHERE `id` = ?"; // Nome da tabela ajustado para produtos

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produto deletado com sucesso.");
  });
};
