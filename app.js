import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', wordsList: []}

  one = event => {
    this.setState({searchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addedItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state
    return (
      <div className="main-container">
        <div className="container-1">
          <h1 className="heading">Count the characters like a Boss</h1>

          <div className="container">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-element">
                      {each.item}: {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="container-2">
          <h1 className="header">Character Counter</h1>
          <div className="kr">
            <form onSubmit={this.start}>
              <div className="input-container">
                <input
                  type="text"
                  className="inputName"
                  placeholder="Enter the Characters here"
                  onChange={this.one}
                  value={searchInput}
                />
                <button
                  className="add-button"
                  type="submit"
                  onClick={this.start}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App









  * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
  padding: 40px;
}
.container-1 {
  background-color: #ffc533;
  height: 70vh;
  overflow: hidden;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.heading {
  color: #334155;
  font-size: 32px;
  font-family: 'Roboto';
  max-width: 400px;
}

.image {
  height: 150px;
  width: 150px;
}
.container {
  background-color: #ffbf1f;
  padding: 20px;
}
.container-2 {
  background-color: #0f172a;
  min-height: 70vh;
  width: 50%;
  display: flex;
  flex-direction: column;

  padding: 20px;
}
.header {
  color: #ffbf1f;
  font-size: 32px;
  font-family: 'Roboto';
  text-align: center;
}
.add-button {
  border: none;
  outline: none;
  color: #272c47;
  padding: 12px;
  border-radius: 3px;
  font-family: 'Roboto';
}
.inputName {
  padding: 8px;
  margin-right: 20px;
  width: 200px;
}
.kr {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list-container {
  list-style-type: none;
}
.list-element {
  color: #0f172a;
  font-family: 'Roboto';
  font-size: 23px;
}

