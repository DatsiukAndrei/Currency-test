import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CurrencyActionCreators  from '../store/action/currency'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CurrencyActionCreators,dispatch)
}