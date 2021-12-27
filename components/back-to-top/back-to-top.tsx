import classNames from "classnames";
import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export function BackToTop() {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		const handler = () => {
			const scrolled = document.documentElement.scrollTop;
			setIsShown(scrolled > 300 ? true : false);
		};
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	}, []);

	const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<button
			onClick={onClick}
			className={classNames(
				isShown ? "" : "hidden",
				"bg-white rounded-full h-[56px] w-[56px] border-2 flex justify-center items-center cursor-pointer transition hover:scale-125"
			)}
		>
			<RiArrowUpLine fontSize={25} />
		</button>
	);
}
