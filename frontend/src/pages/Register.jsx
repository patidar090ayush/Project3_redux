import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { asyncregisteruser } from "../store/actions/userActions";
import { asyncregisteruser } from "../store/actions/userActions.jsx";
import { useDispatch } from "react-redux";
const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const RegisterHandler = async (user) => {
    user.id = nanoid();
    console.log(user);
    user.isAdmin = false;
    await dispatch(asyncregisteruser(user));
    navigation("/login");
    // reset();
  };
  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
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
         Register
      </button>
      <Link to="/login" className="text-blue-500 hover:underline">
        Already have an account? Login here.
      </Link>
    </form>
  );
};

export default Register;
