import React from 'react';
import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const MenuList: React.FC = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <NumberField source="price" />
    </Datagrid>
  </List>
);
