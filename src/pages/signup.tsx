import { useState } from "react";
import { useSignUpMutation } from "../redux/features/authApi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signUp, { isLoading, isError, isSuccess }] = useSignUpMutation();
  console.log( isLoading, isError, isSuccess)
  const [userObj, setUserObj] = useState({})
  const navigate = useNavigate();

  const signUpHandler = async () => {
   
    const data: any = await signUp(userObj)
    console.log('this is data', data?.data)
    if(data?.data?.result?.email){
      localStorage.setItem('token', JSON.stringify(data?.data?.token))
     setTimeout(() => {
      navigate('/')
     },1000)
    }
  }

    return (
      <div className="mt-52 mx-36">
          <h4 className="text-6xl font-bold text-blue-700">Create Your Account</h4>
          <div className="border border-4 border-blue-600 mt-16 p-7 w-6/12 rounded">
              <div>
                <label className="text-blue-700 font-bold">Your Name</label>
                <input  onChange={(e) => {
                  setUserObj({...userObj, userName: e.target.value})
                }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded"  placeholder="Enter Name"/>
              </div>
              <div className="mt-4">
                <label className="text-blue-700 font-bold">Email</label>
                <input type="email" onChange={(e) => {
                  setUserObj({...userObj, email: e.target.value})
                }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded" placeholder="Enter Email"/>
              </div>
              <div className="mt-4">
                <label className="text-blue-700 font-bold">Password</label>
                <input type="password"  onChange={(e) => {
                  setUserObj({...userObj, password: e.target.value})
                }} className="block mt-4 border border-1 border-gray-600 w-80 p-2 rounded"  placeholder="Enter Password"/>
              </div>
              <button  onClick={() => signUpHandler()} className="rounded-full bg-sky-400 py-2 px-4 mt-4 text-white font-bold">Sign up</button>
          </div>
      </div>
    );
  };
  
  export default SignUp;