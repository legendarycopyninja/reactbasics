 
 import logo from './logo.svg';

 export default function Navbar(){
    return (
      <nav className='nav-items'>
        <img src={logo} className="nav-logo" alt="logo" />
        <h3 className='nav-title' >ReactFacts</h3>
        <h4 className='nav-subitem' >
          Course INFO
        </h4>
      </nav>
    )
  }