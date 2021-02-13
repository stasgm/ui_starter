import React, { useState } from 'react';
import { Button, Form, Row, Typography } from 'antd';

import { v1 as uuid } from 'uuid';
import { openNotification } from '../../../utils/functions/openNotification';

import { Calendar } from './Calendar.component';
import { FormInput } from './FormInput.component';
import { useStore } from '../../../store/App/store';
import { IItem } from '../../../model';

const { Title } = Typography;

export interface IForm {
  title: string;
  date: string;
}

export const AddTodoForm = () => {
  const [form, setForm] = useState<IForm>({ title: 'new item', date: new Date().toISOString().slice(0, 10) });
  const [date, setDate] = useState<string>();
  const { actions } = useStore();

  const hasDate = date ? true : false;

  const formSubmit = () => {
    if (date && form?.title.length >= 5) {
      const item: IItem = { title: form.title, date: form.date, key: uuid(), completed: 'false' };
      actions.addItem(item);
    } else {
      openNotification('bottomLeft', 'Title must be a minimum of 5 letters');
    }
  };

  const handleSetForm = (newForm: IForm) => {
    setForm(newForm);
  };

  return (
    <>
      <Form onFinish={formSubmit}>
        <Title level={4}>Add TODO item</Title>
        <Row justify="center">
          <FormInput setForm={handleSetForm} value={form} />
          {form?.title.length >= 5 && <Calendar setDate={setDate} />}
          {form?.title.length < 5 && (
            <Title className="TitleLength" type="danger" level={4}>
              Length must be more than 5
            </Title>
          )}
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" block disabled={!hasDate}>
            Add TODO
          </Button>
        </Row>
      </Form>
    </>
  );
};
