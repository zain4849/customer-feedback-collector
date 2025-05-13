import { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState([])

  let feedbacks = [] // Array of feedback objects { rating: rating, comment: comment, id: Date.now() }

  function addFeedback(feedback) {
    setFeedback([feedback, ...feedbacks])
  }


  return (
    <>
      <h1>Customer Feedback Collector</h1>
      <FeedbackForm AddOnFeedback={addFeedback}/>
    </>
  );
}

export default App;
