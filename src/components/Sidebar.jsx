import { NavLink } from 'react-router-dom';
import './CSS/Sidebar.css'; 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">My Portfolio</h2>
      <nav className="nav-links">
        <NavLink to="/" end activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About Me</NavLink>
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        <NavLink to="/skills" activeClassName="active">Skills</NavLink>
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
