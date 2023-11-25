import { DataModel } from "../models/index.js";

const getAllData = async () => {
  const data = await DataModel.find({});
  return data;
};

const postDataModel = async (req) => {
  const data = new DataModel(req);
  await data.save();
};

export { getAllData, postDataModel };
