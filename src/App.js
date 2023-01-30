import logo from './logo.svg';
import './App.css';
import MainContent from './MainContent';

function Header(){
  return (
    <header>
    <nav>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>ReactFacts</h2>
    <ol className='nav-items' >
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ol>
    </nav>
    </header>
  )
}

function Footer() {
<footer>© 2023 Dilli development.All rights reserved.</footer>
}

function App() {
  return (
    <div className="App-header">
      <Header />
      <MainContent />
      <Footer />
      
    </div>
  );
}

export default App;
