const initialState = {
    fetching: false,
    fetched: false,
    providedLanguages: [],
    desiredLanguages: [],
    userProvidedLanguages: [],
    userDesiredLanguages: [],
    active : {},
    error: null
  }

export default function userReducer(state=initialState, action) {

     switch (action.type){

// CREATE
        case "CREATE_DESIRED_LANGUAGE_PENDING":{
            state = {...state, fetching:true };
            break;
        }

        case "CREATE_DESIRED_LANGUAGE_FULFILLED":{
            state = {...state, fetching:false};
            break;
        }

        case "CREATE_DESIRED_LANGUAGE_REJECTED":{
            state = {...state, fetching: false, error: action.payload};
            break;
        }


// FETCH
        case "FETCH_USER_PROVIDED_LANGUAGES_PENDING":{
            state = {...state, fetching:true};
            break;
        }       
        
        case "FETCH_USER_PROVIDED_LANGUAGES_REJECTED":{
            state =  {...state, fetching: false, error: action.payload };
            break;
        }
        
        case "FETCH_USER_PROVIDED_LANGUAGES_FULFILLED":{
            state =  { ...state, fetching:false, userProvidedLanguages : action.payload };
            break;
        }

        case "FETCH_USER_DESIRED_LANGUAGES_PENDING":{
            state = {...state, fetching:true};
            break;
        }       
        
        case "FETCH_USER_DESIRED_LANGUAGES_REJECTED":{
            state =  {...state,fetching: false, error: action.payload };
            break;
        }
        
        case "FETCH_USER_DESIRED_LANGUAGES_FULFILLED":{
            state =  { ...state, fetching:false, fetched:true, userDesiredLanguages : action.payload };
            break;
        }
        case "FETCH_PROVIDED_LANGUAGES_PENDING":{
            state = {...state, fetching:true};
            break;
        }       
        
        case "FETCH_PROVIDED_LANGUAGES_REJECTED":{
            state =  {...state,fetching: false, error: action.payload };
            break;
        }
        
        case "FETCH_PROVIDED_LANGUAGES_FULFILLED":{
            state =  { ...state, fetching:false, providedLanguages : action.payload };
            break;
        }

        case "FETCH_DESIRED_LANGUAGES_PENDING":{
            state = {...state, fetching:true};
            break;
        }       
        
        case "FETCH_DESIRED_LANGUAGES_REJECTED":{
            state =  {...state,fetching: false, error: action.payload };
            break;
        }
        
        case "FETCH_DESIRED_LANGUAGES_FULFILLED":{
            state =  { ...state, fetching:false, fetched:true, desiredLanguages : action.payload };
            break;
        }


        case "UPDATE_PROVIDED_LANGUAGES_FULFILLED":{
            state =  { ...state, fetching:false, fetched:true, userProvidedLanguages: action.payload };
            break;
        }

        case "UPDATE_PROVIDED_LANGUAGES_REJECTED":{
            state =  {...state, fetching: false, error: action.payload };
            break;
        }

        case "UPDATE_DESIRED_LANGUAGES_FULFILLED":{
            state =  { ...state, fetching:false, fetched:true, userDesiredLanguages: action.payload };
            break;
        }

        case "UPDATE_DESIRED_LANGUAGES_REJECTED":{
            state =  {...state, fetching: false, error: action.payload };
            break;
        }


        default:
        return state;       
        }
        return state;
    };