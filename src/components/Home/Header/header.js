import background from '../../../assests/header_bg.png'
import cards from '../../../assests/cards.png'
import './header.scss'

import TextField from '../../general/Input'
import PrimaryButton from '../../general/Button'

const Header = () => {

    return (
       
        <div className="row">

            <div className="col-lg-5 offset-1 heading">
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
                <div className="row">
                    <div className="col-lg-7">
                        <TextField placeholder="Name @ Company.com" type="email"/>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-lg-start ">
                        <PrimaryButton title="Try for free" className="my-lg-5"/>
                    </div>
                    
                </div>
                
            </div>

            
            <div className="col-lg-6">
                {/* <img src={background} alt={background} width="100%" className="header_bg"/> */}
                <img src={cards} alt={cards}  className="img-fluid"/>
            </div>
    
        </div>
    )
}

export default Header;