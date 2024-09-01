import React from "react";
import "./Registartion.css";
import { TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { auth } from "../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface RegisteInRailMadadProps {
          toggleAuth: () => void;
}

const RegisteInRailMadad: React.FC<RegisteInRailMadadProps> = ({toggleAuth}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const navigate=useNavigate();

  const handleRegister = async (data: FormData) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate('/dashboard');
      toast.success("User Created Successfully");

    } catch (error: any) {
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
    <div className="create-acc">
      <div className="acc-box">
        <Typography variant="h4">Create your account</Typography>
        <form className="form" onSubmit={handleSubmit(handleRegister)}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ""}
          />

          <TextField
            label="Phone number"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d+$/,
                message: "Please enter a valid phone number (digits only)",
              },
            })}
            error={!!errors.phone}
            helperText={errors.phone ? errors.phone.message : ""}
          />

          <div id="recaptcha-container"></div>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />

          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? errors.confirmPassword.message : ""
            }
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            CREATE ACCOUNT
          </Button>

          <Typography variant="body2" className="login-text" >
            You have an account? <span className="login" onClick={toggleAuth}>Login</span>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default RegisteInRailMadad;
