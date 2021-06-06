import './index.scss'

const textInput = ({type, placeholder}) => {
    return(
        <input type={type} className='inputField' placeholder={placeholder}/>
    )
}

export default textInput;