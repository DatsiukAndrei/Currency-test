export interface CurrencyState{
    currency:any[],
    loading:boolean,
    error:null | string
}
export enum CurrencyActionType{
    FETCH_CURRENCY = "FETCH_CURRENCY",
    FETCH_CURRENCY_SUCCESS = "FETCH_CURRENCY_SUCCESS",
    FETCH_CURRENCY_ERROR = "FETCH_CURRENCY_ERROR",
    DELETE_CURRENCY_NOTE = "DELETE_CURRENCY_NOTE",
    SEARCH_CURRENCY_NOTE ="SEARCH_CURRENCY_NOTE"
}
interface FetchCurrencyAction {
    type:CurrencyActionType.FETCH_CURRENCY
}
interface FetchCurrencySuccessrAction {
    type:CurrencyActionType.FETCH_CURRENCY_SUCCESS,
    payload:any[]
}
interface FetchCurrrencyErrorAction {
    type:CurrencyActionType.FETCH_CURRENCY_ERROR,
    payload:string
}
interface DeleteCurrencyNote {
    type:CurrencyActionType.DELETE_CURRENCY_NOTE,
    payload:number
}

interface SearchCurrencyNote {
    type:CurrencyActionType.SEARCH_CURRENCY_NOTE,
    payload:number
}
export type CurrencyAction = FetchCurrencyAction | FetchCurrencySuccessrAction | FetchCurrrencyErrorAction | DeleteCurrencyNote | SearchCurrencyNote