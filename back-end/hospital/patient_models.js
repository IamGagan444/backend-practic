import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ["0+ ve", "O- ve", "A+ ve", "B+ ve", "AB+ ve"],
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    digonastic: {
      type: String,
      required: true,
    },
    hospitalized: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
    gender: {
      type: String,
      enum: ["M", "F", "T"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
