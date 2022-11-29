const GreetingData = props => {
  const {item} = props
  return (
    <li>
      <img src={item.imageUrl} alt={item.imageAltText} className="lang-img" />
    </li>
  )
}

export default GreetingData
