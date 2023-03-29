import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div>
        <div className={style.Nav}>
          <SearchBar onSearch={this.props.onSearch} />
        </div>
      </div>
    )
  }
}

export default Nav;



// import SearchBar from "../SearchBar/SearchBar";
// import style from "./Nav.module.css";
// import React from 'react'

//  const Nav = ()=> {
//     return (
//     <div>
//         <div className={style.Nav} >
//              <SearchBar onSearch ={this.props.onSearch}/> 
//              {/* this. porque es un componente de clase */}
//         </div>
       
//     </div>
//   )
// }

// export default Nav;