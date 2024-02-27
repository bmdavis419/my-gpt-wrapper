<script lang="ts">
	const { data } = $props();

	$effect(() => {
		console.log(data.dbTodos);
	});
</script>

<h3>Welcome to the basic GPT wrapper</h3>
<p>this might eventually become something if I can be bothered...</p>

{#each data.dbTodos as todo}
	<h2>{todo.name}</h2>
{/each}
