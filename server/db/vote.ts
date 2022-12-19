import prisma from "./prisma";

export const createVote = (
  choice: string,
  voterName: string,
  questionId: number
) => {
  return prisma.vote.create({
    data: {
      choice,
      voter: {
        connect: {
          name: voterName,
        },
      },
      question: {
        connect: {
          id: questionId,
        },
      },
    },
  });
};

export const getAllVotes = () => {
  return prisma.vote.findMany({});
};

export const updateVote = (choice: string, id: number) => {
  return prisma.vote.update({
    where: {
      id,
    },
    data: {
      choice,
    },
  });
};

export const deleteVote = (id: number) => {
  return prisma.vote.delete({
    where: {
      id,
    },
  });
};
