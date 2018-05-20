import React, {Component} from 'react';
import{Table, TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn}from 'material-ui/Table';
import Header from '../Header';

class RebrandlyLinks extends Component{
    links=[{
        "title":"Link nlnwv",
        "destination": "https://www.youtube.com/watch?v=3VmtibKpmXI",
        "shortUrl":"rebrand.ly/nlnwv",
    }]
    render(){
        return(
            <div>
                <Header />
                <Table>
                    <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>Destination</TableHeaderColumn>
                        <TableHeaderColumn>Short URL</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                    {
                        this.links.map(link=>{
                            return(
                                <TableRow>
                                    <TableRowColumn>{link.title}</TableRowColumn>
                                    <TableRowColumn>{link.destination}</TableRowColumn>
                                    <TableRowColumn>{link.shortUrl}</TableRowColumn>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                </Table>
                </div>
        );
    }
    componentWillMount()
    {
        const apikeysession=sessionStorage.getItem('apikey')
        if(apikeysession){
            this.validapikey(apikeysession)
            .then(response=>{
                if(response){
                    this.props.history.push('/link')
                }
            })
        }
    }
    validapikey(apikey){
        return fetch('https://api.rebrandly.com/v1/account',
        {
            headers:{apikey:apikey}
        })
    }
    componentWillMount(){
        fetch('https://api.rebrandly.com/v1/links',
    {
        headers:{apikey: sessionStorage.getItem('apikey')
    }
    })
    .then(res=>{
        if(res.ok){
            res.json().then(data=>{
                this.setState({
                    links:data
                })
            })
        }
        else{
            alert(res.statusText)
        }
    })
    }
}
export default RebrandlyLinks;
