import { useState } from "react";

export default function ListGroup() {
	let items = ["New York", "Chicago", "Texas"];
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>List Group</h1>
			{items.length === 0 && <p>No Items Found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex == index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
						}}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}
