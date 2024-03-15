import React, { useContext } from 'react';
import Content from "../components/Content";
import MessageBar from '../components/MessageBar';
import RootContext from '../contexts/RootContext';

function Home() {
  const rootContext = useContext(RootContext);

  return (
    <div>
      <div className="chat-section font-[Roboto] m-4 p-4 h-[76vh] flex flex-col gap-1 overflow-y-scroll rounded shadow shadow-slate-400">
        {
          rootContext.messages?.map((message, index) => (
            <Content key={index} message={message} />
          ))
        }
      </div>
      <div className="message-bar p-4 w-full absolute bottom-0">
        <MessageBar />
      </div>
    </div>
  );
}

export default Home;
