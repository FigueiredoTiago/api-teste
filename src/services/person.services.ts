import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

//servico para criar um person no banco de dados

type Person = {
  name: string;
  age: number;
  city: string;
};

export const createPersonService = async (data: Person) => {
  return await client.person.create({
    data,
  });
};

//servico para buscar todas as pessoas no banco de dados

export const findPersonService = async () => {
  return await client.person.findMany();
};
