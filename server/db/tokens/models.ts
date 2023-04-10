import { model } from "mongoose";

import { Token } from "./schemas";

export const tokensModel = model("tokens", Token);
