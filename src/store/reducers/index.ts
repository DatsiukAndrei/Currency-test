import { combineReducers } from 'redux'
import { currencyReducer } from './currencyReducer'


export const rootReducers = combineReducers({
    currency: currencyReducer
})


export type RootState = ReturnType<typeof rootReducers>