import { tokensModel } from "./models";

export const findOne = tokensModel.findOne.bind(tokensModel);
