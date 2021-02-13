import React from 'react';
// import { Table, Row, Col } from 'antd';

// import '../../assets/scss/App.scss';
// import 'antd/dist/antd.css';

import { useAppStore } from '../../store';
// import { FORM_COLUMNS } from '../../utils/constants/FORM_COLUMNS';
// import { AddTodoForm } from './AddTodoForm';
import Page from '../../components/ui/Page';
import ListItem from './Item';

const ToDoList = () => {
  const { state } = useAppStore();
  return (
    <Page title="To Do List">
      {state.items.map((item) => {
        console.log(item);
        return <ListItem item={item} key={item.key} />;
      })}
      {/*       <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={state.items} columns={FORM_COLUMNS} />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <AddTodoForm />
        </Col>
      </Row> */}
    </Page>
  );
};

export default ToDoList;
