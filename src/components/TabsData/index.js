import {Component} from 'react'
import GreetingData from '../GreetingData'

class TabsData extends Component {
  render() {
    const {activeId, activeTabs, langData} = this.props

    const changeTabs = () => {
      activeTabs(langData.buttonText)
    }

    const isActive = activeId === langData.buttonText ? 'btn active' : 'btn'

    return (
      <li className="btn-container">
        <button type="button" className={isActive} onClick={changeTabs}>
          {langData.buttonText}
        </button>
      </li>
    )
  }
}

export default TabsData
