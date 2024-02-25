import { QueryClientProvider } from 'react-query';
import './App.css';
import { queryClient } from 'config/api';

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <div>abc</div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
