//组件通信

import { createContext, useContext, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, descrement, atn } from "./store/modules/counterStore"
import { fetchData } from "./store/modules/channleStore"
//组件之间通信  使用状体提升 即通过同样的父组件进行通信
//父组件传递子组件  使用props
function Son(props) {
  return (<div>this is son,{props.testname} </div>)
}

//子传父 使用函数传递  并且使用状态来刷新父组件
function Msgon({ onMsgbuto }) {
  const msg = 'this son transport'
  return (<div>
    <button onClick={() => onMsgbuto(msg)}>send
    </button></div>)
}

//context
const MsgContext = createContext()
function B() {
  const msg = useContext(MsgContext)
  return (<div>this B com,{msg}</div>)
}
function A() {
  return (
    <div>this A com,<B></B></div>
  )
}

const Url = 'http://geek.itheima.net/v1_0/channels'
export default function App() {
  const name = "this is app"
  const [msg, setMsg] = useState('')
  const onMsg = (msg) => {
    setMsg(msg)
  }
  const conMsg = 'this app transprt'
  const [list, setList] = useState([])
  // useEffect(() => {
  //   async function getList() {
  //     const res = await fetch(Url)
  //     const jsonres = await res.json()
  //     // console.log(list)
  //     setList(jsonres.data.channels)
  //   }
  //   getList()
  // }, [])
  //useEffort 异步请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  //reducer
  const { count } = useSelector(state => state.counter)
  const { channel } = useSelector((state) => state.channel)



  // if (!Array.isArray(channels)) {
  //   console.log('data is not an array');
  // }

  return (
    <div>
      this is app,{msg}
      <Msgon onMsgbuto={onMsg} />
      <Son testname={name} />
      {/* //跨层通信 */}
      <br></br>
      <MsgContext.Provider value={conMsg}>
        this app com,
        <A></A>
      </MsgContext.Provider>

      <br></br>
      {/* useEffort */}
      <ul>{list.map(item => (<li key={item.id}>{item.name}</li>))}</ul>
      <br></br>
      {/* reducer */}
      <button onClick={() => dispatch(descrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(atn(10))}>add10</button>
      <button onClick={() => dispatch(atn(20))}>add20</button>
      <br></br>
      channle reducer

      <ul>{channel.map(item => (<li key={item.id}>{item.name}</li>))}</ul>
      <ul>{channel.map(item => (<li key={item.id}>{item.name}</li>))}</ul>
    </div >
    //自定义hook


  )
}
