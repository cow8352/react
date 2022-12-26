function MyButton(props) {
  const { setTotal, total, value } = props
  console.log(props)
  return (
    <>
      <button
        onClick={() => {
          setTotal(total + value)
        }}
      >
        {value > 0 ? '+' : ''} {value}
      </button>
    </>
  )
}
export default MyButton
