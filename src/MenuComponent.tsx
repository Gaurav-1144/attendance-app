import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle } from '@ionic/react';

interface MenuComponentProps {
  toggleMenu: () => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ toggleMenu }) => {
  return (
    <IonMenu side="start" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem button onClick={toggleMenu}>Home</IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button onClick={toggleMenu}>Attendance</IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button onClick={toggleMenu}>History</IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button onClick={toggleMenu}>Profile</IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button onClick={toggleMenu}>Logout</IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MenuComponent;
