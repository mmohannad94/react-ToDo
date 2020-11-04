import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItems from "./todoitems/todoitems";
import AddItem from "./add/add";
import './index.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id:1, name:'mohannad', age:26},
                {id:2, name:'ali', age:20},
                {id:3, name:'albraa', age:22}
            ]
        }
    }
    DeleteItem = (id) => {
        let {items} = this.state;
        // let items = this.state.items.filter(item => {
        //     return item.id !== id;
        // });
        // or
        let i = items.findIndex(item => item.id === id);
        items.splice(i,1);

        this.setState({items});
    };
    AddItem = (item) => {
        item.id = Math.random();
        let {items} = this.state;
        items.push(item);
        this.setState({items});
    };
    render() {

        return(
            <div className='app container'>
                <h1 className='textCenter'>ToDo List</h1>
                <ToDoItems items={this.state.items} DeleteItem={this.DeleteItem}/>
                <AddItem AddItem={this.AddItem}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));