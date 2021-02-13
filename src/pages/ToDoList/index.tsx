import React from 'react';
import { Table, Row, Col } from 'antd';

import '../../assets/scss/App.scss';
import 'antd/dist/antd.css';

import { useAppStore } from '../../store';
import { FORM_COLUMNS } from '../../utils/constants/FORM_COLUMNS';
import { AddTodoForm } from './Form/AddTodoForm.component';
import Page from '../../components/ui/Page';

const ToDoList = () => {
  const { state } = useAppStore();
  return (
    <Page title="To Do List">
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={state.items} columns={FORM_COLUMNS} />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <AddTodoForm />
        </Col>
      </Row>
    </Page>
  );
};

export default ToDoList;
