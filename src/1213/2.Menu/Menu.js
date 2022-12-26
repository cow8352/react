import { useState } from 'react'
import './Menu.css'
//先設定useState

function Menu() {
  //點首頁變首頁，點產品變產品
  const [text, setText] = useState('')
  //先排成陣列
  const menuItems = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li key={i}>
              <a
                className={text === v ? 'active' : ''}
                // 用三元判斷 是->'active' 不是-> 空字串
                href="#/"
                onClick={() => {
                  setText(v)
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
        {/* <li>
          <a
            className={text === '首頁' ? 'active' : ''}
            href="#/"
            onClick={() => {
              setText('首頁')
            }}
          >
            首頁
          </a>
        </li>
        <li>
          <a
            className={text === '關於我們' ? 'active' : ''}
            href="#/"
            onClick={() => {
              setText('關於我們')
            }}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            className={text === '產品' ? 'active' : ''}
            href="#/"
            onClick={() => {
              setText('產品')
            }}
          >
            產品
          </a>
        </li> */}
      </ul>
    </>
  )
}

export default Menu
