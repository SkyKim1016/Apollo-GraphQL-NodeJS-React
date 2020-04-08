import React from 'react';
import { withRouter } from 'react-router-dom';

import {Mutation} from 'react-apollo';
import Error from "../Error"
import { SIGNIN_USER } from '../../queries';

const initialState = {
    username: "",
    password : "",
}

class Signin extends React.Component {
    state = {...initialState}

    handleChange = event => {
        const { name, value } = event.target;  
        this.setState({ [name] : value })
    }

    clearState = () => {
        this.setState({ ...initialState })
    }

    handleSubmit = (event, signinUser) => {
        event.preventDefault();
        signinUser().then( async({data}) => {
            console.log(data);
            localStorage.setItem('token', data.signinUser.token   )
            await this.props.React
            this.clearState();
            this.props.history.push('/');
        }); 
    }

    validateForm = () => {
        const { username,password } = this.state;
        const isInvalid = !username || !password ;
        console.log(isInvalid)
        return isInvalid;
      };

    render(){
       const { username, password } = this.state;

        return(
            <div className="App">
                <h2 className="App">Signin</h2>
                <Mutation mutation={SIGNIN_USER} variables={{username, password}} >
                    { (signinUser, { data, loading, error}) => {
                        
                        return (
                            <form className="form" onSubmit={event => this.handleSubmit(event, signinUser)}>
                                <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}/> <br/>
                                <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/> <br/>
                                
                                
                                <button type="submit" className="button-primary"  disabled={loading || this.validateForm()} >
                                    Submit 
                                </button>
                                {error && <Error error={error} /> }
                             </form>
                        )
                    }}
               
                </Mutation>
            </div>
        )
    }
}

export default withRouter(Signin);