import { model } from "mongoose";

import { User } from "./schemas";

export const userModel = model("users", User);
