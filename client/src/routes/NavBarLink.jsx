import { node, string } from "prop-types";
import { Link } from "react-router-dom";

const NavBarLink = ({ to, color, children }) => {
  return (
    <Link to={to}  style={{color, textDecorationLine: "none" }}>
      {children}
    </Link>
  );
};

NavBarLink.propTypes = {
  to: string.isRequired,
  color: string.isRequired,
  children: node.isRequired,
};

NavBarLink.defaultProps ={
    color: "#fff",
};

export default NavBarLink;