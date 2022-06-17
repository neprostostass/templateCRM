import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.module.css';
// import store from './redux/store';
// import StoreContext from './storeContext';
import store from './redux/reduxStore';

let render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store} >

                <App
                // state={store.getState()}
                // dispatch={store.dispatch.bind(store)}
                />

            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render();

store.subscribe(render);