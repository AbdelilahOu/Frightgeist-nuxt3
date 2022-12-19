import prisma from "./prisma";

export const getAllUsers = () => {
  return prisma.user.findMany({});
};

export const createUser = (user) => {
  return prisma.user.create({
    data: {
      user,
    },
  });
};

export const updateUser = (updateUser) => {
  const { name, id } = updateUser;
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
