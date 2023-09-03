import dotenv from "dotenv";
dotenv.config();
import { app } from "./app";

import { AppDataSource } from "./Utils/db.config";

const port = process.env.PORT || 8009;

AppDataSource.initialize()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((error) => {
		console.error("Error connecting to the database", error);
	});
