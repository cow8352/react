import { useState, useEffect } from 'react'

// 需先安裝yarn add axios
import axios from 'axios'
import './User.scss'

function User() {
  //陣列中物件的樣貌
  //ex{"id": "107001","name": "張佳蓉","age": "22"}
  const [users, setUsers] = useState([])

  //載入資料指示用,
  const [isLoading, setIsLoading] = useState(false)

  const getUsers = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    console.log(response)

    // 設定到state中
    setUsers(response.data)
  }

  //didMount時與伺服器需求資料
  useEffect(() => {
    //先開啟載入資料指示器
    setIsLoading(true)

    getUsers()

    //2秒後關起載入資料指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  )

  const display = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>年紀</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.age}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>會員資料</h1>
      <div>{isLoading ? spinner : display}</div>
    </>
  )
}
export default User
