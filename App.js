
import './App.css';
import AppRouter from "../src/router/Router"
import  AuthContextProvider from '../src/context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <AppRouter/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
