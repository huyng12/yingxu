import Document, { Head, Html, Main, NextScript } from "next/document";

const MyHead = () => (
	<Head>
		<meta
			property="og:description"
			content="Minimalism and reading experiences focused novel reading website."
		/>
	</Head>
);

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<MyHead />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
