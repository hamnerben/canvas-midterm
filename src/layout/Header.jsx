import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

export default function Header() {

    const navigate = useNavigate();

    return (
        <>
        <div >
            <Button onClick={() => navigate("/login")}>Login Page</Button>
            <Button onClick={() => navigate("/register")}>Register Page</Button>
            <Button onClick={() => navigate("/announcements")}>Announcements Page</Button>
            <Button onClick={() => navigate("/pages")}>Pages Page</Button>

            
        </div>
        </>
    )
}