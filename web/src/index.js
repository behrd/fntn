import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleWare = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const appReducer = combineReducers({
	  form,
});

export default function (state, action) {
	  if (action.type === 'LOGOUT') {
		      return appReducer(undefined, action);
		        }
	    return appReducer(state, action);
}

import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Home from '../Home';
import NotFound from '../../components/NotFound';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Match exactly pattern="/" component={Home} />
			                <Miss component={NotFound} /			
				</div>
       		        </BrowserRouter>
	       	);
	}	        
}

export default App;

//@flow
import React from 'react';

const Home = () =>
	<div>Home</div>;

export default Home;

// @flow
import React from 'react';
import { Link } from 'react-router';

const NotFound = () =>
	<div style={{ margin: '2rem auto', textAlign: 'center' }}>
		<p>Page not found</p>
		<p><Link to="/">Go to the home page →</Link></p>
        </div>;

export default NotFound;


