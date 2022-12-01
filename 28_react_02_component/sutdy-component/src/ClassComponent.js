import React from 'react'
import PropTypes from 'prop-types'
class ClassComponent extends React.Component{
    render() {
        const {name, student} = this.props
        return (
            <>
                <h1>Hello, {name}</h1>
                <p>here is Class Component!</p>
                <p>수업시간! 학생 수는 {student}</p>
            </>
        )
    }

    static defaultProps = {
        name: '우리들',
    }

    static propTypes = {
        name: PropTypes.string,
        student: PropTypes.number.isRequired
    }

}

export default ClassComponent;