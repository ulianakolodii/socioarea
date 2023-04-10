import { Schema } from "mongoose";

export const Token = new Schema(
	{
		userId: String,
		token: String,
	},
	{ timestamps: true }
);
