import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginData } from "../validations/RegisterSchema";
import { useLoginMutation } from "../assets/api/authApi";
import { setToken } from "../store/authSlise";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const LoginPage = () => {
  const [loginUser, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    try{
    const user = await loginUser(data).unwrap();
    dispatch(setToken(user.data.token));
    navigate("/");
    } catch (err) {
      const error = err as {data: {message: string}};
      // const message = (error.data as { message: string })?.message;




        setError("email", error.data.message, { shouldFocus: true });
  };
}


  return (
    <Box>
      <Typography variant="h1">Вхід</Typography>

        {error && <p>{error.data.message}</p>}

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="email"
          variant="outlined"
          fullWidth
          label="Ваша пошта"
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          label="Ваш пароль"
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" fullWidth>
          Вхід
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;