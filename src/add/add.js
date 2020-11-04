import React from "react";
import './add.css';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                age: '',

        };

    }
    handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        if(e.target.name.value === '') {
            return false;
        } else {
            this.props.AddItem(this.state);
            this.setState({
                name: '',
                age:''
            })
        }

    };



    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input  type='text' id='name' placeholder='input name...' value={this.state.name} onChange={this.handleChange} required/>
                    <input  type='number' id='age' placeholder='input age...' value={this.state.age} onChange={this.handleChange} required/>
                    <input  type='submit' value='Add' />
                </form>
            </div>
        )
    }
}
export default AddItem;