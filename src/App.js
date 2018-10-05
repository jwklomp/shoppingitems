import React, {
  Component
} from 'react';
import './App.css';
import ShoppingList from "./components/ShoppingList"
import AddItem from "./components/AddItem"
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.onSubmit=this.onSubmit.bind(this);
  }

  makeItems = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        brand: "JW's",
        name: "product " + i
      })
    }

    this.setState({items: items});
  }

  componentDidMount() {
    this.makeItems();
  }

  onSubmit(item) {
    const newItems = this.state.items.concat(item);
    this.setState({items: newItems});   
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <div className="container">
            <div className="row">
              <article className="col-md-12">
                <h1 className="text-center">Simple List in React</h1>
                <h2 className="text-center">Adding a dynamically generated list item</h2>
                <div id="app" className="app-container">
                <AddItem onSubmit = {this.onSubmit} />
                <ShoppingList items = {this.state.items} name="Mirthe" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;