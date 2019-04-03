import React, { Component } from 'react';
import {Table, TableCell, TableRow, TableFooter, TablePagination} from '@material-ui/core';
import UserContext from './Context.js'

class TableComponent extends Component {
  static contextType = UserContext

  state = {
    users: {},
    isloading: true,
    page: 0,
    rowsPerPage: 5,
    selectedUser: {},
  }

  componentDidMount() {
    fetch('http://demo9197058.mockable.io/users')
    .then(res => res.json())
    .then(json => {
      this.setState({users: json})
      this.setState({isloading: false})
    })
  }

  handleChangePage = (e, page) => {
    this.setState({page})
  }

  onRowClick = (e) => {
    this.context.setSelectedUser(e)    
    this.props.history.push(`/user/${e.id}`)
  }

  render() {

    if(this.state.isloading){
      return(
        <div>
          <h1>
            LOADING...
          </h1>
        </div>
      );
    }
    
    else if(!this.state.isloading) {
      const {users, page, rowsPerPage} = this.state
      const list = users.slice(page * rowsPerPage, rowsPerPage*page + rowsPerPage)
      return (
        <div>
            <Table>
              <TableRow style={{backgroundColor: '#000000', color: '#ffffff'}}>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
              {
                list.map((user,i) => {
                  return(
                    <TableRow key={i} onClick={() => this.onRowClick(list[i])}>
                      <TableCell>{list[i].first_name}</TableCell>
                      <TableCell>{list[i].last_name}</TableCell>
                      <TableCell>{list[i].company_name}</TableCell>
                      <TableCell>{list[i].city}</TableCell>
                      <TableCell>{list[i].state}</TableCell>
                      <TableCell>{list[i].zip}</TableCell>
                      <TableCell>{list[i].email}</TableCell>
                      <TableCell>{list[i].age}</TableCell>
                    </TableRow>
                  );
                })
              }
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={5}
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
        </div>
      );
    }
  }
}

export default TableComponent;
