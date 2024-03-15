import Routes from "./routes";
import './App.css';
import AuthProvider from "./provider/authProvider";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
