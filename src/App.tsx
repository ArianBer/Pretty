import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from "react-query";

const config = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App bg-black h-4 w-11">
      <ToastContainer {...config} />
      <QueryClientProvider client={queryClient}>

      </QueryClientProvider>
    </div>
  );
}

export default App;
