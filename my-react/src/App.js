import "./App.css";
import students_data from "./models/models";
import Score from "./components/Score";
import Student from "./components/Student";
import { useState } from "react";

function App() {
  const [studentData, setStudentData] = useState(students_data);
  return (
    <>
      {studentData.map((e) => {
        return [
          <Student name={e.name} bio={e.bio} />,
          <Score
            score1={e.scores[0].score}
            date1={e.scores[0].date}
            score2={e.scores[1].score}
            date2={e.scores[1].date}
            score3={e.scores[2].score}
            date3={e.scores[2].date}
          />,
        ];
      })}
    </>
  );
}

export default App;

// {studentData.map((e) => {
//   return (
//     <Score
//       score1={e.scores[0].score}
//       date1={e.scores[0].date}
//       score2={e.scores[1].score}
//       date2={e.scores[1].date}
//       score3={e.scores[2].score}
//       date3={e.scores[2].date}
//     />
//   );
// })}
