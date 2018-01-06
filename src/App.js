import React, { PureComponent } from 'react';
import Block from './Block';

class App extends PureComponent {
    render(){
        return <Block margin="500px" mobileMargin="100">Example</Block>
    }
}

export default App;