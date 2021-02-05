import React,{useState, useRef, useContext, useEffect} from "react"
import Context from "../../utils/context"


const Title = (props:{count: number})=>{
  useEffect(() => {
    console.log('count更新了')
  },[props.count])
  const num = useContext(Context)
  return (
    <div>{num}</div>
  )
}

export default Title