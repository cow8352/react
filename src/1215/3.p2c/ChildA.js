function ChildA(props) {
  return (
    <>
      {/* 螢幕畫面上的呈現 */}
      <h1>childA</h1>
      <p>來自子女B元件的資料{props.dataFromChild}</p>
    </>
  )
}
export default ChildA
