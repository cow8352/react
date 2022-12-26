import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
  //文字輸入框用↓
  const [inputValue, setInputValue] = useState('')
  //todo列表用↓
  //每個todo項目:ex.{id:number, text:string, completed: false}
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '買飲料', completed: false },
  ])

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          //按下enter產下ID
          if (e.key === 'Enter') {
            //先寫出要新增的物件值
            const newObj = {
              id: Number(new Date()),
              text: e.target.value,
              completed: false,
            }

            //1 //2 //3
            setTodos([newObj, ...todos])

            //清空文字輸入框
            setInputValue('')
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((v, i) => {
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'not-completed'}
            >
              <input
                type="checkbox"
                checked={v.completed}
                onClick={() => {
                  // 1. 從目前的狀態拷貝出一個新的變數(陣列/物件)
                  const newTodos = todos.map((v) => {
                    //物件的淺拷貝
                    return { ...v }
                  })
                  // 2. 在新的變數值(陣列/物件)上作處理
                  //toggle切換式的處理true變flase、false變true↓
                  newTodos[i].completed = !newTodos[i].completed
                  // 3. 設定回原本的狀態中
                  setTodos(newTodos)
                }}
              />

              {v.text}
              <button
                onClick={() => {
                  const newTodos = todos.filter((v2, i2) => {
                    // console.log(
                    //   '按下的項目id=',
                    //   v.id,
                    //   '迭代循環中比對用的id=',
                    //   v2.id
                    // )
                    return v.id !== v2.id
                  })
                  setTodos(newTodos)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default TodoApp
