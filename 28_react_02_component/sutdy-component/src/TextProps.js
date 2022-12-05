import PropTypes from 'prop-types';

let TextProps = ({text, valid}) => {
    return (
        <>
            <div>{text}</div>
            <button onClick={valid}>콘솔 메세지</button>
        </>
    )
}

TextProps.defaultProps = {
    text : '이건 기본 text props 입니다.'
}

TextProps.propTypes = {
    text: PropTypes.string.isRequired,
}

export default TextProps