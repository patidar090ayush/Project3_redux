import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const LoginHandler = (data) => {
    // data.id = nanoid();
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="flex flex-col gap-4 w-75 mx-auto mt-10"
    >
      <input
        {...register("username")}
        className="border border-gray-300 rounded-md p-2"
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email")}
        className="border border-gray-300 rounded-md p-2"
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password")}
        className="border border-gray-300 rounded-md p-2"
        type="password"
        placeholder="Password"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        type="submit"
      >
        Login
      </button>
      <Link to="/register" className="text-blue-500 hover:underline">
        Don't have an account? Register here.
      </Link>
    </form>
  );
};

export default Login;
