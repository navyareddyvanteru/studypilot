import React, { useState } from "react";
import "./Chatbot.css"; // Optional CSS for styling

const Chatbot = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [showOptions, setShowOptions] = useState(true);
  const [pdfLink, setPdfLink] = useState("");

  // PDF links for each subject
  const subjects = {
    Blockchain: "https://ntiprit.gov.in/pdf/blockchainanddistributed/Blockchain_Introduction_KR.pdf",
    IRTD: "https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r2.pdf",
    BDH: "link_to_bdh.pdf",
    MADS: "link_to_mads.pdf",
  };

  const steps = [
    {
      question: "Select your student year:",
      options: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    },
    {
      question: "Select your semester:",
      options: ["1st Semester", "2nd Semester"],
    },
    {
      question: "Select your department:",
      options: ["AIML", "CS", "DS", "CSE", "IOT", "IT"],
    },
    {
      question: "What do you want?",
      options: ["Study Materials", "Last Year Papers", "Model Papers"],
    },
    {
      question: "Select a subject:",
      options: Object.keys(subjects),
    },
  ];

  const handleOptionClick = (option) => {
    setResponses((prev) => ({ ...prev, [step]: option }));
    setShowOptions(false);
    
    // Check if the current step is for selecting a subject
    if (step === 3 && option === "Study Materials") {
      // If "Study Materials" is selected, show the subject selection step
      setStep((prev) => prev + 1);
      setTimeout(() => {
        setShowOptions(true);
      }, 1000); // Delay before showing options
    } else if (step === 4) {
      // If a subject is selected, set the PDF link
      setPdfLink(subjects[option]);
      setStep((prev) => prev + 1);
      setTimeout(() => {
        setShowOptions(true);
      }, 1000); // Delay before moving to the next step
    } else {
      setTimeout(() => {
        setShowOptions(true);
        setStep((prev) => prev + 1);
      }, 1000); // Delay before moving to the next step
    }
  };

  const resetChatbot = () => {
    setStep(0);
    setResponses({});
    setPdfLink("");
  };

  return (
    <div className="chatbot">
      <h2>Chatbot</h2>
      <div className="chat-window">
        <div className="message">
          <p>
            {step < steps.length
              ? steps[step].question
              : "Thank you! Here are your selections:"}
          </p>
        </div>
        
        {step === steps.length && (
          <div className="message">
            <p>
              <strong>Year:</strong> {responses[0]} <br />
              <strong>Semester:</strong> {responses[1]} <br />
              <strong>Department:</strong> {responses[2]} <br />
              <strong>Requested:</strong> {responses[3]} <br />
              {responses[3] === "Study Materials" && pdfLink && (
                <a href={pdfLink} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              )}
            </p>
          </div>
        )}

        {showOptions && step < steps.length && (
          <div className="options">
            {steps[step].options.map((option) => (
              <button
                key={option}
                className="option-button"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {step === steps.length && (
        <button className="option-button" onClick={resetChatbot}>
          Start Over
        </button>
      )}
    </div>
  );
};

export default Chatbot;
