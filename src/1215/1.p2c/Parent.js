import Child from './Child'

function Parent() {
  return (
    <>
      {/* 設定屬性跟子層連結 */}
      <Child text="今天下雨" color="red" price={1234} />
    </>
  )
}
export default Parent
