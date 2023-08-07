import React from "react";
import students_data from "../models/models";
import Score from "./Score";
import { useState } from "react";
function Student(props) {
  // const [studentData, setStudentData] = useState(students_data);
  return (
    <>
      <h1> Student name:{props.name}</h1>
      <p>Bio:{props.bio}</p>
    </>
  );
}

export default Student;
