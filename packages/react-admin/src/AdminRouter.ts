import { CoreAdminRouter } from 'ra-core';
import { Loading } from 'ra-ui-materialui';
import { FunctionComponent } from 'react';

const AdminRouter = CoreAdminRouter;

AdminRouter.defaultProps = {
    loading: Loading as FunctionComponent,
};

export default AdminRouter;
