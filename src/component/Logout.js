import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout(){

    const navigasi = useNavigate()

    const logout = async () => {
        await axios.post('http://127.0.0.1:8000/api/logout')
        .then(function (response) {
            console.log(response);
        }).catch(function (error) { 
            console.log(error);
        })
    }

    return(
        logout
    )
}

export default Logout