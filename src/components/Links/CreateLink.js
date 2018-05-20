import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import Header from '../Header';
import RebrandlyAPI from '././services/RebrandlyAPI';

class CreateLink extends Component{
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
                    onChange={(e)=>{this.setState({title:e.target.value})}} /><br />
                    <TextField style={{width:"100%"}}
                    floatingLabelText="Destination URL"
                    value={this.state.destination}
                    onChange={(e)=>{this.setState({destination:e.target.value})}} /><br />
                </CardText>
                <CardActions>
                    <FlatButton label="Submit" />
                </CardActions>
            </Card>
            </div>
        )
    }
}
export default CreateLink;