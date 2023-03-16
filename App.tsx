import { useEffect, useState } from "react";
import { Loading } from "./src/components/Loading/Loading";
import { Statusbar } from "./src/components/Statusbar/Statusbar";
import { AuthProvider } from "./src/context/AuthContext";
import { Routes } from "./src/routes/routes";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 750);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AuthProvider>
      <Statusbar />
      <Loading visible={isLoading} />
      <Routes />
    </AuthProvider>
  );
}
