import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { entriesApi } from '../services/api';

function EntriesList() {
  const { data: entries = [], isLoading, error } = useQuery({
    queryKey: ['entries'],
    queryFn: entriesApi.getAll,
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div>Loading entries...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        <div>Error loading entries: {error.message}</div>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>No entries yet</h2>
        <Link to="/entries/new" className="btn">
          Create your first entry
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Journal Entries</h1>
      <div>
        {entries.map((entry) => (
          <Link
            key={entry.id}
            to={`/entries/${entry.id}`}
            className="card"
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div>
              <h2>{entry.title}</h2>
              <p>{entry.content}</p>
            </div>
            <div className="entry-meta">
              <span>
                {new Date(entry.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>•</span>
              <span className="entry-category">{entry.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EntriesList;
