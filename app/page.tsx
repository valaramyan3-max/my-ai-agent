// app/page.tsx
'use client';

// Ensure the 'ai' package is installed: npm install ai --legacy-peer-deps
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m) => (
          <div key={m.id} className={`p-2 my-1 rounded ${m.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
            <strong className={m.role === 'user' ? 'text-blue-700' : 'text-gray-700'}>
              {m.role === 'user' ? 'You: ' : 'AI: '}
            </strong>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          placeholder="Type your message..."
          onChange={handleInputChange}
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}