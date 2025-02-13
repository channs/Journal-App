import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { entriesApi } from '../services/api';

function ViewEntry() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: entry, isLoading, error } = useQuery({
    queryKey: ['entry', id],
    queryFn: () => entriesApi.getById(id),
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div>Loading entry...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        <div>Error loading entry: {error.message}</div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Entry not found</h2>
        <button onClick={() => navigate('/')}>
          Back to Entries
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button
        onClick={() => navigate('/')}
        className="back-link"
      >
        ← Back to Entries
      </button>

      <article className="card">
        <header>
          <h1>{entry.title}</h1>
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
        </header>

        <div style={{ marginTop: '2rem' }}>
          {entry.content.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}

export default ViewEntry;
