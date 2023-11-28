import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=' h-full w-full bg-blue-200 flex flex-col overflow-hidden'>
      <div className=' h-[80px] min-h-[80px] border-b-2 border-blue-600 bg-white sticky top-0 flex items-center leading-[0] p-1'>
        <p className=' text-5xl font-bold text-gray-800 leading-[0]'>Chattooo</p>
      </div>
      <div className=' w-full grow flex flex-col overflow-hidden'>
        <div className=' grow w-full p-4 overflow-auto'>

          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>
          <div className=' w-full h-[100px] rounded-lg border-2 border-blue-600'>
            sample
          </div>

        </div>
        <div className=' flex gap-2 pb-6 px-3'>
          <input className=' border-2 border-blue-500 rounded-lg h-14 pl-2  outline-2 outline-blue-600 grow '></input>
          <button className=' bg-green-400 hover:bg-green-500 rounded-lg h-14 w-24 font-bold'>Sent</button>
        </div>
      </div>

    </div>
  );
}

export default App;
