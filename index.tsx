import React from "react";

import { securityQuestions } from "./securityQuestions";

export const SecurityQuestionsDropdown = () => {
  <div>
    <label htmlFor="securityQuestions">Security Questions</label>
    <select id="securityQuestions">
      {securityQuestions.map((question) => (
        <option key={question.id} value={question.id}>
          {question.question}
        </option>
      ))}
    </select>
  </div>;
};
