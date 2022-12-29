import { makeVoteType } from "../models";
import prisma from "./prisma";

export const createVote = (makeVote: makeVoteType) => {
  return prisma.vote.create({
    data: {
      choice: makeVote.choice,
      voter: {
        connect: {
          name: makeVote.voterName,
        },
      },
      question: {
        connect: {
          id: makeVote.questionId,
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

export const getAllVotesOfQuestion = (id: number) => {
  return prisma.vote.groupBy({
    by: ["choice"],
    _count: {
      _all: true,
    },
    where: {
      questionId: id,
    },
  });
};
