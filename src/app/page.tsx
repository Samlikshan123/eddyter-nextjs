'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const Eddyter = dynamic(() => import('@/components/eddyter'), { ssr: false });

export default function Home() {
  const [content, setContent] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <Eddyter
        apiKey={process.env.NEXT_PUBLIC_API_KEY ?? ''}
        initialContent=""
        onChange={setContent}
        previewContent={content}
      />
    </div>
  );
}
