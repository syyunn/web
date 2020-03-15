// @ config.js
import { configure, addDecorator } from '@storybook/react';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../src/redux/reducers/index';

const store = createStore(rootReducer);

addDecorator(Stories => (
    <Provider store={store}>
        <Stories />
    </Provider>
));

configure(require.context('../src', true, /\.stories\.tsx$/), module);
