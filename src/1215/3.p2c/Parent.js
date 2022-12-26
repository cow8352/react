import { useState } from 'react'

import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  //↓專門給子女B回傳資料用(觸發事件後回傳資料)
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <p>來自子女B元件的資料: {dataFromChild}</p>
      <hr />
      {/* 設定屬性跟子層連結 */}
      <ChildA dataFromChild={dataFromChild} />
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
export default Parent
