import React from 'react';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuEdit: React.FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput name="id" source="id" disabled />
      <TextInput name="title" source="title" fullWidth />
      <TextInput name="image" source="image" fullWidth />
      <TextInput name="ingredients" source="ingredients" fullWidth />
      <NumberInput name="price" source="price" />
      <NumberInput name="weight" source="weight" />
    </SimpleForm>
  </Edit>
);
