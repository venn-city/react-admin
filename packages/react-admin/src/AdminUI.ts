import { CoreAdminUI } from 'ra-core';
import {
    Layout as DefaultLayout,
    Loading,
    Login,
    Logout,
    NotFound,
} from 'ra-ui-materialui';
import { FunctionComponent } from 'react';

const AdminUI = CoreAdminUI;

AdminUI.defaultProps = {
    layout: DefaultLayout,
    catchAll: NotFound,
    loading: Loading as FunctionComponent,
    loginPage: Login as FunctionComponent,
    logout: Logout,
};

AdminUI.displayName = 'AdminUI';

export default AdminUI;
