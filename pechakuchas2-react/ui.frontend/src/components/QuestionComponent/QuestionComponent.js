import React, { Component } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import './QuestionComponent.css';

const QuestionComponentConfig = {
  emptyLabel: "Question Component",
  isEmpty: function (props) {
    return !props || !props.question;
  },
};

class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionId: null,
      isCorrect: null,
    };
  }

  handleOptionClick = (optionId) => {
    const { correctOptionId } = this.props;
    this.setState({
      selectedOptionId: optionId,
      isCorrect: optionId === correctOptionId,
    });
  };

  render() {
    const { title, optionsList, question, explanation } = this.props;
    const { selectedOptionId, isCorrect } = this.state;

    return (
      <div className="cmp-question">
        {title && <h2 className="cmp-question__title">{title}</h2>}
        {question && <p className="cmp-question__text">{question}</p>}
        
        {optionsList && optionsList.length > 0 && (
          <ul className="cmp-question__options-list">
            {optionsList.map((option) => (
              <li
                key={option.optionId}
                className={`cmp-question__option ${
                  selectedOptionId === option.optionId ? 
                  (isCorrect ? "cmp-question__option--correct" : "cmp-question__option--incorrect") : ""
                }`}
                onClick={() => this.handleOptionClick(option.optionId)}
              >
                {option.optionText}
              </li>
            ))}
          </ul>
        )}

        {selectedOptionId !== null && (
          <p className={`cmp-question__feedback ${isCorrect ? "correct" : "incorrect"}`}>
            {isCorrect ? "Correct!" : "Incorrect, try again."}
          </p>
        )}

        {explanation && isCorrect &&<p className="cmp-question__explanation">{explanation}</p>}
      </div>
    );
  }
}

export default MapTo("pechakuchas2-react/components/question")(
  QuestionComponent,
  QuestionComponentConfig
);
