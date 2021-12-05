import { Navbar } from "app/navbar/navbar";
import { ReactNode } from "react";
import s from "./page.module.css";

interface Props {
	children: ReactNode;
}

export const AppPage = (props: Props): JSX.Element => (
	<div className={s.container}>
		<div className={s.header}>
			<Navbar />
		</div>
		<div className={s.main}>{props.children}</div>
	</div>
);
