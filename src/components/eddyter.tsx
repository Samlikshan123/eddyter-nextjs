'use client';

import {
  ConfigurableEditorWithAuth,
  ContentPreview,
  EditorProvider,
  defaultEditorConfig
} from 'eddyter';
import 'eddyter/style.css';

interface EddyterProps {
  apiKey: string;
  initialContent?: string;
  onChange?: (html: string) => void;
  /** HTML content to show in the preview (e.g. value from onChange) */
  previewContent?: string;
}

export default function Eddyter({
  apiKey,
  initialContent = '',
  onChange,
  previewContent = ''
}: EddyterProps) {
  return (
    <EditorProvider defaultFontFamilies={defaultEditorConfig.defaultFontFamilies}>
      <div className="flex w-full max-w-3xl flex-col gap-6">
        <ConfigurableEditorWithAuth
          apiKey={apiKey}
          initialContent={initialContent}
          onChange={onChange}
        />
        {previewContent ? (
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Preview
            </p>
            <ContentPreview content={previewContent} />
          </div>
        ) : null}
      </div>
    </EditorProvider>
  );
}
