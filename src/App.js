import Timetable from "./components/Table";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Timetable />
    </div>
  );
}

/*
Construye una lista: 

- Que contenga tramos horarios en intervalos de 30 minutos
- Que empiece a las 8am y termine a las 8 pm. 
- La empresa tiene disponibilidad de 8 motociclistas cada 30 minutos.
- Cada vez que alguien haga click en la caja, pasara lo siguiente:
  - Si es la primera vez que hace click, tomara un motociclista que se 
    restara del contador y la caja se pondra en verde.
  
  - La segunda vez que alguien haga click, el motociclista velve a estar
    disponible y se sumara al contador y la caja vovlera a su color.
  -Si otros usuarios han tomado a todos los motociclistas, la caja debe 
    estar en color rojo y no debe dejar tomar ese horario.
*/
