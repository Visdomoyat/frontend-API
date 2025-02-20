import { fetchData } from './database/vehicleDatabase';
import VehicleSearch from './components/VehicleSearch/VehicleSearch';
import VehicleDetails from './components/VehicleDetails/VehicleDetails';
import { useState, useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';
import './App.css'


function App() {

  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    M.AutoInit();
  }, [])

 const fetchVehicleData = async (year, make, model, trim) => {
  
  const data = await fetchData(year, make, model, trim );
  

  if (data) {
    const newVehicle = {
      year: data.basic.year,
      make: data.basic.make,
      model: data.basic.model,
      trim: data.basic.trim,
      transmission: data.transmission.transmission_style,
      brakingRear: data.braking.rear_brake_type,
      brakingFront: data.braking.front_brake_type,
      brakingDisc: data.braking.disc_front,
      wheelTiresFront: data.wheels_and_tires.front_tire_size,
      wheelsTiresRear: data.wheels_and_tires.rear_tire_size, 
      fuelEco: data.fuel.fuel_economy,
      fuelMil: data.fuel.highway_mileage,
      fuelCit: data.fuel.city_mileage,
      fuelCap: data.fuel.fuel_capacity
     
    }
    console.log('New vehicle data', newVehicle)
  setVehicle(newVehicle)
  } else{
    console.log('No data found')
  }
 
 };
 
 console.log('VehicleState',vehicle)

 

  return (
    <div className='global'>
    <h2 className='center'><strong>WrenchCloud API</strong></h2>

    <VehicleSearch fetchData= {fetchVehicleData} />
    {vehicle ? <VehicleDetails vehicle= {vehicle} /> : <p>Search for a vehicle...</p>}
    </div>
    
  )
}

export default App
