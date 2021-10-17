import { combineEpics } from 'redux-observable';
import { rootEpics } from 'reduxCore/root/epic';

export const rootEpic = combineEpics(rootEpics);
