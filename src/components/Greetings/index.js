import {Component} from 'react'
import GreetingData from '../GreetingData'
import './index.css'
import TabsData from '../TabsData'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeId: languageGreetingsList[0].buttonText,
  }

  activeTabs = tabs => {
    this.setState({activeId: tabs})
  }

  activeImage = () => {
    const {activeId} = this.state
    const filteredData = languageGreetingsList.filter(
      item => item.buttonText === activeId,
    )
    return filteredData
  }

  render() {
    const {activeId} = this.state
    const getActiveData = this.activeImage()

    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(item => (
            <TabsData
              langData={item}
              key={item.id}
              activeId={activeId}
              activeTabs={this.activeTabs}
            />
          ))}
        </ul>
        <ul>
          {getActiveData.map(item => (
            <GreetingData item={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Greetings
