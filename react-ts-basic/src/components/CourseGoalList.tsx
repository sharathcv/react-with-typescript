import CourseGoal from "./CourseGoal";
import CourseGoalData from "../App";

type CourseGoalListProp = {
    goals: CourseGoalData[];
    onDeleteGoal: (id: number) => void;
  };

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProp) {
    return (
        <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    );
}