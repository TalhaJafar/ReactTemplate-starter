import {Navbar} from 'react-bootstrap'
import './index.scss'
const NavigationBar = () => {
    return(
        <Navbar bg="transparent" className="pl-0 pr-0 pt-5">
            <Navbar.Brand className="font-Black offset-1">
                Dash 
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavigationBar;