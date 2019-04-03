import React, { Component } from 'react';
import {Grid, Card, Typography, Table, TableBody, TableCell, TableRow} from '@material-ui/core';
import UserContext from './Context.js';

class UserComponent extends Component {

    static contextType = UserContext

    render() {
        const {selectedUser} = this.context
        return (
            <div style={{marginTop: '10px'}}>
                <Grid container justify="center" alignItems="center">
                    <Card style={{padding: '10px'}}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography variant="display3">
                        {`${selectedUser.first_name} ${selectedUser.last_name}`}
                        </Typography>
                        <Table style={{marginTop: '24px'}}>
                        <TableBody>
                            <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell>{selectedUser.id}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>Company</TableCell>
                            <TableCell>{selectedUser.company_name}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell>{selectedUser.city}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>State</TableCell>
                            <TableCell>{selectedUser.state}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>ZIP</TableCell>
                            <TableCell>{selectedUser.zip}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>{selectedUser.email}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>Web</TableCell>
                            <TableCell>{selectedUser.web}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>Age</TableCell>
                            <TableCell>{selectedUser.age}</TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                        </Grid>
                    </Card>
                </Grid>
            </div>
        );
    }
}

export default UserComponent;
