"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmail = exports.getUsers = void 0;
const extension_1 = require("@prisma/client/extension");
const prisma = new extension_1.PrismaClient();
const getUsers = () => prisma.user.findMany();
exports.getUsers = getUsers;
const getUserByEmail = (email) => prisma.user.findUnique({ where: { email } });
exports.getUserByEmail = getUserByEmail;
const getUserBySessionToken = (sessionToken) => prisma.user.findUnique({ where: { authentication: { sessionToken } } });
exports.getUserBySessionToken = getUserBySessionToken;
const getUserById = (id) => prisma.user.findUnique({ where: { id } });
exports.getUserById = getUserById;
const createUser = (values) => prisma.user.create({ data: values });
exports.createUser = createUser;
const deleteUserById = (id) => prisma.user.delete({ where: { id } });
exports.deleteUserById = deleteUserById;
const updateUserById = (id, values) => prisma.user.update({ where: { id }, data: values });
exports.updateUserById = updateUserById;
