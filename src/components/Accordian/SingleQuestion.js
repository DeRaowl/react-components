import React from "react";

function SingleQuestion({ question, answer }) {
  const [showBody, setShowBody] = React.useState(false);
  return (
    <article className="accordian-wrapper">
      <div className="accordian-header">
        <h2>{question}</h2>
        <button onClick={() => setShowBody(!showBody)}>+</button>
      </div>
      <div className="accordian-body">{showBody ? <p>{answer}</p> : null}</div>
    </article>
  );
}

export default SingleQuestion;
