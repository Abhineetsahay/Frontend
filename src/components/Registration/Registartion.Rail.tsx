import React from "react";
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

const RegisteInRailMadad: React.FC<RegisteInRailMadadProps> = ({ toggleAuth }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const handleRegister = async (data: FormData) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate('/dashboard');
      toast.success("User Created Successfully");
    } catch (error: any) {
      const errorMessage = getErrorMessage(error.code);
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
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-red-100 p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6">Create your account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          <div>
            <input
              type="text"
              placeholder="Username"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone number"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Please enter a valid phone number (digits only)",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            CREATE ACCOUNT
          </button>

          <p className="text-center text-gray-600 mt-4">
            You have an account?{" "}
            <span
              className="text-red-600 cursor-pointer hover:underline"
              onClick={toggleAuth}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisteInRailMadad;
