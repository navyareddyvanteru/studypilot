import React from "react";
import "./Academics.css"; // Make sure to add your custom styles here

const Academics = () => {
  // Static student details
  const studentDetails = {
    rollNumber: "2111cs040132",
    name: "Swathi",
    percentage: 85,
    subjects: [
      { name: "Math", present: 40, absent: 2, marks: 90 },
      { name: "Science", present: 38, absent: 4, marks: 88 },
      { name: "English", present: 42, absent: 0, marks: 92 }
    ]
  };

  const { rollNumber, name, percentage, subjects } = studentDetails;

  return (
    <div className="academics">
      <h2>Academic Details for {name}</h2>
      <div className="student-info">
        <p><strong>Roll Number:</strong> {rollNumber}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
      </div>

      <div className="subjects">
        <h3>Subject-wise Details</h3>
        {subjects.map((subject, index) => (
          <div key={index} className="subject-details">
            <h4>{subject.name}</h4>
            <p><strong>Marks:</strong> {subject.marks}</p>
            <p><strong>Classes Attended:</strong> {subject.present}</p>
            <p><strong>Classes Absent:</strong> {subject.absent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;
