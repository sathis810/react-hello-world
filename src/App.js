import React from 'react';
import './App.css';
import AppExplorer from './Components/AppExplorer';
import Container from './Components/Container';
import LeftMenu from './Components/LeftMenu';
import {connect } from 'react-redux';
import { HIDE_MENU, SHOW_MENU } from './Redux/actionTypes';
export class App extends React.Component {
  constructor(props) {
    super(props)
  
    console.log(props);

    this.HideMenu = this.HideMenu.bind(this);    
  }
  
  HideMenu = () => {
    this.props.HideMenu();
  }
  
  componentDidMount(){
      this.HideMenu();
  }


  render() {
    return (    
      <React.Fragment>
          <div style={{backgroundColor: 'red', width: '100%' , height: '100px', display: this.props.Menu ? 'block':'none'}}>
            <AppExplorer></AppExplorer>
          </div>
          <div style={{backgroundColor: 'blue', width: '100%' , height: '100px', display: this.props.Container ? 'block':'none'}}>
            <Container></Container>
          </div>
          <div style={{backgroundColor: 'orange', width: '100%' , height: '100px', display: this.props.AppExplorer ? 'block':'none'}}>
            <LeftMenu></LeftMenu>
          </div>     
      </React.Fragment> 
      
    )
  }
}

const mapStateToProps = state => {
  return{
    Menu: state.AppReducer.Menu,
    Container: state.AppReducer.Container,
    AppExplorer: state.AppReducer.AppExplorer
  }    
}

const mapDispatchToProps = dispatch => {
  return{
    HideMenu : () => dispatch({type:HIDE_MENU}),
    ShowMenu : () => dispatch({type:SHOW_MENU})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
