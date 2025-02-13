import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import EntriesList from './pages/EntriesList';
import CreateEntry from './pages/CreateEntry';
import ViewEntry from './pages/ViewEntry';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Navbar />
          <main style={{ paddingTop: '2rem' }}>
            <Routes>
              <Route path="/" element={<EntriesList />} />
              <Route path="/entries/new" element={<CreateEntry />} />
              <Route path="/entries/:id" element={<ViewEntry />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
