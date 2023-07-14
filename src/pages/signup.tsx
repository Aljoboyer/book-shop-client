
const SignUp = () => {

    return (
      <div className="mt-52 mx-36">
          <h4 className="text-6xl font-bold text-blue-700">Create Your Account</h4>
          <div className="border border-4 border-blue-600 mt-16 p-7 w-6/12 rounded">
              <div>
                <label className="text-blue-700 font-bold">Email</label>
                <input className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded" placeholder="Enter Email"/>
              </div>
              <div className="mt-4">
                <label className="text-blue-700 font-bold">Password</label>
                <input  className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded"  placeholder="Enter Password"/>
              </div>
              <button className="rounded-full bg-sky-400 py-2 px-4 mt-4 text-white font-bold">Sign up</button>
          </div>
      </div>
    );
  };
  
  export default SignUp;