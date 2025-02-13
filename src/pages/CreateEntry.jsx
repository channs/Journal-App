import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { entriesApi } from '../services/api';

const CATEGORIES = [
  'technology',
  'delivery',
  'business',
  'team',
  'organization',
  'mindset'
];

function CreateEntry() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'technology'
  });

  const createEntryMutation = useMutation({
    mutationFn: entriesApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['entries']);
      navigate('/');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createEntryMutation.mutate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <h1>New Journal Entry</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter a title for your entry"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            placeholder="Write your journal entry here..."
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={createEntryMutation.isPending}
          >
            {createEntryMutation.isPending ? 'Saving...' : 'Save Entry'}
          </button>
        </div>

        {createEntryMutation.isError && (
          <div style={{ color: 'red', marginTop: '1rem' }}>
            Error creating entry: {createEntryMutation.error.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateEntry;
