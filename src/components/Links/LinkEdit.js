import React,{Component} from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Header from '../Header';
import CardExpandable from 'material-ui/Card/CardExpandable';

import RebrandlyAPI from '../services/RebrandlyAPI';

class LinkEdit extends Component{
    constructor (props){
        super(props)
        this.state={
        id: this.props.match.params.id,
        title: '',
        destination: ''
        }
    }

    render(){
        return(
            <div>
                <Header />
                <Card style={{margin:"20px 10px 0 20px"}}>
                <CardHeader title={<strong> Edit Link </strong>} />
                <CardText>
                    <TextField 
                    style={{width:"100%"}}
                    floatingLabelText="Title"
                    value={this.state.title}
                    onChange={(e)=>{this.setState({title:e.target.value})}} /><br />

                    <TextField 
                    style={{width:"100%"}}
                    floatingLabelText="Destination URL"
                    value={this.state.destination}
                    onChange={(e)=>{this.setState({destination:e.target.value})}} /><br />
                </CardText>
                <CardActions>
                    <FlatButton label="Submit" onClick={()=>this.onSubmit()}/>
                </CardActions>
            </Card>
            </div>
        )
    }
    componentWillMount(){
        RebrandlyAPI.get(`/links/${this.state.id}`)
        .then(link=>{
            this.setState({
                title: link.title,
                
            })
        })
        .catch(err=>alert(err.message))
    }
    onSubmit(){
        const data={
            title:this.state.title,
            destination: this.state.destination
        }
        RebrandlyAPI.post(`/links/${this.state.id}`,{body:data})
        .then(()=>{
            this.props.history.push("/link")
        })
        .catch(err=>{
            alert(err.message)
        })
    }
}

export default LinkEdit;