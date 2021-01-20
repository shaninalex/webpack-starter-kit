import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';

import HeaderComponent from "./header-component";

if (document.getElementById('header-component')){
  ReactDOM.render(
    <HeaderComponent />,
    document.getElementById('header-component'));
}
