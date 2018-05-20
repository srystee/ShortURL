import React, {Component} from 'react';
import{Table, TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn}from 'material-ui/Table';
import Header from '../Header';
import RebrandlyAPI from '../services/RebrandlyAPI';

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
        RebrandlyAPI.get('/links')
        .then(links =>{
            this.setState({
                links:links
            })
        })
    }
}
export default RebrandlyLinks;
