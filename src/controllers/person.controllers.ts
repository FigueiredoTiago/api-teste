import {
  createPersonService,
  findPersonService,
} from "../services/person.services";
import { Request, Response } from "express";

//criar uma pessoa nova

export const createPerson = async (req: Request, res: Response) => {
  const { name, age, city } = req.body;

  if (!name || !age || !city) {
    res.status(400).json({ message: "Preencha todos os campos Obrigatorios!" });
    return;
  }

  const ageNumber = parseInt(age);

  if (isNaN(ageNumber)) {
    return res
      .status(400)
      .json({ message: "Idade deve ser um número válido!" });
  }

  const person = {
    name,
    age: ageNumber,
    city,
  };

  try {
    const newPerson = await createPersonService(person);

    res.status(200).json({ message: "Pessoa criada com Sucesso!", newPerson });
  } catch (error) {
    res.status(500).json({ message: "Erro interno do Servidor..." });
    console.log(error);
  }
};

//controller para buscar todas as pessoas no banco de dados:

export const findAllPerson = async (req: Request, res: Response) => {
  try {
    const data = await findPersonService();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error interno!" });
    console.log(error);
  }
};

//alteracao minima para teste