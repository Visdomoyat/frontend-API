

import './VehicleDetails.css'
function VehicleDetails(props) {
    if (!props.vehicle) return <p>No vehicle data available</p>
    return (

        <div className="container">
            <h2 className="center">Vehicle Details</h2>
            <div className="card">
                <div className="card-content">
                    <p>Year: {props.vehicle.year}</p>
                    <p> Make: {props.vehicle.make}</p>
                    <p> Model: {props.vehicle.model}</p>
                    <p> Trim: {props.vehicle.trim}</p>
                    <h4>Transmisson</h4>
                    <p>Transmission: {props.vehicle.transmission}</p>
                    <h4>Braking</h4>
                    <p>Rear brake type: {props.vehicle.brakingRear}</p>
                    <p>Front brake type: {props.vehicle.brakingFront}</p>
                    <p>Disc front: {props.vehicle.brakingDisc}</p>
                    <h4>Wheels and Tires</h4>
                    <p>Front tire size: {props.vehicle.wheelTiresFront}</p>
                    <p>Rear tire size: {props.vehicle.wheelsTiresRear}</p>
                    <h4>Fuel</h4>
                    <p>Fuel economy: {props.vehicle.fuelEco}</p>
                    <p>Highway mileage: {props.vehicle.fuelMil}</p>
                    <p>City mileage: {props.vehicle.fuelCit}</p>
                    <p>Fuel capacity: {props.vehicle.fuelCap}</p>
                    
                    
                </div>
            </div>



        </div>
    )
}

export default VehicleDetails



