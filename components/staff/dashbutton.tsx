import React from "react";
import Link from "next/link";

export default function DashButton(props: {
	section?: string;
	url?: string;
	name: string;
	icon: React.ReactNode;
}) {
	/*export default class DashButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {*/
	const url =
		"/dashboard/" +
		(props.section ? props.section.toLowerCase() + "/" : "") +
		(props.url || props.name).toLowerCase();

	return (
		<>
			<li>
				<Link href={url}>
					<button className="sidebar-btn">
						{props.icon}
						{props.name.substring(0, 1).toUpperCase() +
							props.name.substring(1).toLowerCase()}
					</button>
				</Link>
			</li>
		</>
	);
}
//}
