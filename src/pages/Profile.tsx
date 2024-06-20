import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { useState, useEffect } from 'react';
// import './Profile.css';

const Profile: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setEmail(user.email);
      setName(user.name);
    }
  }, []);

  const handleSave = () => {
    const updatedUser = { email, name };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('Profile updated');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{marginLeft: '20px'}}>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput value={email} disabled />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" onClick={handleSave}>Save</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
