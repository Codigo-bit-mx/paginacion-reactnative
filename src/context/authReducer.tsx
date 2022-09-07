import { AuthState } from './authContext';

type AuthAction = 
| { type: 'signIn' }
| { type: 'logout'}
| { type: 'changeNameIcon', payload: string}
| { type: 'changeName', payload: string}


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch(action.type){

        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'Ossmar'
            }
 
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }

        case 'changeNameIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }

        case 'changeName':
            return {
                ...state,
                username: action.payload
            }

        default:
            return state
    }


}