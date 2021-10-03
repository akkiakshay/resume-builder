import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './redux/sidebarSlice';
import personalReducer from './redux/personalSlice';
import profileReducer from './redux/profileSlice';
import educationReducer from './redux/educationSlice';
import experienceReducer from './redux/experienceSlice';
import skillsReducer from './redux/skillsSlice';
import { combineReducers } from 'redux';
const combinedReducer = combineReducers({
  navigation: navigationReducer,
  personal: personalReducer,
  profile: profileReducer,
  education: educationReducer,
  experience: experienceReducer,
  skills: skillsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'navigation/reset') { // check for action type 
    state = undefined;
  }
  return combinedReducer(state, action);
};


export const store = configureStore({
  reducer: rootReducer
});
