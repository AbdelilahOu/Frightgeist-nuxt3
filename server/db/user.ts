import prisma from "./prisma";
import { userType } from "../models";

export const createUser = (user: userType) => {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
};

export const getUserData = (name: string) => {
  return prisma.user.findUnique({
    where: {
      name,
    },
  });
};

export const getUserDataById = (id: number) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};
