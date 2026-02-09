'use client';

import dynamic from 'next/dynamic';

const Eddyter = dynamic(() => import('@/components/eddyter'), { ssr: false });

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Eddyter />
    </div>
  );
}
