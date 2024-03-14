const Content = (parts) => {
    const courses = parts.course.map((part) => {
        return(<div key={part.id}>
            <p>{part.name} {part.exercises}</p>
        </div>)
    })
    
    return (
        <div>
            {courses}
        </div>

    )
}

export default Content