import {  useCurrentEditor } from '@tiptap/react'
import {  useEffect, useState } from 'react'

import { Icon } from "@iconify/react";

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { editor } = useCurrentEditor()
  
    if (!editor) {
      return null
    }

    const handleOpenHeadings = () => {
        setIsOpen(!isOpen)
        }

    const handleHeading = (level: any) => {
        editor.chain().focus().toggleHeading({ level }).run()
        setIsOpen(false)
        }

    interface CloseHeadingsEvent extends Event {
        target: HTMLElement;
    }

    const closeHeadings = (e: MouseEvent) => {
        if (e.target !== document.querySelector('.heading-group-title')) {
            setIsOpen(false);
        }
    }


    useEffect(() => {
        document.addEventListener('click',  closeHeadings)
        return () => {
          document.removeEventListener('click', closeHeadings)
        }
    },)
  
    return (
      <div className="control-group">
        <div className="button-group">
        <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .undo()
                .run()
            }
          >
            <Icon icon="material-symbols:undo-rounded"  />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
          >
            <Icon icon="material-symbols:redo-rounded"  />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            <Icon icon="octicon:bold-16" width="16" height="16" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <Icon icon="oi:italic"  />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            <Icon icon="mdi:format-strikethrough"  />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={
              !editor.can()
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            className={editor.isActive('code') ? 'is-active' : ''}
          >
            <Icon icon="mdi:code"  />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
          >
            <Icon icon="fe:list-bullet"  />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
            <Icon icon="octicon:list-ordered-16"  />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? 'is-active' : ''}
          >
            <Icon icon="fluent:code-block-32-regular"  />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : ''}
          >
            <Icon icon="clarity:block-quote-line"  />
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') ? 'is-active' : ''}
          >
            <Icon icon="mdi:format-paragraph" width="24" height="24" />
          </button>
          <div className='heading-group'>
            <button onClick={handleOpenHeadings} className='heading-group-title'>Headings <Icon icon="ri:arrow-drop-down-line"  /></button>
            {isOpen && (
            <div className='heading-buttons'>
        <button
        onClick={() => handleHeading(1)}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            Heading 1
          </button>
          <button
            onClick={() => handleHeading(2)}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            Heading 2
          </button>
          <button
            onClick={() => handleHeading(3)}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          >
            Heading 3
          </button>
          <button
            onClick={() => handleHeading(4)}
            className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
          >
            Heading 4
          </button>
          <button
            onClick={() => handleHeading(5)}
            className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
          >
            Heading
          </button>
          <button
            onClick={() => handleHeading(6)}
            className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
          >
            Heading 6
          </button>
            </div>
            )}
          </div>
        
          <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            Clear marks
          </button>
          <button onClick={() => editor.chain().focus().clearNodes().run()}>
            Clear nodes
          </button>
        
          <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            Horizontal rule
          </button>
          <button onClick={() => editor.chain().focus().setHardBreak().run()}>
            Hard break
          </button>
         
          <div>
            <button
               
                className={` ${editor.isActive('textStyle', { color: '#958DF1' }) ? '' : ''} noFillButton` }
            >
                Color
                <input
                type="color"
                onChange={(event) => editor.chain().focus().setColor(event.target.value).run()}
            />
            </button>

           
            </div>
        </div>
      </div>
    )
  }


  export default MenuBar