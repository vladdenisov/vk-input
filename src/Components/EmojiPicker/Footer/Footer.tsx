import React from 'react'
import './Footer.scss'

function PickerFooter(props: {
  activeTab: number
  setTab: (tab: number) => void
  tabs: Array<{
    icon: JSX.Element
    title: string
  }>
}) {
  return (
    <div className={'picker-footer'}>
      <ul className={'picker-footer--list'}>
        {/*Render tabs menu*/}
        {props.tabs.map((tab, index) => (
          <li
            className={`picker-footer--list---tab ${
              index === props.activeTab ? 'active' : null
            }`}
            key={index}
          >
            <button
              className={'picker-footer--list---tab_button'}
              aria-label={tab.title}
              onClick={(ev) => {
                props.setTab(index)
              }}
            >
              {tab.icon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PickerFooter
