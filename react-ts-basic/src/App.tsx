import CourseGoal from "./components/CourseGoal"; 
import goalsImg from './assets/goals.jpg';
import Header from "./components/Header";
import {useState} from "react";

type CourseGoalData = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalData[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoalData = {
        id: Math.random(),
        title: "Learn",
        description: "Learn in depth"
      };

      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
