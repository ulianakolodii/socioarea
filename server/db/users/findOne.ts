import { userModel } from "./models";

export const findOne = userModel.findOne.bind(userModel);
