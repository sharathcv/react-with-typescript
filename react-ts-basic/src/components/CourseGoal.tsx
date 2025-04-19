
//export default function CourseGoal(props: ) { // instead of props we use destructuring as shown below
export default function CourseGoal({
    title,
    description
}: {
    title: string;
    description: string
}) { // instead of props we use destructuring as shown below

    return <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>   
            <button>Delete</button>         
        </article>

}