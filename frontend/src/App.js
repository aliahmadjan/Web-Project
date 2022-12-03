import './App.css';
// eslint-disable-next-line
import LoginForm from './components/loginform';
// eslint-disable-next-line
import SignUpForm from './components/signupform';

function App() {
  return (
    <div className='loginPage'>
      <SignUpForm/>
    </div>
  );
}

export default App;
