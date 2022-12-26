import React, { Component } from 'react'

class CC extends Component {
  constructor(props) {
    super()
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('didMount')
  }

  componentDidUpdate(prevProps, prevState) {
    //更新後最新的值
    console.log(
      'didUpdate',
      '更新前的total=',
      prevState.total,
      '更新後(目前的)total=',
      this.state.total
    )
  }
  //cleaner
  componentWillUnmount(){
    console.log('WillUnmount')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>類比型元件</h1>
        {/* 一定是物件型元件 */}
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
