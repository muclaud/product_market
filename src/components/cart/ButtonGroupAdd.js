import React from 'react';
import { Button, Icon, Item, Form } from 'semantic-ui-react';

export default function ButtonGroupAdd() {
  return (
    <Item.Content>
      <Form>
        <Form.Group>
          <Form.Input
            type='number'
            min='1'
            placeholder='kg'
            style={{ width: 70 }}
          />
          <Form.Button animated='vertical' color='grey'>
            <Button.Content visible>Add</Button.Content>
            <Button.Content hidden>
              <Icon name='plus' />
            </Button.Content>
          </Form.Button>
        </Form.Group>
      </Form>
    </Item.Content>
  );
}
