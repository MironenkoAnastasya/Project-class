import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const RegisterSchema = z.object({
    name: z.string().min(3, { message: "Мінімум 3 символи" }).max(20).nonempty(),
    email: z.email().nonempty(),
    password: z.string().min(6).max(20).nonempty(),
    repeatPassword: z.string().min(6).max(20).nonempty()
})
    .refine((data) => data.password === data.repeatPassword, {
        message: "Паролі не співпадають",
        path: ["repeatPassword"],
    });

    type RegisterData = z.infer<typeof RegisterSchema>;

    




const RegisterPager = () => {
    const { register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit = (data : any) => {
        console.log(data);
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
