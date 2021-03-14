import { CurrencyState, CurrencyActionType, CurrencyAction } from '../../types/currency'

const initialState: CurrencyState = {
    currency: [],
    loading: false,
    error: null
}

export const currencyReducer = (state = initialState, action: CurrencyAction): CurrencyState => {
    switch (action.type) {
        case CurrencyActionType.FETCH_CURRENCY:
            return {
                loading: true,
                error: null,
                currency: []
            }
        case CurrencyActionType.FETCH_CURRENCY_SUCCESS:
            return {
                loading: false,
                error: null,
                currency: action.payload
            }
        case CurrencyActionType.FETCH_CURRENCY_ERROR:
            return {
                loading: false,
                error: action.payload,
                currency: []
            }
        case CurrencyActionType.DELETE_CURRENCY_NOTE:
            return {
                ...state, currency: state.currency.filter((row) => row.r030 !== action.payload)
            }
        case CurrencyActionType.SEARCH_CURRENCY_NOTE:
            return {
                ...state, currency: state.currency.filter((row) =>row.rate.toString().includes(action.payload))
            }
        default:
            return state
    }
}
