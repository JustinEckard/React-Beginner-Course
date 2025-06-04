import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

export default function App() {
	const [alertVisible, setAlertVisibility] = useState(false);
	return (
		<div className="">
			{alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>
					My Alert
				</Alert>
			)}
			<Button color="secondary" onClick={() => setAlertVisibility(true)}>
				Click Me
			</Button>
			<Like onClick={() => console.log("clicked")}></Like>
		</div>
	);
}
