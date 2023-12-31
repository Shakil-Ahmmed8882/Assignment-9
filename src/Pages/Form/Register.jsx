import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../utils/UseContext";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [error,setError] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault();
    const frmData = new FormData(e.target);
    const name = frmData.get("name");
    const email = frmData.get("email");
    const imgURL = frmData.get("imgURL");
    const password = frmData.get("password");

    updateUserProfile(name, imgURL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));

    // Validation
    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      setError("Password must contain at least one capital letter.");
      return;
    }
    if (!/^[a-zA-Z0-9]*$/.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }


    createUser(email, password)
      .then(() => {
        navigate('/')
        toast.success('Successfully created an account')
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="flex">

      <form
        onSubmit={handleSignUp}
        className="mx-auto mt-11 flex flex-1  max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
        <div className="flex w-full flex-col gap-2">
          <p className="text-3xl font-bold">Sign up</p>
        </div>

        <div className="form-group">
          <div className="form-field">
            <label className="form-label pt-4">Name</label>
            <input
              name="name"
              placeholder="Type here"
              type="text"
              className="input max-w-full"
            />
            <label className="form-label"></label>
          </div>
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
            <label className="form-label"></label>
          </div>

          <div className="form-field">
            <label className="form-label">
              <span>Image URL</span>
            </label>
            <div className="form-control">
              <input
                placeholder="paste here"
                type="text"
                name="imgURL"
                className="input max-w-full"
              />
            </div>
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
          <div className="form-field">
          </div>
          <div>
            <p className="text-red-400">{error && error}</p>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary  w-full">
                Sign up
              </button>
            </div>
          </div>
          <div className="form-field">
            <div className="form-control">
              <Link
                to="/sign-in"
                className="link link-underline-hover link-primary text-sm">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </form>
        <div className=" w-[600px] hidden md:block">
     <img className="w-full h-full object-cover" src="https://i.ibb.co/TTPfgZx/undraw-Access-account-re-8spm.png" alt="" />
     </div>
    </div>
  );
};

export default Register;
