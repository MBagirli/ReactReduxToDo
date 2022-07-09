import { createSlice, configureStore } from "@reduxjs/toolkit";

let initialState = { todo: [] };

let Todo = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    add(state, action) {
      state.todo.push(action.payload);
    },
    deleteAll(state) {
      state.todo = [];
    },
    delete(state, action) {
      state.todo.splice(action.payload, 1);
    },
  },
});

export let actions = Todo.actions;
export let store = configureStore({ reducer: { functionality: Todo.reducer } });
