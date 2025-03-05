// src/Tiptap.tsx
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useCurrentEditor } from '@tiptap/react'


// define your extension array
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  const { editor } = useCurrentEditor()
  return (
    <>
    <EditorProvider extensions={extensions} content={content} slotAfter>
      <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
    </EditorProvider>
    <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>

    </>
  )
}

export default Tiptap

