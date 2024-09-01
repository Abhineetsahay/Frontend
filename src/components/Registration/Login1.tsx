import React from 'react';
import { TextField, Button, Typography} from '@mui/material';
import { useForm } from 'react-hook-form';
import './Login1.css';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

interface Login1Props {
  toggleAuth: () => void;
}

interface FormData {
  email: string;
  password: string;
  role: string;
}

const Login1: React.FC<Login1Props> = ({ toggleAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async(data: FormData) => {
    console.log("Form submitted with data:", data);
    try {
          await signInWithEmailAndPassword(auth,data.email,data.password);
          toast.success("Login Successfully");
    } catch (error:any) {
          const errorMessage = getErrorMessage(error.code);
          console.log(errorMessage);
          toast.error(errorMessage);
    }
  };
  const getErrorMessage = (code: string): string => {
          switch (code) {
            case "auth/email-already-in-use":
              return "The email address is already in use. Please use a different email.";
            case "auth/invalid-email":
              return "The email address is not valid. Please enter a valid email.";
            case "auth/weak-password":
              return "The password is too weak. Please choose a stronger password.";
            default:
              return "An unexpected error occurred. Please try again.";
          }
        };
      
  return (
    <div className="login-container">
      <Typography variant="h4" className="title">
        Login to your Account
      </Typography>
      <Typography variant="subtitle1" className="subtitle">
        Welcome back! Select method to log in:
      </Typography>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          LOG IN
        </Button>

        <Typography variant="body2" className="signup-text">
          Don't have an account?{" "}
          <span className="create-account" onClick={toggleAuth}>
            Create an account
          </span>
        </Typography>
      </form>
    </div>
  );
};

export default Login1;
