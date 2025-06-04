import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
	onClick: () => void;
}

export default function Like({ onClick }: Props) {
	const [status, setStatus] = useState(false);

	const toggle = () => {
		setStatus(!status);
		onClick();
	};

	if (status)
		return (
			<AiFillHeart onClick={() => toggle()} size={30} color="#ff6b81" />
		);
	return <AiOutlineHeart onClick={() => toggle()} size={30} />;
}
