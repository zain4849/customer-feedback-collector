import { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbacks, setFeedback] = useState([]) 

  // let feedbacks = [] // Array of feedback objects { rating: rating, comment: comment, id: Date.now() }

  function addFeedback(feedback) { // param is one object, NOT an ARRAY
    setFeedback([feedback, ...feedbacks])
  }


  return (
    <>
      <h1>Customer Feedback</h1>
      <FeedbackForm AddOnFeedback={addFeedback}/>
      <FeedbackList feedbacks={feedbacks}/>
    </>
  );
}

export default App;
