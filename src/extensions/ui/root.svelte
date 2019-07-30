<script>
    import ColorRoot from "./color.svelte";
    export var name = "force";

</script>

<ColorRoot/>
<div class="app">
    <div class="top-bar">
        <span>{name}</span>
    </div>
    <div class="left-bar">
        <span>item1</span>
        <span>item2</span>
        <span>item3</span>
        <span>item4</span>
    </div>
</div>


<style>
    .app {
        color: var(--color-text);
    }
    .top-bar {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 25px;
        width: 100%;
        background-color: var(--color-b);
        color: var(--color-text);
    }
</style>