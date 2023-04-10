import mongoose from "mongoose";

export default async () => {
	const config = useRuntimeConfig();
	console.log("config", config);
	try {
		await mongoose.connect(config.mongodbUri);
		console.log("MongoDB Connected 🚀");
	} catch (err) {
		console.error("ERROR 🥵", err.message);
		process.exit(1);
	}
};
