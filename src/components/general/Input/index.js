import './index.scss'

const PrimaryButton = ({type, placeholder}) => {
    return(
        <input type={type} className='inputField' placeholder={placeholder}/>
    )
}

export default PrimaryButton;