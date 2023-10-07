import { Link } from "react-router-dom";
import useAuth from "../../utils/UseContext";

const Register = () => {
      const {createUser} = useAuth()

      
      const handleSignUp = (e) => {
            
            e.preventDefault();
            const frmData = new FormData(e.target);
            const name = frmData.get('name');
            const email = frmData.get('email');
            const imgURL = frmData.get('imgURL');
            const password = frmData.get('password');
          

            createUser(email,password)
            .then((res)=> console.log(res.user))
            .catch(err => console.log(err.message))
          };
  return (
      <div>
      <img src="" alt="" />
      <form
        onSubmit={handleSignUp}
        className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
        <div className="flex w-full flex-col gap-2">
          <p className="text-3xl font-bold">Sign up</p>
        </div>

        <div className="form-group">
          <div className="form-field">
            <label className="form-label pt-4">Name</label>
            <input
              name='name'
              placeholder="Type here"
              type="text"
              className="input max-w-full"
            />
            <label className="form-label">
            </label>
          </div>
          </div>
          <div className="form-group">
          <div className="form-field">
            <label className="form-label pt-4">Email address</label>
            <input
              placeholder="Type here"
              type="email"
              name='email'
              className="input max-w-full"
            />
            <label className="form-label">
            </label>
          </div>

          <div className="form-field">
            <label className="form-label">
              <span>Image URL</span>
            </label>
            <div className="form-control">
              <input
                placeholder="paste here"
                type="text"
                name='imgURL'
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
                name='password'
                className="input max-w-full"
              />
            </div>
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
                Sign up
              </button>
            </div>
          </div>

          <div className="form-field">
            <div className="form-control">
           
              <Link to='/sign-in' className="link link-underline-hover link-primary text-sm">
                Already have an account? Sign in</Link> 
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
