import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers/todo';
import { AppContainer } from 'react-hot-loader';

const store = createStore(todoApp);

renderWithHotReload(App)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const App = require('./containers/App').default;
		renderWithHotReload(App)
  })
}

function renderWithHotReload(RootContainer){
	render(
  	<AppContainer>
  		<Provider store={store}>
      	<RootContainer />
			</Provider>
    </AppContainer>,
		document.getElementById('app')
	)
}
