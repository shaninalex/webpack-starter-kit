import React from "react";
import {Component} from 'react';

class HeaderComponent extends Component {

  state = {
    menu: [
      {id: 1, link:'/', title: 'Home'},
      {id: 2, link:'about.html', title: 'About'}
    ]
  };

  render() {
    const { menu } = this.state;
    let menuList = menu.map(item => <a key={item.id} href={item.link}>{item.title}</a>);
    return (
      <div className="header-menu">
        <div>Brand</div>
        <nav>
          {menuList}
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
