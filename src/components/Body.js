import React,{Component} from 'react';
import{
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

class Body extends Component{
    render(){
        return(
            <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>1</TableHeaderColumn>
                            <TableHeaderColumn>John Smith</TableHeaderColumn>
                            <TableHeaderColumn>Employed</TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>2</TableHeaderColumn>
                            <TableHeaderColumn>Randel White</TableHeaderColumn>
                            <TableHeaderColumn>umemployed</TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>3</TableHeaderColumn>
                            <TableHeaderColumn>Stephanie Sanders</TableHeaderColumn>
                            <TableHeaderColumn>Employed</TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>4</TableHeaderColumn>
                            <TableHeaderColumn>Steve Brown</TableHeaderColumn>
                            <TableHeaderColumn>Employed</TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>5</TableHeaderColumn>
                            <TableHeaderColumn>Christopher Nolan</TableHeaderColumn>
                            <TableHeaderColumn>unemployed</TableHeaderColumn>
                        </TableRow>
                    </TableBody>
                </Table>
             </div>
        );
    }
}
export default Body;