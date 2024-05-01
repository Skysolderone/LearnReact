// import { useState } from "react";

// const list = [
//     {
//         id: 1, //uuid
//         content: '05011',
//         time: '', //dayjs 格式化
//     },
//     {
//         id: 2,
//         content: '05012',
//         time: '',
//     },
// ];
// export default function TEWTW() {
//     const [commentList, setCommentList] = useState(list)
//     const [value, setValue] = useState('')
//     const handliePublish = () => {
//         setCommentList([...commentList, {
//             id: 3,
//             content: value,
//             time: '',
//         }])
//     }
//     return (
//         <div>
//             <input value={value}
//                 onChange={e => setValue(e.target.value)}
//             ></input>
//             <button onClick={handliePublish}>Publish</button>
//             <br></br>
//             <ul>
//                 {commentList.map(item => (<li key={item.id}>{item.content}</li>))}
//             </ul>
//         </div>
//     )


// }