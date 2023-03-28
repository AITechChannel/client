import themeSlice from './common/themeSlice';
import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from '../features/dashboard/redux/slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import myNoteSlice from '@/features/notes/redux/slice';
import { rootSaga } from './rootSaga';
import authSlice from './common/authSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
    theme: themeSlice,
    myNote: myNoteSlice,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
