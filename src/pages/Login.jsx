import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const login = e => {
    e.preventDefault();
    localStorage.setItem("username", username);
    navigate("/home");
  }

  useEffect(() => {
    if (localStorage.getItem("username")) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="font-[Roboto] h-screen flex justify-center items-center">
      <form onSubmit={login} className="w-[350px] p-6 flex flex-col gap-y-4 rounded outline outline-1 shadow-md shadow-slate-400 outline-slate-200">
        <h1 className="text-center text-xl font-bold text-slate-500">User Login</h1>
        <div className="">
          <input onChange={e => setUsername(e.target.value)} className="w-full p-2 rounded outline outline-1 outline-sky-400 placeholder:text-slate-400" type="text" placeholder="Username" />
        </div>
        <button className="py-2 text-center font-medium rounded duration-150 hover:bg-green-500 bg-green-400">Login</button>
      </form>
    </div>
  );
}

export default Login;
