import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './AuthReducer/reducer';
import { bagReducer } from './BagReducer/reducer';
import { wishlistReducer } from './WishlistReducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    wishlist: wishlistReducer,
    bag: bagReducer
}
)
export const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(thunk)
  ));

