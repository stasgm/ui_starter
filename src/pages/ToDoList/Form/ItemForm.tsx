import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { v1 as uuid } from 'uuid';

// import { Calendar } from './Calendar';
import { useStore } from '../../../store/App/store';
import { IItem } from '../types';
import { useParams } from 'react-router-dom';
import Page from '../../../components/ui/Page';
import Button from '../../../components/ui/Button';

export interface IForm {
  title: string;
  date: string;
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const Input = styled.input`
  width: 100%;
`;

const FieldName = styled.div`
  width: 100px;
`;

const ItemForm = () => {
  const { id: itemkey } = useParams<{ id: string }>();
  const { state, actions } = useStore();
  const history = useHistory();

  const [form, setForm] = useState<IItem>({
    title: 'new item',
    date: new Date().toISOString().slice(0, 10),
    completed: false,
    key: uuid(),
  });

  useEffect(() => {
    if (!itemkey) {
      return;
    }

    const item: IItem | undefined = state.items.find((i) => i.key === itemkey);

    item && setForm(item);
  }, [itemkey]);

  const handleSave = () => {
    actions.editItem(form);
    history.goBack();
  };

  return (
    <Page title="Edit item">
      <Title>
        <Field>
          <FieldName>
            <h4>Name:</h4>
          </FieldName>
          <Input
            name="name"
            title="Name"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </Field>
        <div>
          <Button variant="blue" style={{ margin: '5px' }} onClick={handleSave}>
            <i className={'fas fa-check'}></i>
          </Button>
          <Button variant="red" style={{ margin: '5px' }} onClick={history.goBack}>
            <i className="fas fa-times"></i>
          </Button>
        </div>
      </Title>
    </Page>
  );
};

export { ItemForm };
