const Content = (parts) => {
    const courses = parts.course.map((part) => {
        return(<div key={part.id}>
            <p>{part.name} {part.exercises}</p>
        </div>)
    })
    const totalExercises = parts.course.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            {courses}
            <p><strong>Total exercises: {totalExercises}</strong></p>
        </div>

    )
}

export default Content