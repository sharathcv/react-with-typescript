import { ReactNode } from "react";

interface CourseGoalProps { // we can make it a type as well like type CourseGoalProps = { // fields }
    title: string;
    children: ReactNode;
};

//export default function CourseGoal(props: ) { // instead of props we use destructuring as shown below
export default function CourseGoal({title, children}: CourseGoalProps) { // instead of props we use destructuring as shown below

    return <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>   
            <button>Delete</button>         
        </article>

}