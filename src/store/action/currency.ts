import axios from 'axios'
import { CurrencyActionType, CurrencyAction } from '../../types/currency';
import { Dispatch } from 'redux'


export const fetchUsers = () => {
    return async (dispatch: Dispatch<CurrencyAction>) => {
        try {

            dispatch({ type: CurrencyActionType.FETCH_CURRENCY })
            const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            dispatch({ type: CurrencyActionType.FETCH_CURRENCY_SUCCESS, payload: response.data })
        }
        catch (error) {
            dispatch({ type: CurrencyActionType.FETCH_CURRENCY_ERROR, payload: 'You got an error' })
        }
    }
}
export const deleteCurrencyNote = (key: number) => {
    return (dispatch: Dispatch<CurrencyAction>) => {
        dispatch({
            type: CurrencyActionType.DELETE_CURRENCY_NOTE,
            payload: key
        })
    }
}

export const searchCurrencyNote = (value: string) => {
    return (dispatch: Dispatch<CurrencyAction>) => {
        dispatch({
            type: CurrencyActionType.SEARCH_CURRENCY_NOTE,
            payload: Number(value)
        })
    }
}