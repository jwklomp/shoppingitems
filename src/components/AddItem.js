import React from 'react';

class AddItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            brand: "",
            name: ""
        };
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <p>Add a new item:</p>
                <form onSubmit={this.props.onSubmit({brand: this.state.brand, name: this.state.name})}>
                <label>
                    Brand:
                    <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange} />
                </label>
                <label>
                    name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
          );
    }
}

export default AddItem;