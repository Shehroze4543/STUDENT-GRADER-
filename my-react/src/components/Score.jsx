import React from "react";
import students_data from "../models/models";
function Score(props) {
  return (
    <>
      <div className="main-container">
        <div className="heading">
          <div className="column-1 heading-1">
            <strong>Student's Score</strong>
          </div>
          <div className="column-2">
            <strong>Date </strong>
          </div>
        </div>
        <div className="data-colum-1-div heading">
          <div className="column-1">{props.score1}</div>
          <div className="colum-2">{props.date1}</div>
        </div>
        <div className="data-colum-1-div heading">
          <div className="column-1">{props.score2}</div>
          <div className="colum-2">{props.date2}</div>
        </div>
        <div className="data-colum-1-div heading">
          <div className="column-1">{props.score3}</div>
          <div className="colum-2">{props.date3}</div>
        </div>
      </div>
    </>
  );
}

export default Score;
