/* Floating Chat Icon */
.chat-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: white;
    font-size: 24px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  .logout-btn {
    position: fixed;
    top: 20px;  /* Adjust to position from top */
    right: 20px;  /* Position from the right side */
    padding: 10px 20px;
    background-color: #d9534f;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    z-index: 1000;  /* Ensure it stays above other content */
  }
  
  .logout-btn:hover {
    background-color: #c9302c;  /* Darker color on hover */
  }
  
  
  /* Chatbox */
  .chatbox {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 300px;
    height: 400px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  /* Close Chat Button */
  .close-chat {
    background: none;
    border: none;
    color: #007bff;
    font-size: 18px;
    align-self: flex-end;
    margin: 5px;
    cursor: pointer;
  }
  
  /* Chatbox Header */
  .chatbox h2 {
    margin: 0;
    padding: 10px;
    background-color: #007bff;
    color: white;
    text-align: center;
  }
  
