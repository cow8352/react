import { useEffect, useState } from 'react'

function ChildB(props) {
  console.log(props)
  const [cData, setCData] = useState('子女B元件內部的資料')
  //回傳cData給parent

  //自動往父母元件傳
  useEffect(() => {
    props.setDataFromChild(cData)
  }, [cData])
  //↑有變化就回傳資料(新手尾端程度)

  return (
    <>
      <h1>childB</h1>
      <button
        onClick={() => {
          setCData('9999')
        }}
      >
        cData change to 9999
      </button>
      <button
        onClick={() => {
          setCData('abcd')
        }}
      >
        cData change to abcd
      </button>

      {/* 手動觸發按鈕事件後，回傳到父母元件 */}
      {/* <button
        onClick={() => {
          props.setDataFromChild(cData)
        }}
      >
        傳回內部資料到父母元件
      </button> */}
    </>
  )
}
export default ChildB
