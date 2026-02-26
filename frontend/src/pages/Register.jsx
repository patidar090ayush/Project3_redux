import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    console.log(user);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="flex flex-col gap-4 w-75 mx-auto mt-10"
    >
     
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
      <Link to="/login" className="text-blue-500 hover:underline">
        Already have an account? Login here.
      </Link>
    </form>
  );
};

export default Register;
