//表单绑定
import { useState } from 'react';
// const shwoDom = (inputref) => {
//   console.log(inputref.current);
// };

//简单评论
const list = [
  {
    id: 1, //uuid
    content: 'content1',
    time: '', //dayjs 格式化  
  },
  {
    id: 2,
    content: 'contnet2',
    time: '',
  },
];

function App() {
  const [commentList, setCommentList] = useState(list);
  const [count, setConuet] = useState(0);
  // const [value, setValue] = useState('');
  //获取dom元素
  // const inputref = useRef(null);

  const [content, setContent] = useState('');
  const handlePublish = () => {
    // const ls = {
    //   id: 3,
    //   content: content,
    //   time: '',
    // }
    // commentList.push(ls)
    // setCommentList(commentList)
    // const js = commentList.slice()
    // const ks = [...js, { id: 3, content: content, time: '' }]
    // setCommentList(ks)
    setCommentList([
      ...commentList,
      {
        id: 3,
        content: content,
        time: '',
      },
    ]);
    // console.log(commentList)
  };
  // const deleteItem = (id) => {
  //   console.log(id)
  //   setCommentList(commentList.filter(item => item.id !== 1))
  // }
  const NumAdd = () => {
    setConuet(count + 1)
  }
  // const [commentlis,setValue]=useState(liust)
  return (
    <div className="App">
      {/* <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="txt"
        ref={inputref}
      /> */}

      {/* <button onClick={shwoDom(inputref)}>get dom</button> */}
      {/* <br></br> */}
      <input
        // type="txt"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button onClick={handlePublish}>Publish</button>
      <ul>
        {commentList.map((item) => (
          <li key={item.id}>{item.content}
            {/* <button onClick={() => deleteItem(item.id)}>del</button> */}
          </li>

        ))
        }

      </ul>
      <br></br>
      <button onClick={NumAdd}>{count}</button>
    </div>
  );
}

export default App

// function createInitialTodos() {
//   const initialTodos = [];
//   for (let i = 0; i < 50; i++) {
//     initialTodos.push({
//       id: i,
//       text: 'Item ' + (i + 1)
//     });
//   }
//   return initialTodos;
// }

// export default function TodoList() {
//   const [todos, setTodos] = useState(createInitialTodos);
//   const [text, setText] = useState('');

//   return (
//     <>
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button onClick={() => {
//         setText('');
//         setTodos([{
//           id: todos.length,
//           text: text
//         }, ...todos]);
//       }}>Add</button>
//       <ul>
//         {todos.map(item => (
//           <li key={item.id}>
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
