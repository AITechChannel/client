import Button from '@/components/ui/button';
import Editor from '@/components/ui/editor';
import Modal from '@/components/ui/modal';
import React, { useState } from 'react';
import useNote from '../../hooks/useNote';
import { useFormik } from 'formik';
import styles from './style.module.scss';

function Create() {
  const { showModal, toggleModalAddNote, createNote } = useNote();
  const [dataEditor, setDataEditor] = useState<any>('');

  const handleChangeEditor = (e: any, editor: any) => {
    const data = editor.data.get();
    setDataEditor(data);
  };

  const validate = (values: any) => {
    const errors = {};
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    validate,
    onSubmit: (values) => {
      createNote({ ...values, content: dataEditor });
    }
  });

  return (
    <Modal onCancel={toggleModalAddNote} visible={showModal.addNote}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='title'>
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
        <Button htmlType='submit'>Tao moi</Button>
      </form>
    </Modal>
  );
}

export default Create;
