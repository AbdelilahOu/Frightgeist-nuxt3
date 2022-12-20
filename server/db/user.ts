import { userType, userUpdate } from "../models";
import prisma from "./prisma";

export const getAllUsers = () => {
  return prisma.user.findMany({});
};

export const createUser = (user: userType) => {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
};

export const updateUser = (user: userUpdate) => {
  const { name, id } = user;
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
};

export const getWithQuestions = (id: number) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      questions: true,
    },
  });
};

export const deleteUser = (id: number) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};
