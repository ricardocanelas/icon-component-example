import Icon from './components/Icon'

const codeString = `<Icon name="Logo" color="red" />
<Icon name="Logo" color="blue" size={74} />
<hr />
<Icon name="ArrowRight" />
<Icon name="ArrowRight" color="blue" />
<Icon name="ArrowRight" color="white" fill="blue" />
<Icon name="ArrowRight" color="white" fill="blue" size={48} />
<Icon name="ArrowRight" color="white" fill="blue" direction="top" />
`

function App() {
  return (
    <div className="App">
      <div className="icons-section">
        <Icon name="Logo" color="red" />
        <Icon name="Logo" color="blue" size={74} />
        <hr />
        <Icon name="ArrowRight" />
        <Icon name="ArrowRight" color="blue" />
        <Icon name="ArrowRight" color="white" fill="blue" />
        <Icon name="ArrowRight" color="white" fill="blue" size={48} />
        <Icon name="ArrowRight" color="white" fill="blue" direction="top" />
      </div>
      <div className="code-section">
        <pre>{codeString}</pre>
      </div>
    </div>
  )
}

export default App
