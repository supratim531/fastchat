import React, { useContext } from 'react';
import RootContext from '../contexts/RootContext';

function MessageBar() {
  const rootContext = useContext(RootContext);

  return (
    <form onSubmit={rootContext.sendMessage} className="flex">
      <div className="w-full break-all">
        <textarea onChange={e => rootContext.setMessage(e.target.value)} className="px-4 pt-4 w-full rounded border border-slate-200 shadow shadow-slate-400 focus:outline-none" rows={2}></textarea>
      </div>
      <div className="mx-4 self-center">
        <button type="submit" className="">
          <i className="fa-solid fa-paper-plane text-2xl text-blue-600"></i>
        </button>
      </div>
      <div className="self-center">
        <button type="button" onClick={() => {
          localStorage.clear();
          rootContext.navigate("/login");
        }}>
          <i className="fa-solid fa-power-off text-2xl text-red-600"></i>
        </button>
      </div>
    </form>
  );
}

export default MessageBar;
