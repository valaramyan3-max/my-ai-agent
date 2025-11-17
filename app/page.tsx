'use client';
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>My AI Agent</h1>
      <div style={{ marginBottom: '1rem' }}>
        {messages.map(m => (
          <div key={m.id} style={{
            padding: '0.75rem',
            borderRadius: '8px',
            margin: '0.5rem 0',
            background: m.role === 'user' ? '#0070f3' : '#f0f0f0',
            color: m.role === 'user' ? 'white' : 'black',
            maxWidth: '80%',
            alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask AI..."
          style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '0.75rem 1rem', borderRadius: '8px', background: '#0070f3', color: 'white', border: 'none' }}>
          Send
        </button>
      </form>
    </div>
  );
}
