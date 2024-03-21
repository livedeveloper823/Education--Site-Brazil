import Routes from "./routes";
import './App.css';
import AuthProvider from "./provider/authProvider";
import NotificationProvider from "./contexts/notificationContext";

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NotificationProvider>
  );
}

export default App;
