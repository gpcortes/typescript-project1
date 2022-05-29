import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.get("/", (request, response) => {
  response.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
