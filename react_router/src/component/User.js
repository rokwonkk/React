import { useNavigate } from 'react-router-dom'

const User = () => {

    const navigate = useNavigate();

    const move = () => {
        navigate("/");
    }

    return (
        <div>
            <h2>User</h2>
            <button onClick={ move }>Home으로 이동</button>
        </div>
    )
}

export default User;