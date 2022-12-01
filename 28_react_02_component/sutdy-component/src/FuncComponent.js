import PropTypes from 'prop-types'

let FuncComponent = (props) => {
    const { name, student } = props;
    return(
        <div>
            <h1>안녕! {name}</h1>
            <p>여기는 함수형 컴포넌트야!</p>
            <p>여기 모인 학생수는 {student}!</p>
        </div>
    )
}

FuncComponent.defaultProps = {
    name : '이름 없음',
}

FuncComponent.propTypes = {
    name: PropTypes.string.isRequired,
    student: PropTypes.number.isRequired,
}

export default FuncComponent;