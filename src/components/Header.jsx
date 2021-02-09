import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title,onAdd }) => {
    // const onClick =(e)=>{
    //     console.log("Fun")
    // }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onAdd} color='gray' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    onAdd: false,
}
Header.propTypes={
    title: PropTypes.string,
    onAdd: PropTypes.bool.isRequired,
}

export default Header
