import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Бордиян С.Р. (02.03.03 - АИСа - о20)";

  /*console.log('This is App ')//////;*/
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
      </header>
    </div>
  );
}

export default App;
/*fff*/