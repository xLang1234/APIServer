import db from "../config/db.js";
export function getData(req, res) {}

export function postData(req, res) {
  console.log(
    "TCL  ~ file: apiController.js:32 ~ postData ~ req.body",
    req.body
  );
  db.collection("data").insertOne(req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving data to database");
    } else {
      res.status(200).send(result.ops[0]);
    }
  });
}
