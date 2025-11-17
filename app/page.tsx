'use client';
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>My AI Agent</h1>
      {messages.map(m => (
        <div key={m.id} style={{ margin: '0.5rem 0' }}>
          <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask AI..."
          style={{ width: '100%', padding: '0.5rem' }}
        />
        <button type="submit" style={{ marginTop: '0.5rem' }}>Send</button>
      </form>
    </div>
  );
}