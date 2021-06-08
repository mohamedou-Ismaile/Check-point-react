import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Footeer from './components/Footeer'
function App() {
  return (
    <div className="App">
      <Header />

     <LoginForm />
     <Footeer />
  
    </div>
  );
}

export default App;