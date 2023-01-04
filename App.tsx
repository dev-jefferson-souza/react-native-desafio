import { Statusbar } from './src/components/Statusbar/Statusbar';
import { AuthProvider } from './src/context/AuthContext';
import { Routes } from './src/routes/routes';

export default function App() {
  return (
    <AuthProvider>
      <Statusbar/>
      <Routes/>
    </AuthProvider>
  );
}