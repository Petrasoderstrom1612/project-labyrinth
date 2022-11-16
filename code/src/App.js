import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';
import { todos } from 'reducers/todos';
import Todolist from 'components/TodoList';
import LoadingIndicator from 'components/LoadingIndicator';
import FetchTodosButton from 'components/FetchTodosButton'

export const App = () => {
  const reducer = combineReducers({
    ui: ui.reducer,
    todos: todos.reducer
  });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <LoadingIndicator />
      <Todolist />
      <FetchTodosButton />
    </Provider>
  )
}

/* http://api.quotable.io/random */
