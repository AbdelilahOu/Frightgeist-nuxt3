import prisma from "./prisma";
import { questionType } from "../models";

export const createQuestion = (question: questionType) => {
  return prisma.questions.create({
    data: {
      ...question,
    },
  });
};

export const deleteQuestion = (id: number) => {
  return prisma.questions.delete({
    where: {
      id,
    },
  });
};

export const makeVote = (id: number, voteFor: string) => {
  return prisma.questions.update({
    where: {
      id,
    },
    data: {
      votes: {
        voteFor,
      },
    },
  });
};

export const getQuestion = (id: number) => {
  return prisma.questions.findUnique({
    where: {
      id,
    },
  });
};

export const getAllQuestions = () => {
  return prisma.questions.findMany({});
};
