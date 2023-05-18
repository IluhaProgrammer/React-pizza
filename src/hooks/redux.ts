import { Dispath, RootState } from "../store/store";
import {useSelector, useDispatch} from 'react-redux'
import {TypedUseSelectorHook} from 'react-redux/es/types'

export const useAppDispatch = () => useDispatch<Dispath>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector