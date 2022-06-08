/**
 * arquivo: controllers/called-routes.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Called)
 * data: 07/06/2022
 */

const db = require("../config/database");

// ==> Método responsável por criar um novo 'Called':
exports.createCalled = async (req, res) => {
  const { categoria, descricao, dataAbertura, estado, fk_cliente_email } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO chamado (categoria, descricao, dataAbertura, estado, fk_cliente_email) VALUES ($1, $2, $3, $4, $5)",
      [categoria, descricao, dataAbertura, estado, fk_cliente_email]
    );
    res.status(201).send({
      message: "Called added successfully!",
      body: {
        called: {  categoria, descricao, dataAbertura, estado, fk_cliente_email },
      },
    });
  } catch (error) {
    console.error('createCalled', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por criar os 'Clientes'
exports.createClient = async (req, res) => {
  const { email, nome, senha } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO cliente (email, nome, senha) VALUES ($1, $2, $3)",
      [email, nome, senha]
    );
    res.status(201).send({
      message: "Client added successfully!",
      body: {
        cliente: { email, nome, senha },
      },
    });
  } catch (error) {
    console.error('createClient', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};
// ==> Método responsável por crear um tecnico

exports.createTecnico = async (req, res) => {
	const { email, nome, funcao, senha } = req.body;
	try {
	  const { rows } = await db.query(
		"INSERT INTO tecnico (email, nome, funcao, senha) VALUES ($1, $2, $3, $4)",
		[email, nome, funcao, senha]
	  );
	  res.status(201).send({
		message: "Tecnico added successfully!",
		body: {
		  tecnico: { email, nome, funcao, senha },
		},
	  });
	} catch (error) {
	  console.error('createTecnico', error);
	  res.status(500).send({
		message: "Ocorreu um erro."
	  });
	}
  };

// ==> Método responsável por listar todos os 'Calleds':
exports.listAllCalleds = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT 
										categoria,
										descricao,
										estado,
										fk_cliente_email,
                                    	to_char(dataabertura, 'yyyy-MM-dd') as dataabertura
                                    FROM chamado ORDER BY chamado_id desc`);
    res.status(200).send(rows);
  } catch (error) {
    console.error('listAllCalleds', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};
// ==> Método responsável por listar todos os 'Cliente':
exports.loginClient = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT 
										email, senha
                                    FROM cliente ORDER BY email asc`);
    res.status(200).send(rows);
  } catch (error) {
    console.error('listClient', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};
exports.loginTecnico = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT 
										email, senha
                                    FROM tecnico ORDER BY email asc`);
    res.status(200).send(rows);
  } catch (error) {
    console.error('listTecnico', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por listar um determinado 'Called' por Id:
exports.findCalledById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT 
										categoria,
										descricao,
										estado,
										fk_cliente_email,
										to_char(dataabertura, 'yyyy-MM-dd') as dataabertura
									FROM chamado ORDER BY chamado_id desc`,
      [id]
    );
    if (!rows.length) {
      throw 'called_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findCalledById', error);
    if (error == 'called_not_found') {
      res.status(404).send({
        message: "Called not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

// ==> Método responsável por atualizar um determinado 'Called' por Id:
exports.updateCalledById = async (req, res) => {
  const { id } = req.params;
  try {
    const { categoria, descricao, dataAbertura, estado } = req.body;
    const { rows } = await db.query(`UPDATE chamado 
                                    SET categoria = $1, 
                                    descricao = $2, 
                                    dataAbertura = $3, 
                                    estado = $4,
                                    WHERE chamado_id = $6`,
      [categoria, descricao, dataAbertura, estado]
    );
    res.status(200).send({ message: "Called Updated Successfully!" });
  } catch (error) {
    console.error('updateCalledById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por deletar um determinado 'Called' por Id:
exports.deleteCalledById = async (req, res) => {
	const { id } = req.params;
	try {
	  await db.query("DELETE FROM chamado WHERE chamado_id = $1", [id]);
	  res.status(200).send({ message: "Called deleted successfully!" });
	} catch (error) {
	  console.error('deleteCalledById', error);
	  res.status(500).send({
		message: "Ocorreu um erro."
	  });
	}
  };
