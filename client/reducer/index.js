
import { combineReducers } from 'redux'

function one(state={
    list: [],
    isLoad: false,
}, action) {
    switch (action.type) {
        case 'getOne':
            return {
                ...state,
                list: action.list,
                isLoad: true,
            }
        case 'aaaaaa':
            console.log('aaaaa')
            return {
                ...state,
                isLoad: false,
            }
        default:
            return state
    }
}

export default combineReducers({
    one
})
