import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import { useState, useEffect } from 'react';

const Attendance: React.FC = () => {
  const [attendanceData, setAttendanceData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('attendance');
    if (storedData) {
      setAttendanceData(JSON.parse(storedData));
    }
  }, []);

  const handleIn = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    let data = JSON.parse(localStorage.getItem('attendance') || '[]');
    const todayData = data.find((d: any) => d.date === currentDate);
    if (todayData) {
      todayData.inTime = currentTime;
    } else {
      data.push({ date: currentDate, inTime: currentTime, outTime: null });
    }
    localStorage.setItem('attendance', JSON.stringify(data));
    setAttendanceData(data);
  };

  const handleOut = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    let data = JSON.parse(localStorage.getItem('attendance') || '[]');
    const todayData = data.find((d: any) => d.date === currentDate);
    if (todayData) {
      todayData.outTime = currentTime;
    } else {
      data.push({ date: currentDate, inTime: null, outTime: currentTime });
    }
    localStorage.setItem('attendance', JSON.stringify(data));
    setAttendanceData(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{marginLeft: '20px',}}>Attendance</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={handleIn}>IN</IonButton>
        <IonButton expand="full" onClick={handleOut}>OUT</IonButton>
        <IonList>
          {attendanceData.map((record, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>Date: {record.date}</h2>
                <p>Time In: {record.inTime || 'N/A'}</p>
                <p>Time Out: {record.outTime || 'N/A'}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Attendance;
