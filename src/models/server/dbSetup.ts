import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import { databases } from "./config";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

export default async function getOrCreateDB() {
	try {
		await databases.get(db);
		console.log("DATABASE CONNECTED ALREADY");
	} catch (error) {
		try {
			await databases.create(db, db);
			console.log("DATABASE CREATED");

			// Creating collections
			await Promise.all([
				createQuestionCollection(),
				createAnswerCollection(),
				createCommentCollection(),
				createVoteCollection(),
			]);
			console.log("COLLECTIONS CREATED");
			console.log("DATABASE CONNECTED");
		} catch (error) {
			console.log("ERROR IN CREATING DATABASE OR COLLECTIONS: ", error);
		}
	}

	return databases;
}
