import logo from './logo.svg';
import './App.css';
import SignIn from './components/LoginRegister/SignIn';
import Header from './components/modules/Navigation';
import Footer from './components/modules/Footer';
import Landing from './components/modules/Landing';

function App() {
  return (
    <div className="App">
        <Header/>
        <Landing/>
        {/* <SignIn/> */}
        <Footer/>
    </div>
  );
}

export default App;
