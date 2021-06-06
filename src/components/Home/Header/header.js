import background from '../../../assests/header_bg.png'
import './header.scss'

import TextField from '../../general/Input'

const Header = () => {

    return (
       
        <div className="header">
            <div className="p-0  row">
                <div className="col-5 offset-1 heading">
                    <h1 className="font-Black">
                        Task management <br/> 
                        and lists Tool
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available,
                        <br/> 
                        but the majority have suffered alteration in some form, 
                        <br/>
                        by injected humour,
                    </p>
                    <br/>
                    <TextField placeholder="Enter Text Here" type="text"/>
                </div>
                
                <div className="col-6">
                    <img src={background} alt={background} width="100%" className="header_bg"/>
                </div>
                
                {/* <div className="header_bg col-6">
                    <img src={background} alt={background} width="100%"/>
                </div> */}
            </div>
        </div>

    )
}

export default Header;