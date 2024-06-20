import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { useState, useEffect } from 'react';

const Report: React.FC = () => {
  const [attendanceData, setAttendanceData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('attendance');
    if (storedData) {
      setAttendanceData(JSON.parse(storedData));
    }
  }, []);

  function calculateTimeDifference(inTime: string, outTime: string): string {
    // Combine with today's date to handle AM/PM format correctly
    const todayDateString = new Date().toLocaleDateString();
    const combinedInTime = new Date(`${todayDateString} ${inTime}`);
    const combinedOutTime = new Date(`${todayDateString} ${outTime}`);
  
    // Check if the combined times are valid Dates
    if (isNaN(combinedInTime.getTime()) || isNaN(combinedOutTime.getTime())) {
      return 'Invalid time format';
    }
  
    // Calculate the difference in milliseconds
    const differenceMs = combinedOutTime.getTime() - combinedInTime.getTime();
  
    // Calculate seconds and minutes from the difference
    const seconds = Math.floor(differenceMs / 1000) % 60;
    const minutes = Math.floor(differenceMs / (1000 * 60)) % 60;
    const hours = Math.floor(differenceMs / (1000 * 60 * 60));
  
    // Construct and return the formatted duration string
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  
  
  
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{marginLeft: '20px'}}>Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {attendanceData.map((record, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>Date: {record.date}</h2>
                <p>Time In: {record.inTime || 'N/A'}</p>
                <p>Time Out: {record.outTime || 'N/A'}</p>
                <p>Duration: {calculateTimeDifference(record.inTime,record.outTime)}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Report;
