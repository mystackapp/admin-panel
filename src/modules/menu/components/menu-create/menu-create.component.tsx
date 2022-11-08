import React from 'react';
import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate: React.FC = () => (
  <Create>
    <SimpleForm>
      <TextInput name="title" source="title" fullWidth />
      <TextInput name="image" source="image" fullWidth />
      <TextInput name="ingredients" source="ingredients" fullWidth />
      <NumberInput name="price" source="price" />
      <NumberInput name="weight" source="weight" />
    </SimpleForm>
  </Create>
);
