import { QueryClientProvider } from 'react-query';
import './App.css';
import { queryClient } from 'config/api';
import { Weather } from 'pages/Weather';

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Weather />
      </QueryClientProvider>
    </div>
  );
}

export default App;
