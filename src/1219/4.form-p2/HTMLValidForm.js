import { useState } from 'react'
import './HTMLValidForm.css'

function HTMLValidForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  //紀錄每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)

    //計算得來的值
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }
  const handleFromSubmit = (e) => {
    //擋住表單預設送出行為
    e.preventDefault()

    //得到值的方式
    //1.有綁定到state中時，直接用state中的值
    console.log(user)
    //2.送出時才得到表單中各填入值，用FormData
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )
    // 作其它驗証…修改/整合資料

    // 送到伺服器
  }
  const handleFromInvalid = (e) => {
    // 擋住預設行為 - 泡泡錯誤訊息
    e.preventDefault()

    // console.log(e.target.name, e.target.validationMessage)
    //紀錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  //當使用者回頭修正欄位時，要把表單的錯誤訊息清空
  const handleFromChange = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  return (
    <>
      <h1>表單驗證</h1>
      <form
        onSubmit={handleFromSubmit}
        onInvalid={handleFromInvalid}
        onChange={handleFromChange}
      >
        <label>帳號</label>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.username}</span>
        <br />
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <span className="error">{fieldErrors.email}</span>
        <br />
        <label>密碼</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleFieldChange}
          required
          minLength={6}
          maxLength={10}
        />
        <span className="error">{fieldErrors.password}</span>
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTMLValidForm
