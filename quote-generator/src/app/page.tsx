'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { quotes } from '@/data/quotes';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([]);

  const handleSubmit = () => {
    const matched = quotes
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.quote);

    setFilteredQuotes(matched);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Quote Generator</h1>
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <Input
          placeholder="Enter topic (e.g. life, motivation)"
          value={topic}
          onChange={e => setTopic(e.target.value)}
        />
        <Button onClick={handleSubmit}>Generate</Button>
      </div>
      <div className="space-y-4 text-center">
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((quote, index) => (
            <p key={index} className="text-lg italic">"{quote}"</p>
          ))
        ) : (
          <p className="text-gray-500">Enter a topic to get quotes</p>
        )}
      </div>
    </main>
  );
}
