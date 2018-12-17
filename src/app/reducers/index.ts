import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { State } from './feedstate';

export const reducers: ActionReducerMap<State> = {
  items =[];
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
