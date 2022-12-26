import { questionType, updateQType } from "../models";
import prisma from "./prisma";

export const getAllQuestions = () => {
  return prisma.question.findMany({});
};

export const getQuestion = (id: number) => {
  return prisma.question.findUnique({
    where: {
      id,
    },
  });
};

export const createQuestion = (Question: questionType) => {
  const { title, options, userId, endsAt } = Question;
  return prisma.question.create({
    data: {
      title,
      options,
      endsAt: new Date(endsAt),
      user: {
        connect: {
          id: userId,
        },
      },
      VoteResult: {
        create: {
          options,
          result: [],
        },
      },
    },
  });
};

export const deleteAllQuestion = () => {
  return prisma.question.deleteMany({});
};

export const deleteQuestion = (id: number) => {
  return prisma.question.deleteMany({
    where: {
      id,
    },
  });
};

export const getQuestionVotes = (id: number) => {
  return prisma.question.findUnique({
    where: {
      id,
    },
    include: {
      vote: true,
    },
  });
};

export const updateQuestion = (id: number, updateQuestion: updateQType) => {
  return prisma.question.update({
    where: {
      id,
    },
    data: {
      ...updateQuestion,
    },
  });
};

export const getCurrentQuestions = () => {
  const currentDate = new Date();
  return prisma.question.findMany({
    where: {
      createdAt: {
        lt: currentDate,
      },
      endsAt: {
        gt: currentDate,
      },
    },
  });
};
