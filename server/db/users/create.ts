import { userModel } from "./models";

export const create = userModel.create.bind(userModel);
