import {combineEpics} from 'redux-observable';

import HomeEpics from './routes/HomeRoute/epics';


/**
 * Combines all the epics together, using the method provided by redux-observable.
 */
const epics = combineEpics(
    HomeEpics,
);

export default epics;
