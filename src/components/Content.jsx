import React, { useContext } from 'react';
import RootContext from '../contexts/RootContext';

function Content({ message }) {
  const rootContext = useContext(RootContext);

  if (message?.type === "join") {
    return (
      <div className="text-center">
        <span className="px-2 py-1 text-sm rounded-full text-slate-600 bg-zinc-200">{message?.user} {message?.data}</span>
      </div>
    );
  } else if (message?.type === "chat") {
    return (
      <div className={(rootContext.username !== message?.user) ? "flex justify-start" : "flex justify-end"}>
        <div style={{ backgroundColor: (rootContext.username !== message?.user) ? "white" : "#d9fdd3" }} className="max-w-[90%] px-2 py-1 rounded shadow-sm shadow-slate-400">{message?.data}</div>
        {
          (rootContext.username !== message?.user) &&
          <div className="relative">
            <div className="absolute px-0.5 text-[10px] top-0 left-1 rounded-full bg-slate-100">{message?.user}</div>
          </div>
        }
      </div>
    );
  }
}

export default Content;
