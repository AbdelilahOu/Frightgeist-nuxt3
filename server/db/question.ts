import { questionType, updateQType } from "../models";
import prisma from "./prisma";

export const getAllQuestions = () => {
  return prisma.questions.findMany({});
};

export const createQuestion = (Question: questionType) => {
  const { title, options, userId, endsAt } = Question;
  return prisma.questions.create({
    data: {
      title,
      options,
      endsAt,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
};

export const deleteAllQuestion = () => {
  return prisma.questions.deleteMany({});
};

export const deleteQuestion = (id: number) => {
  return prisma.questions.deleteMany({
    where: {
      id,
    },
  });
};

export const getQuestionVotes = (id: number) => {
  return prisma.questions.findUnique({
    where: {
      id,
    },
    include: {
      vote: true,
    },
  });
};

export const updateQuestion = (id: number, updateQuestion: updateQType) => {
  return prisma.questions.update({
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
  return prisma.questions.findMany({
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
