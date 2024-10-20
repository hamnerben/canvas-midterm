import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import {useAuth} from "../components/AuthProvider"

export default function Header() {

    const navigate = useNavigate();
    const auth = useAuth();
    return (
        <>

        {auth.user ? <h2>{auth.user.email} is logged in</h2> : <h2>Not logged in</h2>}
        {auth.user ? <Button className="w-3" onClick={() => {auth.logout()}}>Log out</Button> : ""}
        <div >
            <Button onClick={() => navigate("/login")}>Login Page</Button>
            <Button onClick={() => navigate("/register")}>Register Page</Button>
            <Button onClick={() => navigate("/announcements")}>Announcements Page</Button>
            <Button onClick={() => navigate("/pages")}>Pages Page</Button>

            
        </div>
        </>
    )
}