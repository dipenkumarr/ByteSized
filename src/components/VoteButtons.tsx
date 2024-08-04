import { Models } from "node-appwrite";
import React from "react";

const VoteButtons = ({
	type,
	id,
	upvotes,
	downvotes,
	className,
}: {
	type: "question" | "answer";
	id: string;
	upvotes: Models.DocumentList<Models.Document>;
	downvotes: Models.DocumentList<Models.Document>;
	className?: string;
}) => {
	return <div>VoteButtons</div>;
};

export default VoteButtons;
