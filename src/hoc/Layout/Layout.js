import React, { Component } from 'react';
import Auxs from '../Auxs/Auxs';
import AppHeader from '../../components/NavHeaders/NavHeader';
import './Layout.css';



class AppLayout extends Component {


  render() {
    return (
      <Auxs>
        <AppHeader />
        <main>
          {this.props.children}
        </main>
      </Auxs>
    );
  }
}
export default AppLayout;
