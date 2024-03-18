import { v4 as uuidV4 } from "uuid";
export const ADD_BTN = "ADD_BTN"
export const REMOVE_BTN = "REMOVE_BTN"
export const RESET = "RESET"

export const initialState = [];


export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_BTN:
            if (!action.taskData.title.trim()) {
                return state;
            }
            const newTask = { id: uuidV4(), title: action.taskData.title, priority: action.taskData.priority }
            const newState = [newTask, ...state]
            return newState

        case REMOVE_BTN:
            return state.filter(item => item.id !== action.payload);
        case RESET:
            return initialState
        default:
            return state
    }
}
