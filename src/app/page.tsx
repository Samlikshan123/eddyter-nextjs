'use client'
import Eddyter from "@/components/eddyter";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState()
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Eddyter onChange={setContent} />
      <div><div dangerouslySetInnerHTML={{ __html: content }} /></div>
    </div>
  );
}
