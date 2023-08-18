import {PrismaClient} from "@prisma/client/extension";

const prisma = new PrismaClient();

export const getUsers = () => prisma.user.findMany();
export const getUserByEmail = (email: string) => prisma.user.findUnique({ where: { email } });
export const getUserBySessionToken = (sessionToken: string) => prisma.user.findUnique({ where: { authentication: { sessionToken } } });
export const getUserById = (id: string) => prisma.user.findUnique({ where: { id } });
export const createUser = (values: Record<string, any>) => prisma.user.create({ data: values });
export const deleteUserById = (id: string) => prisma.user.delete({ where: { id } });
export const updateUserById = (id: string, values: Record<string, any>) => prisma.user.update({ where: { id }, data: values });
