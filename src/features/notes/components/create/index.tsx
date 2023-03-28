import Button from '@/components/ui/button';
import Editor from '@/components/ui/editor';
import Modal from '@/components/ui/modal';
import React, { useEffect, useState } from 'react';
import useNote from '../../hooks/useNote';
import { useFormik } from 'formik';
import styles from './style.module.scss';
import { ACTION } from '../../utils/constant';

function Create() {
  const {
    action,
    showModal,
    toggleModalAddNote,
    createNote,
    detailNote,
    updateNote
  } = useNote();
  const [dataEditor, setDataEditor] = useState<any>('');
  const [initialValues, setInitialValues] = useState<any>({
    title: '',
    content: ''
  });
  console.log('🚀 ::: initialValues:', initialValues);

  const handleChangeEditor = (e: any, editor: any) => {
    const data = editor.data.get();
    setDataEditor(data);
  };

  const validate = (values: any) => {
    const errors = {};
    return errors;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validate,
    onSubmit: (values) => {
      if (action.name === ACTION.Create) {
        createNote({ ...values, content: dataEditor });
      }

      if (action.name === ACTION.Edit) {
        updateNote({ ...values, content: dataEditor });
      }
    }
  });

  useEffect(() => {
    if (!detailNote) return;
    if (action.name === ACTION.Edit) {
      console.log('set');
      setInitialValues(detailNote);
      setDataEditor(detailNote.content);
    }
  }, [action, detailNote]);

  return (
    <Modal
      title={'Add your note'}
      onCancel={toggleModalAddNote}
      visible={showModal.addNote}
    >
      <form onSubmit={formik.handleSubmit}>
        <label className={styles.title} htmlFor='title'>
          <span>Title</span>
          <input
            className='input-primary'
            type='text'
            id='title'
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder='Title input'
          />
        </label>
        <div className={styles.editor}>
          <Editor onChange={handleChangeEditor} data={dataEditor} />
        </div>
        <Button htmltype='submit'>Create note</Button>
      </form>
    </Modal>
  );
}

export default Create;