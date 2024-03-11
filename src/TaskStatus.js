import React from 'react'

const TaskPending = () => {
    return (
      <span className="mx-2 d-flex"  style={{alignItems:"center",height:"auto"}}>
          <p style={{alignItems:"center",height:"auto"}}>Task is Pending.</p>
      </span>
    )
}
const TaskDone = () => {
    return (
        <span className="mx-2 d-flex"  style={{alignItems:"center",height:"auto"}}>
            <p style={{alignItems:"center",height:"auto"}}>Task is Completed.</p>
        </span>
    )
}
export const TaskStatus = (props) => {
    const ts = props.taskStatus;
    if (ts) {
        return (
            <TaskDone />
        )
    } else {
        return (
            <TaskPending />
        )
    }
}
