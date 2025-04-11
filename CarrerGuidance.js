import React, { useState } from "react";
import "./CareerGuidance.css"; 

const CareerGuidance = () => {
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [careerPaths, setCareerPaths] = useState([]);

  // Static career paths data
  const careerData = {
    "Computer Science": [
      "Software Developer",
      "Data Scientist",
      "Machine Learning Engineer",
      "Web Developer"
    ],
    "Electrical Engineering": [
      "Electrical Engineer",
      "Power Systems Engineer",
      "Embedded Systems Developer",
      "Control Systems Engineer"
    ],
    "Mechanical Engineering": [
      "Mechanical Engineer",
      "Automotive Engineer",
      "Aerospace Engineer",
      "Robotics Engineer"
    ],
    "Civil Engineering": [
      "Civil Engineer",
      "Structural Engineer",
      "Project Manager",
      "Urban Planner"
    ],
    // Add more fields as needed
  };

  // Handle field selection
  const handleFieldChange = (event) => {
    const selectedField = event.target.value;
    setFieldOfStudy(selectedField);

    // Set career paths based on the selected field
    if (careerData[selectedField]) {
      setCareerPaths(careerData[selectedField]);
    } else {
      setCareerPaths([]);
    }
  };

  return (
    <div className="career-guidance">
      <h2>Career Guidance</h2>
      <p>Choose your field of study to explore career paths.</p>

      {/* Dropdown to select the field of study */}
      <select onChange={handleFieldChange} value={fieldOfStudy}>
        <option value="">Select your field of study</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Electrical Engineering">Electrical Engineering</option>
        <option value="Mechanical Engineering">Mechanical Engineering</option>
        <option value="Civil Engineering">Civil Engineering</option>
        {/* Add more options as needed */}
      </select>

      {/* Display career paths */}
      {careerPaths.length > 0 ? (
        <div className="career-paths">
          <h3>Career Paths for {fieldOfStudy}:</h3>
          <ul>
            {careerPaths.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>
      ) : fieldOfStudy ? (
        <p>No career paths available for this field of study.</p>
      ) : (
        <p>Please select a field of study to see career paths.</p>
      )}
    </div>
  );
};

export default CareerGuidance;
