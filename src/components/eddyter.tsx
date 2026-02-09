
import {
  ConfigurableEditorWithAuth,
  EditorProvider,
  defaultEditorConfig
} from 'eddyter';
import 'eddyter/style.css';

export default function Eddyter(onChange) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY!;




  return (
    <EditorProvider defaultFontFamilies={defaultEditorConfig.defaultFontFamilies}>
      <ConfigurableEditorWithAuth
        apiKey={apiKey}
        onChange={onChange}
        initialContent={"asdfjl;asdjf"}
      />
    </EditorProvider>
  );
}
