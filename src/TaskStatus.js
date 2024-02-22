import React from 'react'
import { TaskDone } from './TaskDone';
import { TaskPending } from './TaskPending';

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
