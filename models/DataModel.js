import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    data: { type: JSON },
  },
  { collection: "data" }
);

const DataModel = mongoose.model("DataSchema", dataSchema);

export default DataModel;
