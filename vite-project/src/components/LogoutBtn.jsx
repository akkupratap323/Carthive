import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

const handleLogout = () => {
   const LoginStatus = useSelector(store => store.LoginStatus);
    
    const dispatch = useDispatch();

     dispatch(loginActions.logout());
}

const LogoutBtn = () => {
   return (
    <Link  to = "/" onClick={handleLogout} className="button-86" role="button">Logout</Link>
   )
}
export default LogoutBtn;