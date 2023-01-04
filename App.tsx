import { Statusbar } from './src/components/Statusbar/Statusbar';
import { Routes } from './src/routes/routes';
import { Home } from './src/screen/Home/Home';
import { Login } from './src/screen/Login/Login';
import { Register } from './src/screen/Register/Register';

export default function App() {
  return (
    <>
      <Statusbar/>
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      <Routes/>
    </>
  );
}