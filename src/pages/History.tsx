import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import { useState, useEffect } from 'react';
// import './History.css';

const History: React.FC = () => {
  const [attendanceHistory, setAttendanceHistory] = useState<string[]>([]);

  useEffect(() => {
    // For demonstration purposes, we use local storage
    const storedHistory = localStorage.getItem('attendanceHistory');
    if (storedHistory) {
      setAttendanceHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{marginLeft: '20px'}}>Attendance History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {attendanceHistory.map((record, index) => (
            <IonItem key={index}>{record}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default History;
