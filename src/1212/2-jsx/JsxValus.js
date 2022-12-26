function JsxVaule() {
  return (
    <>
      <h1>JSX中的值與表達式</h1>
      <hr />
      <h2>Number</h2>
      {123 - 99}
      {NaN}
      {'a' * 1}
      <h2>String</h2>
      {'abc'}
      {`total=${100 - 5}`}
      <h2>Boolean</h2>
      {/* 布林值不會呈現 */}
      {true}
      {false}
      {1 > 0}
      <h2>null</h2>
      {/* 不會被呈現、渲染 */}
      {null}
      <h2>underfined</h2>
      {/* 不會被呈現、渲染 */}
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 'a']}
      <h2>Object</h2>
      {/* 不能直接放(可當作屬性值)，會造成中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {/* 不會被呈現、渲染 */}
      {() => {}}
      {console.log(1)}
    </>
  )
}

export default JsxVaule
