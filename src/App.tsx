import React, { useEffect, useState } from 'react';
import { Admin, DataProvider, Loading, Resource } from 'react-admin';
import { CssBaseline } from '@mui/material';
import buildHasuraProvider from 'ra-data-hasura';
import { MenuList } from './modules/menu/components/menu-list/menu-list.component';
import { MenuEdit } from './modules/menu/components/menu-edit/menu-edit.conponent';
import { MenuCreate } from './modules/menu/components/menu-create/menu-create.component';

export const App: React.FC = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );

  useEffect(() => {
    const buildDataProvider = async (): Promise<void> => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: { uri: 'http://localhost:8080/v1/graphql' },
      });
      setDataProvider(() => dataProvider);
    };
    void buildDataProvider();
  }, []);

  if (dataProvider == null) return <Loading />;

  return (
    <>
      <CssBaseline />
      <Admin dataProvider={dataProvider}>
        <Resource
          name="menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
        />
      </Admin>
    </>
  );
};
