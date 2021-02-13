import React from 'react';
import { Col, Form, Input } from 'antd';
import { TagsOutlined } from '@ant-design/icons';
import { IForm } from './AddTodoForm.component';

interface IProps {
  setForm: (form: IForm) => void;
  value: IForm;
}

export const FormInput = ({ setForm, value }: IProps) => (
  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
    <Form.Item label="Title" name="title">
      <Input
        value={value.title}
        prefix={
          <TagsOutlined /> // Icon
        }
        onChange={(e) => {
          setForm({ ...value, title: e.target.value });
        }}
      />
    </Form.Item>
  </Col>
);
