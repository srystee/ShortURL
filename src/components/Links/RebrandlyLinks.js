import React, {Component} from 'react';
import{Table, TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn}from 'material-ui/Table';
import Header from '../Header';
import RebrandlyAPI from '../services/RebrandlyAPI';
import {ButtonNavigationItem, BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

class RebrandlyLinks extends Component{
    constructor(props){
        super(props)
        this.state={
            links:[]
        }
    }
    render(){
        return(
            <div>
                <Header />
                <Table selectable={false}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                    <TableHeaderColumn>#</TableHeaderColumn>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>Destination</TableHeaderColumn>
                        <TableHeaderColumn>Short URL</TableHeaderColumn>
                        <TableHeaderColumn>Action</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                    {
                        this.state.links.map((link,index) => {
                            return(
                                <TableRow key={link.id}selectable={false}>
                                    <TableRowColumn>{link.title}</TableRowColumn>
                                    <TableRowColumn>{link.destination}</TableRowColumn>
                                    <TableRowColumn>{link.shortUrl}</TableRowColumn>
                                    <TableRowColumn>
                                        <IconButton
                                            onClick={()=>this.props.history.push(`/link/${link.id}/edit`)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton> onClick={()=>this.deleteLink(link.id)}>
                                                <DeleteIcon />
                                        </IconButton>
                                        </TableRowColumn>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                </Table>
             </div>
        )
    }
    componentWillMount()
    {
       this.linklist()
    }
    linklist(){
        const apikeysession=sessionStorage.getItem('apikey')
        debugger
        if(apikeysession){
            this.validapikey(apikeysession)
            .then(res=>{
                if(res.ok){
                    res.json()
                    .then(data=>{
                        this.setState({
                            links:data
                        })
                    })
                }
            })
        }
    }
    deleteLink(LinkID){
        const apikey=sessionStorage.getItem('apikey')
        fetch(`https://api.rebrandly.com/v1/links/${LinkID}`,{
            headers:{apikey:apikey,
            'Content-Type':'application/json'
            },
            method:'delete'
        })
        .then(response=>{
            if(response.ok){
                response.json()
                .then(response=>{
                    this.linklist()
                })
            }
            else{
                alert(response.statusText)
            }
        })
    }
    validapikey(apikey){

        return fetch('https://api.rebrandly.com/v1/links',
        {
            headers:{apikey:apikey}
        })
    }
}

export default RebrandlyLinks;
