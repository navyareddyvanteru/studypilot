import React, { useState } from 'react';
import './Flashcards.css'; // Ensure the correct path to your CSS

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });
  
  const addFlashcard = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (newFlashcard.question && newFlashcard.answer) {
      // Create a flashcard object with initial animation states
      const flashcardWithAnimation = { ...newFlashcard, visible: false };
      setFlashcards((prev) => [...prev, flashcardWithAnimation]);
      setNewFlashcard({ question: '', answer: '' }); // Reset input fields

      // Trigger animation after a short delay
      setTimeout(() => {
        setFlashcards((prevFlashcards) =>
          prevFlashcards.map((flashcard, index) =>
            index === prevFlashcards.length - 1 ? { ...flashcard, visible: true } : flashcard
          )
        );
      }, 50); // Delay to allow time for flashcard to be added
    }
  };

  return (
    <div className="flashcards">
      <form className="flashcard-form" onSubmit={addFlashcard}>
        <input
          type="text"
          placeholder="Question"
          value={newFlashcard.question}
          onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFlashcard.answer}
          onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })}
          required
        />
        <button type="submit">Add Flashcard</button>
      </form>
      <div className="flashcard-list">
        {flashcards.map((flashcard, index) => (
          <div
            key={index}
            className={`flashcard ${flashcard.visible ? 'visible' : 'enter'}`}
          >
            <strong>Q: {flashcard.question}</strong>
            <p>A: {flashcard.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
