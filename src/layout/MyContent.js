function MainContent(props) {
  return (
    <main role="main">
      <div className="container h-500 bg-info">{props.children}</div>
    </main>
  )
}

export default MainContent
