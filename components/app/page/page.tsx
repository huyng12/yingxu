import { Navbar } from "app/navbar/navbar";
import Head from "next/head";
import { ReactNode } from "react";
import s from "./page.module.css";

interface Props {
	title?: string;
	children: ReactNode;
}

export function Page(props: Props) {
	const { children, ...more } = props;

	const meta = {
		title: "YingXu - Minimalism and reading experiences focused novel reading website.",
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
