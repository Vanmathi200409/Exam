const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  examName: { type: String, required: true },
  degree: { type: String, required: true },
});

const ExamModel = mongoose.model("Exam", examSchema);
module.exports = ExamModel;
