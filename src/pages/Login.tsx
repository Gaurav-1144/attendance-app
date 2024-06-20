import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (email === user.email && password === user.password) {
        history.push('/tabs/home');
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('No user found');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" onClick={handleLogin}>Login</IonButton>
        <IonButton expand="full" fill="outline" onClick={() => history.push('/register')}>Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
