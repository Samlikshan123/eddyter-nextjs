'use client';

import {
  ConfigurableEditorWithAuth,
  EditorProvider,
  defaultEditorConfig
} from 'eddyter';
import 'eddyter/style.css';

export default function Eddyter() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY!;




  return (
    <EditorProvider defaultFontFamilies={defaultEditorConfig.defaultFontFamilies}>
      <ConfigurableEditorWithAuth
        apiKey={apiKey}
        initialContent={"asdfjl;asdjf"}
      />
    </EditorProvider>
  );
}
