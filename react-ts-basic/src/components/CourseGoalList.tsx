import CourseGoal from "./CourseGoal";
import CourseGoalData from "../App";
import InfoBox from "./InfoBox";
import ReactNode from "react";

type CourseGoalListProp = {
    goals: CourseGoalData[];
    onDeleteGoal: (id: number) => void;
  };

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProp) {
  if(goals.length ===0){
    return (
      <InfoBox mode="hint">
        You have no course goals yet, Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >=4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>  
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}