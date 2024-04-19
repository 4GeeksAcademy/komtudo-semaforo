import React from "react";
import Semaforo from "./semaforo";


//create your first component
const Home = () => {

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="paloSemaforo ">
				</div>
			</div>
			<div className="semaforo d-flex justify-content-center">

				<Semaforo />

			</div>
		</div>

	);
};

export default Home;
