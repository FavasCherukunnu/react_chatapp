import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { socket } from './socket';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './index.css'
function App() {

  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  useEffect(
    () => {
      function onConnect() {
        // setIsConnected(true);
      }

      function onDisconnect() {
        // setIsConnected(false);
      }

      function onFooEvent(value) {
        setMessages(previous => [...previous, value]);
      }

      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
      socket.on('sent message', onFooEvent);

      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
        socket.off('sent message', onFooEvent);
      };
    }, []
  )

  function onChange(e) {
    setMessage(e.target.value)
  }

  function onSentMessage(e) {
    e.preventDefault()

    if (message !== '') {
      socket.emit("sent message", message)
    }

  }

  return (
    <div className=' h-full w-full bg-blue-200 flex flex-col overflow-hidden'>
      <div className=' h-[80px] min-h-[80px] border-b-2 border-blue-600 bg-white sticky top-0 flex items-center leading-[0] p-1'>
        <p className=' text-5xl font-bold text-gray-800 leading-[0]'>Chattooo</p>
      </div>
      <div className=' w-full grow flex flex-col overflow-hidden'>
        <div className=' grow w-full p-4 overflow-y-hidden'>

          <SimpleBar style={{
            overflow: 'auto',
            height: '100%',
          }}
            autoHide={false}
            scrollbarMaxSize={50}

          >
            <div className=' flex'>
              {
                messages.map(
                  message => (
                    <div className=' w-full h-[100px] min-w-[400px] rounded-lg border-2 border-blue-600 my-4'>
                      {message}
                    </div>
                  )
                )
              }
            </div>
          </SimpleBar>

        </div>
        <form className=' flex gap-2 pb-6 px-3' onSubmit={onSentMessage}>
          <input className=' border-2 border-blue-500 rounded-lg h-14 pl-2  outline-2 outline-blue-600 grow ' onChange={onChange}></input>
          <button type='submit' className=' bg-green-400 hover:bg-green-500 rounded-lg h-14 w-24 font-bold'>Sent</button>
        </form>
      </div>

    </div>
  );
}

export default App;
