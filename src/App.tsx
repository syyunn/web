import React from 'react';
import { Helmet } from 'react-helmet';

import logo from './logo.svg';
import './App.css';

import { Entire } from '../src/stories/Layouts/Entire.stories'

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DeepWTO: A Deep Learning Approach for Predicting Invokable Articles in WTO</title>
        <link rel="canonical" href="deepwto.org" />
      </Helmet>
      <Entire />
    </div>
  );
}

export default App;
