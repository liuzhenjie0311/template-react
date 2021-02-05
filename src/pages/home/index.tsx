import React,{useState, useRef, useReducer, useMemo, useCallback} from "react"
import Context from "../../utils/context"
import Title from '../title'
import useLoadData from "../../utils/store"
const Home = ()=>{
  const [num, setNum] = useState(0)
  const [count, setCount] = useState(1)
  const ref = useRef<any>()
  const [store, dispatch] = useLoadData()
  const add = () => {
    if(ref.current) return
    if(num+1 >= 10){
      ref.current = true
      setCount(2)
      dispatch({type:'changeNum',data: 100})
    }
    setNum(num+1)
  }
  const dbCount = useMemo(() => {
    // 返回值只有在绑定的值变更时，才会跟着变更
    console.log('%c tow * count==========','color:red',count)
    return 2*count
  },[count])
  const threeCount = useCallback(() => {
    // 虽然每次都会执行，但是返回值只有在绑定的值变更时，才会跟着变更
    console.log('%c three * count==========','color:red',count)
    return 3*count
  },[count])
  return (
    <Context.Provider value={num}>
      <div onClick={add}>{num}</div>
      <Title count={threeCount()}/>
      <div >{store.num}</div>
      <div>{dbCount}</div>
      <div>{threeCount()}</div>
    </Context.Provider>
  )
}
export default Home