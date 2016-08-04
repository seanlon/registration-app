// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/visitor',
      name: 'visitor',
      getComponent(nextState, cb) {
       
        const importModules = Promise.all([
          System.import('containers/visitor'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
 


    {
      path: '/visitor/login',
      name: 'visitorlogin',
      getComponent(nextState, cb) {
 
        const importModules = Promise.all([
          System.import('containers/VisitorLogin/reducer'), 
          System.import('containers/VisitorLogin'),
        ]);

        const renderRoute = loadModule(cb);
        importModules.then(([reducer,   component]) => { 
          injectReducer('login', reducer.default);  
          renderRoute(component);
        });
 

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/visitor/logout',
      name: 'visitorlogout',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/VisitorLogout'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/manager',
      name: 'manager',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Manager'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/manager/dashboard',
      name: 'managerdashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ManagerDashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/manager/log',
      name: 'managerlog',
      getComponent(nextState, cb) {
 
        const importModules = Promise.all([
          System.import('containers/ManagerLog'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([ component]) => { 
          renderRoute(component);
        });


        importModules.catch(errorLoading);
      },
    },
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);  

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, 
 

    {
      path: '*',
      name: 'notfound', 
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];
}
