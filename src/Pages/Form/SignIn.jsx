import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../utils/UseContext";
import { useState } from "react";
import { doesNotContainCapitalLetter, doesNotContainSpecialCharacter, isShorterThanSixCharacters } from "../../utils/Validation";

const SignIn = () => {
  const { logIn,googleSignIn } = useAuth();
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  

// || LOGIN HANDLER
  const handleLogin = (e) => {
    
    e.preventDefault();
    const frmData = new FormData(e.target);
    const email = frmData.get("email");
    const password = frmData.get("password");
    
    // Validation
    console.log(password.length < 6)

if(password.length < 6) {
  setError('Password must be at least 6 characters long.');
  return;
}
 if (doesNotContainSpecialCharacter(password)) {
  setError('Password must contain at least one special character.');
  return;
}
 if (doesNotContainCapitalLetter(password)) {
  setError('Password must contain at least one capital letter.');
  return;
}


      logIn(email, password)
      .then(() => navigate(location.state? location.state: '/'))
      .catch((err) => setError(err.message));
  };


  // || SOCIAL SIGN IN
  const handleMediaSignIn = media => {
      media()
      .then(() => navigate(location.state? location.state: '/'))
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="flex pt-11">
      <form
        onSubmit={handleLogin}
        className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
        <div className="flex w-full flex-col gap-2">
          <p className="text-3xl font-bold">Sign in with</p>
        </div>

        <div className="form-group">
          <div className="form-field">
            <label className="form-label pt-4">Email address</label>

            <input
              placeholder="Type here"
              type="email"
              name="email"
              className="input max-w-full"
            />
            <label className="form-label">
              <span className="form-label-alt">
                Please enter a valid email.
              </span>
            </label>
          </div>
          <div className="form-field">
            <label className="form-label">
              <span>Password</span>
            </label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                name="password"
                className="input max-w-full"
              />
            </div>
          </div>
          <div>
            <p className="text-red-400">{error && error}</p>
          </div>
          <div className="form-field">
            <div className="form-control justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="checkbox" />
                <a href="#">Remember me</a>
              </div>
              <label className="form-label">
                <a className="link link-underline-hover link-primary text-sm">
                  Forgot your password?
                </a>
              </label>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
                Sign in
              </button>
            </div>
          </div>

          <div className="form-field">
            <div className="form-control">
              <Link
                to="/register"
                className="link link-underline-hover link-primary text-sm">
                Don&apos;t have an account? Sign up
              </Link>
            </div>
          </div>
          <div className="divider my-6 text-xs text-content2">
            or continue with
          </div>
          <div className="flex w-full flex-col gap-2">
            <button onClick={()=>handleMediaSignIn(googleSignIn)} type="button" className="btn gap-2 bg-gray-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 48 48"
                enablebackground="new 0 0 48 48"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <span>Sign up with google</span>
            </button>
          </div>
        </div>
      </form>
        <div className="hidden md:block">
        <img
          className="w-[100%] h-[100%]"
          src="https://img.freepik.com/free-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignIn;
