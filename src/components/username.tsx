import * as React from 'react';

export interface Props {
	username: string;
}

export default function username(props: Props) {
	return (
		<span className="username">
			{props.username || "unknown"}
		</span>
	);
}