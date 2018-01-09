import React, { Component} from 'react';

import LeftMenu from './LeftMenu';
import Main from './Main';

class App extends Component{

  render(){
    return(
      <div>
        <LeftMenu />
        <Main />
      </div>
    )
  }

}

export default App;
