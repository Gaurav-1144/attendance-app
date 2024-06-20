import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
// import './Register.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const history = useHistory();

  const handleRegister = () => {
    if (password === confirmPassword) {
      const userData = { email, password, name };
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Registration successful');
      history.push('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{marginLeft: '20px'}}>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput type="password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" onClick={handleRegister}>Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
