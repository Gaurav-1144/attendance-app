import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonList } from '@ionic/react';
import { useState, useEffect } from 'react';
// import './Employee.css';

const Employee: React.FC = () => {
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employees, setEmployees] = useState<string[]>([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const handleAddEmployee = () => {
    if (employeeName.trim()) {
      const updatedEmployees = [...employees, employeeName.trim()];
      setEmployees(updatedEmployees);
      setEmployeeName('');
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{marginLeft: '20px'}}>Employee Management</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Employee Name</IonLabel>
          <IonInput value={employeeName} onIonChange={e => setEmployeeName(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" onClick={handleAddEmployee}>Add Employee</IonButton>
        <IonList>
          {employees.map((employee, index) => (
            <IonItem key={index}>{employee}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Employee;
