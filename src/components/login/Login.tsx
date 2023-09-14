import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-gradient-to-b from-blue-400 to-emerald-500 opacity-75 inset-0 z-0"></div>
            <div className="w-full max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Music
              </div>
              <div className="sm:text-md xl:text-xl text-gray-200 font-normal">
                {" "}
                {isLogin
                  ? " To keep connected with us please login with your personl info"
                  : "Enter your personal details and start your journey with us"}
              </div>
            </div>
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-4xl font-bold text-gray-900">
                  {isLogin ? "Welcome back!" : "Create Account"}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please enter your details
                </p>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                <input type="hidden" name="remember" value="true" />
                {isLogin ? (
                  ""
                ) : (
                  <div className="relative">
                    <div className="absolute right-3 mt-4"></div>
                    <label className="ml-3 text-sm font-bold text-gray-600 tracking-wide">
                      Username
                    </label>
                    <input
                      className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-emerald-500"
                      type="text"
                      placeholder="Enter your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                )}
                <div className="relative">
                  <div className="absolute right-3 mt-4"></div>
                  <label className="ml-3 text-sm font-bold text-gray-600 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-emerald-500"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-600 tracking-wide">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full content-center text-base px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-emerald-500"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      style={{ color: "#4b5563" }}
                      className="absolute top-3 right-3 cursor-pointer"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  </div>
                </div>
                {isLogin ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="text-emerald-500 hover:text-emerald-600"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 content-center">
                    <label className="ml-3 text-sm font-bold text-gray-600 tracking-wide">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        className="w-full content-center text-base px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-emerald-500"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Enter your password again"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <FontAwesomeIcon
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                        style={{ color: "#4b5563" }}
                        className="absolute top-3 right-3 cursor-pointer"
                        onClick={() => {
                          setShowConfirmPassword(!showConfirmPassword);
                        }}
                      />
                    </div>
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-gradient-to-r from-emerald-400 to-emerald-400 text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer"
                  >
                    {isLogin ? "Login" : "Sign up"}
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <span
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-emerald-500 hover:text-emerald-600 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    {isLogin ? "Sign up" : "Login"}
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
