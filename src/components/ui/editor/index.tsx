import React, { Component } from 'react';
//@ts-ignore

import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

//@ts-ignore
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//@ts-ignore

import Bold from '@ckeditor/ckeditor5-table';
//@ts-ignore
import Context from '@ckeditor/ckeditor5-core/src/context';

// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

function Editor() {
  DecoupledEditor.create(document.querySelector('#editor'))
    .then((editor: any) => {
      console.log('Editor was initialized', editor);

      // Append the toolbar to the <body> element.
      document.body.appendChild(editor.ui.view.toolbar.element);
    })
    .catch((err: any) => {
      console.error(err.stack);
    });

  return (
    <div>
      <h2>Using CKEditor 5 from source in React</h2>
      <CKEditor
        editor={DecoupledEditor}
        config={{
          // plugins: [Bold],
          toolbar: ['bold', 'italic']
        }}
        data='<p>Hello from CKEditor 5!</p>'
      />
    </div>
  );
}

export default Editor;
