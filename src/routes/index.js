import { default as searchRouter } from "./search.js";
import { default as siteRouter } from "./site.js";

function route(app) {
  app.use("/search", searchRouter);
  app.use("/", siteRouter);

  // app.post("/search", (req, res) => {
  //   res.send("");
  // });
}

export default route;
