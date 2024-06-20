import React, { useRef } from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
  setupIonicReact,
  IonButton,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { menuOutline, triangle, ellipse, square } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Employee from './pages/Employee';
import Attendance from './pages/Attendance';
import History from './pages/History';
import Report from './pages/Report'; // Ensure Report is correctly imported
import './theme/variables.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const menuController = useRef<HTMLIonMenuElement | null>(null);
  var path = window.location.pathname;
  var page = path.split("/").pop();
  let isAuthPage = page;
  console.log(location);
  const toggleMenu = async () => {
    if (menuController.current) {
      const isOpen = await menuController.current.isOpen();
      if (isOpen) {
        menuController.current.close();
      } else {
        menuController.current.open();
      }
    }
  };

    // Check if current route is login or register
    var path = window.location.pathname;
    var page = path.split("/").pop();
   
   
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
        {
  (isAuthPage !== 'login') && (
    <IonIcon
      icon={menuOutline}
      size='large'
      onClick={toggleMenu}
      style={{ zIndex: 999, marginTop: '10px', textAlign: 'center', left: '10px' }}
    />
  )
}
          {/* Side Menu */}
          <IonMenu ref={menuController} side="start" menuId="first" contentId="main">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonMenuToggle autoHide={false}>
                  <IonItem button onClick={toggleMenu}>Option 1</IonItem>
                </IonMenuToggle>
                <IonMenuToggle autoHide={false}>
                  <IonItem button onClick={toggleMenu}>Option 2</IonItem>
                </IonMenuToggle>
                <IonMenuToggle autoHide={false}>
                  <IonItem button onClick={toggleMenu}>Option 3</IonItem>
                </IonMenuToggle>
              </IonList>
            </IonContent>
          </IonMenu>

          {/* Main Content */}
          <IonRouterOutlet id="main">
            {/* Toggle button for menu */}
            

            {/* Public routes */}
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />

            {/* Protected routes with tabs */}
            <Route path="/tabs" render={() => (
              <IonTabs>
                <IonRouterOutlet id="main">
                  <Route path="/tabs/tab1" component={Tab1} exact />
                  <Route path="/tabs/tab2" component={Tab2} exact />
                  <Route path="/tabs/tab3" component={Tab3} exact />
                  <Route path="/tabs/home" component={Home} exact />
                  <Route path="/tabs/attendance" component={Attendance} exact />
                  <Route path="/tabs/history" component={History} exact />
                  <Route path="/tabs/profile" component={Profile} exact />
                  <Route path="/tabs/employee" component={Employee} exact />
                  <Route path="/tabs/report" component={Report} exact />
                  <Route exact path="/tabs" render={() => <Redirect to="/tabs/home" />} />
                </IonRouterOutlet>

                {/* Tab Bar */}
                <IonTabBar slot="bottom">
                  <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon icon={triangle} />
                    <IonLabel>Home</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="attendance" href="/tabs/attendance">
                    <IonIcon icon={ellipse} />
                    <IonLabel>Attendance</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="history" href="/tabs/history">
                    <IonIcon icon={square} />
                    <IonLabel>History</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="report" href="/tabs/report">
                    <IonIcon icon={square} />
                    <IonLabel>Report</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="profile" href="/tabs/profile">
                    <IonIcon icon={square} />
                    <IonLabel>Profile</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            )} />
            
            {/* Redirect root to login */}
            <Redirect exact path="/" to="/login" />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
