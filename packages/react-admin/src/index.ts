import Admin from './Admin';
import AdminUI from './AdminUI';
import AdminContext from './AdminContext';
import AdminRouter from './AdminRouter';
import defaultI18nProvider from './defaultI18nProvider';

export * from 'ra-core';
/**
 * TODO: ra-core and ra-ui-materialui are both export Notification, Pagination.
 * Remove @ts-ignore comment after resolving the issue
 */
// @ts-ignore
export * from 'ra-ui-materialui';
export { Admin, AdminContext, AdminRouter, AdminUI, defaultI18nProvider };
