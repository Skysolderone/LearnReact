//项目根组件
//子组件保证函数首字母大写即为组件 无论形式是function 还是const
import {useState} from 'react';
const list = [
  {
    id: 1001,
    name: 'vue',
  },
  {
    id: 1002,
    name: 'react',
  },
  {
    id: 1003,
    name: 'angluar',
  },
];
const isLogin = true;
const Button2=()=>{
  return <button>this a test component2</button>
}
function Button(){
  return <button>this a test component</button>
}

function App() {
  const handleFunc=()=>{
    alert("!!!!!!")
    console.log("111")
  }
 
  const [count,setCount]=useState(0)
  const callback=()=>{
    return setCount(count+1)
  }
  let [form,setForm]=useState({name:'jack'})
  const callback2=()=>{
   setForm({
      ...form,
      name:'wws'
    })
  }
  return (
    <div className="App">
      this is app
      <ul>
        {list.map((itme) => (
          <li key={itme.id}>{itme.name}</li>
        ))}
      </ul>
      {/* {isLogin && <span>this is login</span>}
      {isLogin ? <span>this is login</span> : <span>this not login</span>} */}
      {<button onClick={handleFunc}>click me</button>}

      <Button/>
      <Button></Button>
      <Button2/>
      <br></br>

      <button style={{width:300,height:300}} onClick={callback}>{count}</button>
    <br></br>
    <button onClick={callback2}>form:{form.name}</button>
    
    </div>
  );
}

export default App;
