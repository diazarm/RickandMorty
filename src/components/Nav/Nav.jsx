import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return (
      <div className={style.Nav}>
          <SearchBar onSearch={this.props.onSearch} />
          <Link to="/about" className={style.links}><h3>About</h3></Link> 
          <Link to="/home" className={style.links}><h3>  Home</h3></Link> 
          <Link to="/favorites" className={style.links}><h3>  Favorites</h3></Link> 
          <Link to="/"  className={style.links}><h3>  Exit</h3></Link> 
      </div>
    )
  }
}

export default Nav;


// setAccess(true);  necesito que cuando se vaya cambie el estado. 
