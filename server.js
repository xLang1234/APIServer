import express from "express";
import routes from "./routes/index.js";
import connectDB from "./config/db.js";
import logger from "./logger.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`);
});

function listAllRoutes() {
  const routes = [];

  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      // routes registered directly on the app
      routes.push({
        path: middleware.route.path,
        method: Object.keys(middleware.route.methods)[0].toUpperCase(),
      });
    } else if (middleware.name === "router") {
      // router middleware
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          const routePath = middleware.regexp.exec(handler.route.path)
            ? middleware.regexp.exec(handler.route.path)[0].replace("\\", "")
            : "";
          const completePath = routePath + handler.route.path;
          routes.push({
            path: completePath,
            method: Object.keys(handler.route.methods)[0].toUpperCase(),
          });
        }
      });
    }
  });

  return routes;
}

console.log(listAllRoutes());
