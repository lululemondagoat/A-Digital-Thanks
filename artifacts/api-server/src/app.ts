import express, { type Express } from "express";
import path from "path";
import cors from "cors";
import * as pinoHttp from "pino-http";
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";

const app: Express = express();

app.use(
  (pinoHttp as any).pinoHttp({
    logger,
    serializers: {
      req(req: any) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: any) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const frontendPath = path.join(process.cwd(), "..", "thank-you-card", "dist", "public");

app.use(express.static(frontendPath));

app.get("(.*)", (req, res) => {
  if (req.url.startsWith("/api")) {
    return res.status(404).json({ error: "API route not found" });
  }
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) {
      res
        .status(200)
        .send(
          "Server is ALIVE, but I can't find the 'dist' folder yet. Make sure Vercel build settings are updated!",
        );
    }
  });
});

export default app;
