import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./Route/blog.route";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
	return res.status(200).json({
		message: "Sever is very very fine nice one !!!!!!!",
		status: true,
	});
});

app.get("/health", (req: Request, res: Response) => {
	return res.status(200).json({
		message: "Sever is very very fine nice one !!!!!!!",
		status: true,
	});
});

app.use(routes);

export { app };
