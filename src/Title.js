import React from 'react'
import './Title.css';

export const Title = ({title}) => { //export const Title = (props)
  return (
    <header id='header-container'>
        <h1 className='title-h1'>{title}</h1> {/*  <h1 className='title-h1'>{props.title}</h1>*/}
    </header>
  )
}
Title.defaultProps ={
  title: "To Do List"
}
export default Title;