import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
	const [isShowData, setIsShowData] = useState(false);
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={() => setIsShowData(!isShowData)}>
					{isShowData ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{isShowData && <p>{info}</p>}
		</article>
	);
};

export default Question;
