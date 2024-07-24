import { Permission } from "node-appwrite";
import { voteCollection, db } from "../name";
import { databases } from "./config";

export default async function createVoteCollection() {
	// creating collection
	await databases.createCollection(db, voteCollection, voteCollection, [
		Permission.read("any"),
		Permission.read("users"),
		Permission.create("users"),
		Permission.update("users"),
		Permission.delete("users"),
	]);
	console.log("Vote Collection is created");

	// creating attributes
	await Promise.all([
		databases.createStringAttribute(
			db,
			voteCollection,
			"VotedById",
			50,
			true
		),
		databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
		databases.createEnumAttribute(
			db,
			voteCollection,
			"type",
			["question", "answer"],
			true
		),
		databases.createEnumAttribute(
			db,
			voteCollection,
			"voteStatus",
			["upvoted, downvoted"],
			true
		),
	]);
	console.log("Vote Attributes are created");
}
