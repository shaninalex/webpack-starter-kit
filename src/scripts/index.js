// import { qs, qsa, $on, $delegate } from './utils';

import '../stylesheets/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComponent from "./header-component";

if (document.getElementById('header')){
  ReactDOM.render(
    <HeaderComponent />,
    document.getElementById('header'));
}

