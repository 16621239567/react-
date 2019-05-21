import React,{Component} from "react";
import style from  '../assets/css/Header.module.css'
import { NavLink } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div className={style.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={style.active}>推荐</NavLink>
          </li>
          <li>
            <NavLink to="/follow" activeClassName={style.active}>关注</NavLink>
          </li>
          <li>
            <NavLink to="/user" activeClassName={style.active}>我的</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;