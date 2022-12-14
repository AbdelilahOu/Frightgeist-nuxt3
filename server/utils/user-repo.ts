import prisma from "../db/prisma";
import { userType } from "./types";

export const createUser = (user: userType) => {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
};

export const getUserData = (userName: string) => {
  return prisma.user.findUnique({
    where: {
      userName,
    },
  });
};
