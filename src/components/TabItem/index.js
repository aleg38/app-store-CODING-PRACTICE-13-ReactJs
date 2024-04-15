// Write your code here

import './index.css'

const TabItem = props => {
  const {tabListDetails, onClickMethod, isActive} = props

  const {tabId, displayText} = tabListDetails

  const onClickTabItem = () => {
    onClickMethod(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tabs-list">
      <button
        type="button"
        className={`button ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
