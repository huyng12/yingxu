import { Info } from "../../lib/cms/types";

interface Props {
	slug: string;
	info: Info;
}

export function NovelDescription(props: Props) {
	return (
		<div className="space-y-2">
			<h1 className="text-xl font-bold">About</h1>
			<p>{props.info.summary}</p>
		</div>
	);
}
