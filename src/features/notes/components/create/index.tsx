import Button from '@/components/ui/button';
import Editor from '@/components/ui/editor';
import Modal from '@/components/ui/modal';
import React, { useEffect, useState } from 'react';
import useNote from '../../hooks/useNote';
import { useFormik } from 'formik';
import styles from './style.module.scss';
import { ACTION } from '../../utils/constant';
import Select from '@/components/ui/select';
import IconEdit from '@/components/ui/icons/IconEdit';
import IconDelete from '@/components/ui/icons/IconDelete';

function Create() {
  const {
    action,
    showModal,
    toggleModalAddNote,
    createNote,
    detailNote,
    updateNote,
    createCategory,
    fetchCategoryList,
    categoryList
  } = useNote();
  const [dataEditor, setDataEditor] = useState<any>('');
  const [categoryName, setCategoryName] = useState<any>('');
  const [initialValues, setInitialValues] = useState<any>({
    title: '',
    content: ''
  });

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

  const handleCategorySubmit = () => {
    createCategory({ name: categoryName });
    setCategoryName('');
  };

  useEffect(() => {
    if (!detailNote) return;
    if (action.name === ACTION.Edit) {
      setInitialValues(detailNote);
      setDataEditor(detailNote.content);
    }
  }, [action, detailNote]);

  const categoryListIcon = categoryList.map((category) => ({
    ...category,
    contentEdit: category.label,
    icon: (
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles['action-dropdown-wrapper']}
      >
        <span onClick={() => handleActionCategory(category, 'EDIT_CATEGORY')}>
          <IconEdit />
        </span>
        <span onClick={() => handleActionCategory(category, 'DELETE_CATEGORY')}>
          <IconDelete />
        </span>
      </div>
    )
  }));

  const [categoryListRender, setcategoryListRender] =
    useState(categoryListIcon);
  console.log('🚀 ::: categoryListRender:', categoryListRender);

  const [valueEdit, setValueEdit] = useState('');

  const handleActionCategory = (category: any, aciton: string) => {
    if ((aciton = 'EDIT_CATEGORY')) {
      setcategoryListRender((prev) => {
        return prev.map((item) => {
          if (category.id !== item.id) return { ...item, form: null };
          if (item.form) return { ...item, form: null };

          return {
            ...item,
            form: (
              <input
                className='input-primary'
                // defaultValue={item.label}
                value={item.contentEdit}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => handleOnChangeEdit(category, e)}
              />
            )
          };
        });
      });
    }
  };

  const handleOnChangeEdit = (category: any, e: any) => {
    setcategoryListRender((prev) => {
      return prev.map((item) => {
        if (!item.form) return item;
        return {
          ...item,
          contentEdit: e.target.value
        };
      });
    });
  };

  useEffect(() => {
    fetchCategoryList({});
  }, []);

  useEffect(() => {
    setcategoryListRender(categoryListIcon);
  }, [categoryList]);

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

        <label className={styles.title} htmlFor='Category'>
          <span>Category</span>
          <Select
            items={categoryListRender}
            itemChildren={
              <div className={styles['add-category-wrapper']}>
                <input
                  type='text'
                  className='input-primary'
                  placeholder='Category name'
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <Button onClick={handleCategorySubmit}>Add Category</Button>
              </div>
            }
          />
        </label>

        <div className={styles.editor}>
          <Editor onChange={handleChangeEditor} data={dataEditor} />
        </div>
        <Button style={{ float: 'right' }} htmltype='submit'>
          Create note
        </Button>
      </form>
    </Modal>
  );
}

export default Create;
