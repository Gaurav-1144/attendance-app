import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const goToAttendance = () => {
    history.push('/attendance');
  };

  const goToHistory = () => {
    history.push('/history');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{marginLeft: '20px',}}>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={goToAttendance}>Take Attendance</IonButton>
        <IonButton expand="full" onClick={goToHistory}>View History</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
