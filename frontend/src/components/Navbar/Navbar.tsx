import { AppBar, Avatar, Box, Button, Toolbar, Typography} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { removeToken } from '../../store/authSlise';
import { baseApi } from '../../assets/api/baseApi';
import { useDispatch } from 'react-redux';
const Navbar = () => {
    const { user, isAuth } = useAuth(); 
    const dispatch = useDispatch();


    const handleLogout = () => {
        useDispatch(removeToken());
        dispatch(baseApi.util.resetApiState());
        //dispatch(baseApi.util.invalidateTags(["User"]));
    } 


    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow: 1}}>MyApp</Typography>
                <Box sx={{display: 'flex', alignContent: 'center', gap: 1}}>
                    <Button color='inherit' component={NavLink} to='/'>
                    Головна</Button>

                    {isAuth ? (
                        <>
                        <Link to="/profile"><Avatar>
                            {user?.name[0].toUpperCase() }
                        </Avatar></Link>
                        <Button color='inherit' onClick={handleLogout}>
                            Вийти
                        </Button>
                        </>
                    ) : (

                    <Button color='inherit' component={NavLink} to='/login'>
                    Увійти</Button>
                    )}






                     <Button color='inherit' component={NavLink} to='/stati'>
                    Статті</Button>

                    <Button color='inherit' component={NavLink} to='/products'>
                    Товари</Button>
                    <Button color='inherit' component={NavLink} to='/apply'>
                    Анкета</Button>



                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
