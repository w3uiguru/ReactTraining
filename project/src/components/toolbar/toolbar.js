import React, {Component} from 'react';
import { Button, Toolbar, AppBar } from '../../../node_modules/@material-ui/core';
import RoutesConstants from '../../constants/route.constants';
import { Link} from 'react-router-dom';

class ToolbarComponent extends Component{
    render() {
        return(
            <AppBar position="static" color="default">
            <Toolbar>
                <Button variant="outlined">
                    <Link to={RoutesConstants.CUSTOMERS_ADD_EDIT.path}>
                        Add Customer
                </Link>
                </Button>
                <Button variant="outlined">
                    <Link to={RoutesConstants.ADMIN_ADD_EDIT.path}>
                        Manage ADMIN
                    </Link>
                </Button>
            </Toolbar>
            </AppBar>
        )
    }
}


export default ToolbarComponent;