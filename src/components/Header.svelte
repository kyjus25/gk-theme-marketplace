<script>
    import { page } from '$app/stores'

</script>
<header class="bg-neutral flex items-center justify-end h-12">
    <a class="mr-2" href="/">
        <button class="{$page.path === "/" ? "btn-primary" : "btn-ghost" } btn btn-sm">Installed</button>
    </a>
    <a class="mr-2" href="/shop">
        <button class="{$page.path === "/shop" ? "btn-primary" : "btn-ghost" } btn btn-sm">Shop</button>
    </a>
</header>
