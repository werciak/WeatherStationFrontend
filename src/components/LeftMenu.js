
import React, {Component} from 'react';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import './LeftMenu.css';
import 'rc-menu/assets/index.css';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class LeftMenu extends Component{

  render(){

      return (
        <div className="menudiv">
        <Menu
          onClick={this.onClick}
          mode="inline"
        >
          <MenuItem key="1"><Link to="/all">Wszystkie</Link></MenuItem>

          <SubMenu key="2" title="Plytki">
            <MenuItem key="2-1"><Link to="/pierwsza">Plytka-1</Link></MenuItem>
            
        
            <MenuItem key="2-2"><Link to="/druga">Plytka-2</Link></MenuItem>
            
          </SubMenu>
         
        </Menu>
        </div>
    )
  }
}

export default withRouter(LeftMenu);
