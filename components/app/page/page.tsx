import Head from "next/head";
import { ReactNode } from "react";
import { BackToTop } from "../../back-to-top/back-to-top";
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
				<div className="hidden md:block md:fixed bottom-14 right-6">
					<BackToTop />
				</div>
			</div>
		</div>
	);
}
