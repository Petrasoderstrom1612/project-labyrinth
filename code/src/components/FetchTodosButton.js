import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from 'reducers/todos'

const GameStartButton = () => {
  const dispatch = useDispatch()
  return (
    <button type="button" onClick={() => dispatch(fetchTodos())}>GameStartButton</button>
  )
}

export default GameStartButton