import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

interface Route {
	href: string;
	label: string;
}

const ROUTES: Route[] = [
	{ href: "/", label: "YingXu" },
	{ href: "/#releases", label: "New Releases" },
	{ href: "/#rankings", label: "Rankings" },
];

export function Navbar() {
	const router = useRouter();
	return (
		<div className="max-w-screen-xl m-auto p-4">
			<nav>
				<ul className="flex flex-row gap-4">
					{ROUTES.map((route) => (
						<Link key={`route-${route.label}`} href={route.href}>
							<a
								className={classNames(
									"p-2 border-b-2 transition",
									router.asPath === route.href
										? "border-slate-900"
										: "border-transparent hover:border-slate-900"
								)}
							>
								<li>{route.label}</li>
							</a>
						</Link>
					))}
				</ul>
			</nav>
		</div>
	);
}
