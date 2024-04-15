// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="applications">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-category">{appName}</p>
    </li>
  )
}
export default AppItem
