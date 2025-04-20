import { ReactNode, PropsWithChildren } from "react";

type CourseGoalProp = PropsWithChildren<{ // PropsWithChildren has chidren associated with the type by default
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

//export default function CourseGoal(props: ) { // instead of props we use destructuring as shown below
export default function CourseGoal({id, title, children, onDelete}: CourseGoalProps) { // instead of props we use destructuring as shown below

    return <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>   
            <button onClick={() => onDelete(id)}>Delete</button>         
        </article>

}