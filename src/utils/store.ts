import { useReducer, Reducer, Dispatch } from "react"
import {Store, Action} from "./store.d"
const store = {
  num: undefined
}
const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case "changeNum":
      return {
        ...state,
        num: action.data
      }
    default:
      return {
        ...state
      }
  }
}
function useLoadData():[Store,Dispatch<Action>]{
  const [state, dispatch] = useReducer<Reducer<Store,Action>>(reducer, store)
  
  return [state, dispatch]
}

export default useLoadData