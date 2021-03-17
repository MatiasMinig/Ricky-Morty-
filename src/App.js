import React, {Fragment} from 'react'
import Header from './components/Header'
import Characters from './components/characters'
import './main.sass'
import './components/Header.css'


const App = () => {
    return ( 
        <Fragment>
            <Header
                title="Rick and Morty Api"
            />
            <Characters/>
        </Fragment>
        
     );
}
 
export default App;
