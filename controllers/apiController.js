import { getAllData, postDataModel } from "../services/apiService.js";
export async function getData(req, res) {
  await getAllData().then((data) => {
    res.json(data);
  });
}

export async function postData(req, res) {
  console.log(
    "TCL  ~ file: apiController.js:32 ~ postData ~ req.body",
    req.body
  );
  await postDataModel(req.body);
  res.json({ message: "Data saved successfully" });
}
