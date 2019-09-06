import {SHOW_MENU, SHOW_APP_EXPLORER, HIDE_MENU, HIDE_APP_EXPLORER } from '../actionTypes';

const initialState = {
    Menu: false,
    SecondMenu: true,
    AppExplorer: true,
    Container: true,    
}

const AppReducer = (state = initialState, action) => {
    const newState = {...state}

    switch (action.key) {
        case SHOW_MENU: 
            newState.Menu = true    
            break;
        case HIDE_MENU:   
            newState.Menu  = false    
            break;
        case SHOW_APP_EXPLORER:
            return{
                ...state,
                AppExplorer: true
            } 
            break;
        case HIDE_APP_EXPLORER:
            return{
                ...state,
                AppExplorer: false
            } 
            break;
        default:
            break;
    }

    return newState
}

export default AppReducer;