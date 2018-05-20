import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Login extends Component{
    alignCenter={
        height: "100vh",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    }
    CardWidth={
        width:"500px",
    }

    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            apikey:''
        }
    }
    render(){
        return(
            <div style={this.alignCenter}>
            <Card style={this.CardWidth}>
            <CardHeader title="Rebrandly" />
            <CardText>
                <TextField hintText="Email" value={this.state.email}
                onChange={(e)=>this.onEmailChange(e)} /><br />
                <TextField hintText="ApiKey" type="password" value={this.state.apikey}
                onChange={(e)=>this.onApikeyChange(e)} /><br />
            </CardText>
            <CardActions style={{float:"right"}}>
            <RaisedButton label="Login" primary={true} onClick={()=>this.onSubmit()}/>
            </CardActions>
            </Card>
            </div>
        );
    }
    onEmailChange(e){
        this.setState({email:e.target.value})
    }
    onApikeyChange(e){
        this.setState({apikey:e.target.value})
    }
    onSubmit(){
        fetch('https://api.rebrandly.com/v1/account',
    {   
        headers:{apikey:this.state.apikey}
    })
    .then(response=>{
        if(response.ok){
            response.json()
        .then(data=>{
            if(data.email===this.state.email){
                sessionStorage.setItem('apikey',this.state.apikey)
                sessionStorage.setItem('email',this.state.email)
                this.props.history.push('/dashboard')
            }
            else{
                alert('not authorised user')
            }
        })
        
    }
        
    })
    }
    componentWillMount()
    {
        const apikeysession=sessionStorage.getItem('apikey')
        if(apikeysession){
            this.validapikey(apikeysession)
        .then(response=>{
            if(response){
                this.props.history.push('/dashboard')
            }
        })
        }
    }
    validapikey(apikey){
        return fetch('https://api.rebrandly.com/v1/account',
    {
        headers:{apikey:this.state.apikey}
    })

    }
}
export default Login;