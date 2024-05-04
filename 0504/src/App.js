import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchData } from "./stotre/modules/channelStore";
function App() {
  const dispatch = useDispatch()
  const { channel } = useSelector(state => state.channel)
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  return (
    <div className="App">
      {/* 使用dispatch获取数据 channel命名必须与store定义的一样 否则会找不到map */}
      <ul>{channel.map(item => (<li key={item.id}>{item.name}</li>))}</ul>
    </div>
  );
}


export default App;
