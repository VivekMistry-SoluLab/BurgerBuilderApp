import React, { useState } from 'react';
import Auxx from '../Auxx/Auxx';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  
    const sideDrawerClosedHandler = () => {
      setSideDrawerIsVisible(false);
    };
  
    const sideDrawerToggleHandler = () => {
      setSideDrawerIsVisible(!sideDrawerIsVisible);
    };
  
    return (
      <Auxx>
        <Toolbar
          isAuth={props.isAuthenticated}
          drawerToggleClicked={sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={props.isAuthenticated}
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{props.children}</main>
      </Auxx>
    );
  };
  
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    };
  };
  
  export default connect(mapStateToProps)(Layout);
  