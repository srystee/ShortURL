import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import Header from '../Header';
import RebrandlyAPI from './../services/RebrandlyAPI';

class CreateLink extends Component{
    constructor(props){
        super(props)
        this.state={title:'',destination:''}
    }
    render(){
        return(
            <div>
                <Header />
                <Card style={{margin: "20px 10px 0 10px"}}>
                <CardHeader title={<strong>Create New Link</strong>}/>
                <CardText>
                    <TextField style={{width:"100%"}}
                    floatingLabelText="Title"
                    value={this.state.title}
                    onChange={(e)=>{this.setState({title:e.target.value})}} />
                    <br />
                    
                    <TextField style={{width:"100%"}}
                    floatingLabelText="Destination URL"
                    value={this.state.destination}
                    onChange={(e)=>{this.setState({destination:e.target.value})}} />
                    <br />
                </CardText>
                <CardActions>
                    <FlatButton label="Submit" onClick={() => this.onSubmit()}/>
                </CardActions>
            </Card>
            </div>
        )
    }
    onSubmit=()=>{
        var url='https://api.rebrandly.com/v1/links';
        const apikey=sessionStorage.getItem('apikey');
        const data ={
            title:this.state.title,
            destination: this.state.destination
        };
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                apikey: apikey,
                'Content-Type': 'application/json'
            }
        })
        .then(res =>{
            if(res.ok){
                res.json()
                .then(data =>{
                    this.props.history.push('./link')
                })
            }
            else{
                alert(res.statusText)
            }
        })
    }
}
export default CreateLink;