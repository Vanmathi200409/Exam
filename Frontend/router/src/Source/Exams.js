import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Exams.css";
import { useLocation } from "react-router-dom";

const Exams = () => {
  const [exams, setExams] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const degree = searchParams.get("degree") || "BBA"; 

  useEffect(() => {
    fetchExams(degree);
  }, [degree]);

  const fetchExams = async (selectedDegree) => {
    try {
        const response = await axios.get(`http://localhost:3003/exams/get?degree=${selectedDegree}`);
        console.log("Fetched Exams:", response.data); 
        setExams(response.data);
    } catch (error) {
        console.error("Error fetching exams:", error);
    }
};


  return (
    <div className="exams-container">
      <h1 className="exams-title">Available Exams for {degree} Students</h1>
      <div className="exams-list">
        {exams.length > 0 ? (
          exams.map((exam) => (
            <div key={exam._id} className="exam-card">
              <p className="exam-name"><strong>examName:</strong> {exam.examName}</p>
              <p className="exam-degree"><strong>Degree:</strong> {exam.degree}</p>
            </div>
          ))
        ) : (
          <p className="no-exams">No exams available for {degree} students.</p>
        )}
      </div>
    </div>
  );
};

export default Exams;
