import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
    const onClick =(e)=>{
        console.log("Fun")
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color='gray' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
