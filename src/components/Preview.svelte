<script>
    import { themes, fetchData } from "$lib/stores";
    export let theme = null;
    export let name = null;
    export let author = null;

    let hasTheme = false;
    $: {
        hasTheme = $themes.find((i) => i.includes(theme));
    }

    async function toggleTheme(e) {
        e.preventDefault();
        if ($themes.find((i) => i.includes(theme))) {
            await deleteTheme();
        } else {
            await addTheme();
        }
        fetchData();
    }

    async function addTheme(e) {
        await fetch(`/api/themes?theme=${theme}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });
    }

    async function deleteTheme(e) {
        await fetch(`/api/themes?theme=${theme}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });
    }
</script>

<div
    class="rounded w-1/4 grow border transition-all {hasTheme
        ? 'border-primary'
        : 'border-error'} p-3 w-72 inline-block"
>
    <img alt="image" src="/themes/{theme}/{theme}.png" />
    <div class="mt-2 flex items-center">
        <div class="flex-1">
            <p class="font-bold text-xl">{name}</p>
            <p class="font-thin">{author}</p>
        </div>
        <div>
            <input
                type="checkbox"
                on:click={toggleTheme}
                checked={hasTheme}
                class="toggle toggle-primary mt-2"
            />
        </div>
    </div>
</div>
