import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ Children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("username")) {
            navigate("/login");
        }
    }, []);

    return Children;
}

export default ProtectedRoute;
