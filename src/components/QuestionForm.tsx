import { useState } from 'react';
import firebase from '../Firebase/firebase';
import randomcolor from 'randomcolor';

function QuestionForm({ setShowModal }: { setShowModal: any }) {
  const [questionPreview, setQuestionPreview] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  function handleForm(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    let color = randomcolor();

    firebase.firestore().collection('Cards').add({
      questionPreview: questionPreview,
      question: question,
      answer: answer,
      color: color,
    });
    //reset the Form
    setQuestionPreview('');
    setQuestion('');
    setAnswer('');
    setShowModal(false);
  }
  return (
    <div className="container" onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleForm}>
        <input
          className="name"
          placeholder="What is the question Preview?"
          required
          onChange={(e) => setQuestionPreview(e.target.value)}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Type you question here.."
          className="message"
          required
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <textarea
          rows="4"
          cols="50"
          name="subject"
          placeholder="Type you answer here.."
          className="message"
          required
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
        <input
          name="submit"
          className="btn"
          type="submit"
          value="Add Question"
        />
      </form>
    </div>
  );
}

export default QuestionForm;
