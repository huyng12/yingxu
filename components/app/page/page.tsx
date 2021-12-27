import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "../navbar/navbar";
import s from "./page.module.css";

interface Props {
	title?: string;
	children: ReactNode;
}

export function Page(props: Props) {
	const { children, title, ...more } = props;

	const meta = {
		title:
			typeof title === "undefined"
				? "YingXu - Focus on your novels"
				: `${title} | YingXu`,
		...more,
	};

	return (
		<div className={s.container}>
			<Head>
				<title>{meta.title}</title>
			</Head>
			<div>
				<Navbar />
				<main>{props.children}</main>
			</div>
		</div>
	);
}
