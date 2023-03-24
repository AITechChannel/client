//@ts-ignore

import { CKEditor } from '@ckeditor/ckeditor5-react';

//@ts-ignore
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

function Editor(props: any) {
  return (
    <>
      <div id='editor'></div>

      <CKEditor
        {...props}
        editor={DecoupledEditor}
        onReady={(editor: any) => {
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
          // this.editor = editor;
        }}
      />
    </>
  );
}

export default Editor;
