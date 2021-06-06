import './index.scss'

const textInput = ({onClick, title}) => {
    return(
        <button onClick={onClick} className='primary_btn'>
            {title}
        </button>
    )
}

export default textInput;