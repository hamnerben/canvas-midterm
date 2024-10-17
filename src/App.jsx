import { useState } from "react";
import "./App.css";
import AuthProvider, {useAuth} from "./components/AuthProvider";
import CustomRoutes from "./layout/CustomRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <CustomRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
