import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom";
const Header = ({ title,onAdd,showAdd }) => {
    // const onClick =(e)=>{
    //     console.log("Fun")
    // }
    const location = useLocation()
    return (
      <header className="header">
        <h1>{title}</h1>
        {location.pathname==='/' && (<Button
          onClick={onAdd}
          color={showAdd ? "red" : "gray"}
          text={showAdd ? "Close" : "Add"}
        />)}
      </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker',
    onAdd: false,
    
}
Header.propTypes={
    title: PropTypes.string,
}

export default Header
