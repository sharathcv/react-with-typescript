import CourseGoal from "./CourseGoal";
import CourseGoalData from "../App";

type CourseGoalListProp = {
    goals: CourseGoalData[];
  };

export default function CourseGoalList({goals}: CourseGoalListProp) {
    return (
        <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    );
}