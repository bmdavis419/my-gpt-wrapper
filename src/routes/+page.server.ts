import { db } from '$lib/db';
import { todos } from '$lib/db/schema';

export const load = async () => {
	const dbTodos = await db.select().from(todos);

	return { dbTodos };
};
