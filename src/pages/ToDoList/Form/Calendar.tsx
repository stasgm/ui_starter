import React from 'react';
import { Col, DatePicker, Form } from 'antd';

interface IProps {
  setDate: (date: string) => void;
}

export const Calendar = ({ setDate }: IProps) => (
  <Col>
    <Form.Item className="CalendarLabel" label="Select a date" name="Select a date">
      <DatePicker onChange={(_, dateString) => setDate(dateString)} />
    </Form.Item>
  </Col>
);
