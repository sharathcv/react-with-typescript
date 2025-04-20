import CourseGoalList from "./components/CourseGoalList"; 
import NewGoal from "./components/NewGoal";
import goalsImg from './assets/goals.jpg';
import Header from "./components/Header";
import {useState} from "react";

export type CourseGoalData = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalData[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoalData = {
        id: Math.random(),
        title: goal,
        description: summary
      };

      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}>
      </NewGoal>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}>
      </CourseGoalList>
    </main>
  );
}
