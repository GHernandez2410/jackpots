const initialState = {
    option: 'topGames'
}

function HeaderReducer (state = initialState, action) {
    switch(action.type){
        case 'SELECT_MENU':{
            return Object.assign({}, state, {
                option: action.option
            })
        }
        default:
                return state;
    }
}

export default HeaderReducer;