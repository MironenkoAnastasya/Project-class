import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, type RegisterData } from "../validations/RegisterSchema";
import { useRegisterMutation } from "../assets/api/authApi";


const RegisterPager = () => {

    const [registerUser] = useRegisterMutation();


    const { register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit = (data : RegisterData) => {
        registerUser(data);
    }


    return (
        <div>
            <Typography variant="h4" gutterBottom>Реєстрація</Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                variant="outlined" 
                fullWidth label="Ваше Ім'я" 
                margin="normal" 
                {...register('name')} 
                error={!!errors.name}
                helperText={errors.name?.message}
                />

            


                <TextField 
                type="email"
                variant="outlined" 
                fullWidth 
                label="Ваш пошта" 
                margin="normal"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                />



                <TextField 
                type="password" 
                variant="outlined" 
                fullWidth 
                label="Ваш пароль" 
                margin="normal" 
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                />



                <TextField 
                type="password" 
                variant="outlined" 
                fullWidth 
                label="Підтвердіть пароль" 
                margin="normal"
                {...register('repeatPassword')} 
                error={!!errors.repeatPassword}
                helperText={errors.repeatPassword?.message}
                />


                <Button type="submit" variant="contained" fullWidth>
                    Зареєструватися
                    </Button>


            </Box>
        </div>
    );
}

export default RegisterPager;
