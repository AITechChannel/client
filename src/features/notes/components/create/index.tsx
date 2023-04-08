import Button from '@/components/ui/button';
import Editor from '@/components/ui/editor';
import Modal from '@/components/ui/modal';
import React, { useEffect, useRef, useState } from 'react';
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
    categoryList,
    updateCategory
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

  const inputEl = useRef<HTMLInputElement>(null);

  const categoryListRenderInit = categoryList.map((category) => {
    console.log(category);
    return {
      ...category,
      contentEdit: category.label,
      icon: (
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles['action-dropdown-wrapper']}
        >
          <input
            id={category.id}
            ref={inputEl}
            className='input-primary'
            value={category.contenEdit}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => handleInputCategory(category, e)}
          />
          <span
            onClick={() => handleActionCategory('EDIT_CATEGORY', category.id)}
          >
            <IconEdit />
          </span>
          <span onClick={() => {}}>
            <IconDelete />
          </span>
          <Button onClick={() => handleUpdateCategory(category.id)}>
            Save
          </Button>
        </div>
      )
    };
  });

  const [categoryListRender, setCategoryListRender] = useState<any>(
    categoryListRenderInit
  );
  console.log('🚀 ::: categoryListRender:', categoryListRender);

  const handleUpdateCategory = (id: string) => {
    updateCategory({ name: inputEl.current?.value, id });
  };

  const handleActionCategory = (action: any, id: string) => {
    // setCategoryListRender((prev: any) => {
    //   return prev.map((item: any) => {
    //     if (item.id !== id) return { ...item, showInput: false };
    //     return { ...item, showInput: true };
    //   });
    // });
  };
  const handleInputCategory = (category: any, e: any) => {
    setCategoryListRender((prev: any) => {
      return prev.map((item: any) => {
        if (item.id !== category.id) return { ...item, showInput: false };
        return { ...item, showInput: true, contentEdit: e.target.value };
      });
    });
  };

  useEffect(() => {
    setCategoryListRender(categoryListRenderInit);
  }, [categoryList]);

  // const handleActionCategory = (category: any, aciton: string) => {
  //   if ((aciton = 'EDIT_CATEGORY')) {
  //     setcategoryListRender((prev) => {
  //       return prev.map((item) => {
  //         if (category.id !== item.id) return { ...item, form: null };
  //         if (item.form) return { ...item, form: null };

  //         return {
  //           ...item,
  //           form: (
  //             <input
  //               id={item.id}
  //               ref={inputEditEl}
  //               className='input-primary'
  //               defaultValue={item.label}
  //               onClick={(e) => e.stopPropagation()}
  //               onChange={(e) => handleOnChangeEdit(category, e)}
  //             />
  //           )
  //         };
  //       });
  //     });
  //   }
  // };

  // const handleSubmitUpdateCategory = (id: string) => {
  //   updateCategory({ name: valueEdit, id });
  // };

  // const handleOnChangeEdit = (category: any, e: any) => {
  //   if (!inputEditEl?.current) return;
  //   inputEditEl.current.value = e.target.value;
  //   setValueEdit(e.target.value);
  // };

  useEffect(() => {
    fetchCategoryList({});
  }, []);

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
