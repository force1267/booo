<script>
    import ColorRoot from "./color.svelte";
    export var name = "force";
</script>

<ColorRoot/>
<div class="app">
    <!-- top bar -->
    <div class="titlebar" style="-webkit-app-region: drag">
        <span>{name}</span>
    </div>
    <div class="titlebar-close" on:click={e => window.close()}>X</div>
    <!-- left bar -->
    <div class="left-bar">
        <span class="left-bar-item">1</span>
        <span class="left-bar-item">2</span>
        <span class="left-bar-item">3</span>
        <span class="left-bar-item">4</span>
    </div>
    <!-- left action bar -->
    <div class="action-bar">
        <span class="action-bar-item">action1</span>
        <span class="action-bar-item">action2</span>
        <span class="action-bar-item">action3</span>
        <span class="action-bar-item">action4</span>
        <span class="action-bar-item">action5</span>
        <span class="action-bar-item">action6</span>
        <span class="action-bar-item">action7</span>
        <span class="action-bar-item">action8</span>
        <span class="action-bar-item">action9</span>
        <span class="action-bar-item">action10</span>
    </div>
</div>


<style>
    .app {
        color: var(--color-text);
        -webkit-user-select: none;
    }
    .titlebar {
        z-index: 100;
        position: absolute;
        left: 0px;
        top: 0px;
        height: 25px;
        width: 100%;
        padding-left: 15px;
        background-color: var(--color-secondary);
        color: var(--color-text);
        -webkit-user-select: none;
        -webkit-app-region: drag;
    }
    .titlebar-close {
        z-index: 101;
        position: absolute;
        right: 0px;
        top: 0px;
        height: 25px;
        width: 25px;
        padding-left: 8px;
        background-color: var(--color-secondary);
        color: var(--color-text);
        cursor: default;
        -webkit-app-region: no-drag;
    }
    .titlebar-close:hover {
        background-color: red;
        color: white;
    }
    .left-bar {
        z-index: 99;
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 35px;
        padding-top: 25px;
        background-color: var(--color-reverse);
        color: var(--color-text-reverse);
    }
    .left-bar-item {
        display: block;
        margin-top: 10px;
        padding-left: 15px;
        color: var(--color-text-reverse);
        cursor: default;
    }
    .action-bar {
        z-index: 99;
        position: absolute;
        left: 35px;
        top: 0px;
        height: 100%;
        width: 175px;
        padding-top: 25px;
        background-color: var(--color-primary);
        color: var(--color-text);
    }
    .action-bar-item {
        display: block;
        margin-top: 6px;
        padding-left: 15px;
        color: var(--color-text);
        cursor: default;
    }
    .action-bar-item:hover ,.left-bar-item:hover {
        background-color: var(--color-secondary);
        color: var(--color-text);
    }
</style>