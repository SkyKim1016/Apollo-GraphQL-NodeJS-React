import React from 'react';


class AddRecipe extends React.Component {
    state = {
        name : '',
        instructions : '',
        category : 'Breakfast',
        description:'',
        username:''
    };

    handleChange = event => {
        const {name, value} = event.target;
        console.log(name, ':', value);
        this.setState({
            [name] : value

        });
    }

    render(){
    const{name, category, description, instructions} = this.state;

    return (
        <div className="App"> 
            <h2 className="App">Add AddRecipe</h2>
            <form className="form">
                <input type="text" name="name" placeholder="Recipe Name" onChange={this.handleChange} value={instructions} />
                <select name="category" onChange={this.handleChange}>
                    <option value="Breakfast"> Breakfast </option>
                    <option value="Breakfast"> Lunch </option>
                    <option value="Breakfast"> Dinner </option>
                    <option value="Breakfast"> Snack </option>
                </select>
                <input type="text" name="description" placeholder="Add description" onChange={this.handleChange} />
                <textarea name="instructions" placeholder="Add Instructions" onChange={this.handleChange}></textarea>
                <button type="submit" className="button-primary"> Submit </button>
            </form>
        </div>
    )}
};

export default AddRecipe