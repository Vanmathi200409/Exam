const express = require("express");
const router = express.Router();
const Exam = require("../Models/examModel");
router.post("/add", async (req, res) => {
    try {
      const exams = req.body; 
      if (!Array.isArray(exams) || exams.length === 0) {
        return res.status(400).json({ message: "Invalid data format. Expected an array of exams." });
      }
  
      // Validate each exam
      for (const exam of exams) {
        if (!exam.examName || !exam.degree) {
          return res.status(400).json({ message: "Each exam must have an examName and degree." });
        }
      }
  
      
      const savedExams = await Exam.insertMany(exams);
      res.status(201).json({ message: "Exams added successfully", data: savedExams });
    } catch (error) {
      console.error("Error saving exams:", error);
      res.status(500).json({ message: "Server error", error });
    }
  });
  router.get("/get", async (req, res) => {
    try {
      const degree = req.query.degree;
      if (!degree) {
        return res.status(400).json({ message: "Degree is required" });
      }
      const exams = await Exam.find({ degree });
      res.status(200).json(exams);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
module.exports = router;
