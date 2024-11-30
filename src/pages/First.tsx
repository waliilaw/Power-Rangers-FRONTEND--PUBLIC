import './First.css';
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useState } from "react";
import Tryi from './Front/try';
import { Second } from './Second';
import FaceIcon from '@mui/icons-material/Face';

// import Three from './Three';

function First() {
  const [isLoading, setIsLoading] = useState(false);
  const { login, logout } = useKindeAuth();

// Login Logout logic is here (collapsed)

  async function Login() {
    setIsLoading(true);
    try {
      await login();
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  }
  async function Logout() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsLoading(false);
    }
  }

  function profile(){
    alert("Login first")
  }

// Loading Image is asta gif 
  
if (isLoading) {
    return (
      <div className="loading-container">
        <img src="/asta.gif" alt="Loading..." />
      </div>
    );
  }
 
  return (<>
    <div className="header">
    <FaceIcon className="face-icon" onClick={profile} />
</div>

    <div className="container">
      <Tryi />
      <Second onLogin={Login} onLogout={Logout} />
    </div>
  </>);
}

export default First;