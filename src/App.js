import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItems: {
        text: "",
        key: ""
      }
    }
    this.inputHandler = this.inputHandler.bind(this)
    this.addInputHandler = this.addInputHandler.bind(this)
    this.deleteItemsHandler = this.deleteItemsHandler.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }

  inputHandler(e) {
    this.setState({
      currentItems: {
      text: e.target.value,
      key: Date.now()
      }
    })
  }

  addInputHandler(e) {
    e.preventDefault();
    const newItem = this.state.currentItems;
    console.log(newItem)
    if(newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: {
          text: "",
          key: ""
        }
      })
    }
  }
deleteItemsHandler(key) {
  const filteredItems = this.state.items.filter(item => 
    item.key !== key);
    this.setState({
      items: filteredItems
    })
}

setUpdate(text, key) {
  const items = this.state.items;
  items.map(item => {
    if(item.key === key) {
      item.text = text;
    }
  })
  this.setState({
    items:items
  })
}

  render() {
    return (
      <div className="App">
      <form id="form-todo" onSubmit={this.addInputHandler}>
        <input type="text" 
        placeholder="Enter your task"
        value={this.state.currentItems.text}
        onChange={this.inputHandler} />
        <button type="submit" id="btn">Add</button>
      </form>
      <ListItem 
      items={this.state.items}
      deleteItems={this.deleteItemsHandler}
      setUpdate={this.setUpdate} />
    </div>
    );
  }
}

export default App;
