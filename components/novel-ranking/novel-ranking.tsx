import { Novel } from "../../lib/cms/types";
import { NovelList } from "./novel-list/novel-list";

interface Ranking {
	name: string;
	novels: Novel[];
}

interface Props {
	containerId: string;
	rankings: Ranking[];
}

export function NovelRanking(props: Props) {
	return (
		<div id={props.containerId} className="scroll-m-8 space-y-4">
			<h1 className="text-2xl font-bold">Rankings</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
				{props.rankings.map((ranking) => (
					<NovelList
						key={`ranking-${ranking.name}`}
						name={ranking.name}
						novels={ranking.novels}
					/>
				))}
			</div>
		</div>
	);
}
