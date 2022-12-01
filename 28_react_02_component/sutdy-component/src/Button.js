import './Button.css'

const Button = (props) => {
    const {link, children} = props;
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <button className='Button'>{children}</button>
        </a>
    )
}

Button.defaultProps = {
    children : '무명 버튼',
    link: '#',
}


export default Button;