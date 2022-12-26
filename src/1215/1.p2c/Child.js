function Child({ text = '', color = 'black', price = 0 }) {
  // ↑屬性預設值
  //   const { text, color, price } = props
  //   console.log(props)

  return (
    <>
      {/* 螢幕畫面上的呈現 */}
      <h1>child</h1>
      <p>{text}</p>
      <p>{color}</p>
      <p>{price}</p>
    </>
  )
}
export default Child
