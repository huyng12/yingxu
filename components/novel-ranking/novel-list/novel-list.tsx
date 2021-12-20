import { Novel } from "../../../lib/cms/types";
import { NovelCard } from "../../novel-card/novel-card";

interface Props {
	name: string;
	novels: Novel[];
}

export function NovelList(props: Props) {
	return (
		<div className="space-y-2">
			<h1 className="text-xl font-bold">{props.name}</h1>
			<div className="space-y-4">
				{props.novels.map((novel, index) => (
					<NovelCard
						key={`novel-${novel.slug}-${index}`}
						novel={novel}
						index={index + 1}
					/>
				))}
			</div>
		</div>
	);
}
