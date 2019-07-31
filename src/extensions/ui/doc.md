
# ui

---
## api

> tabs
```js
target tab.open({ deactive: false }) {}

info tab.info() {}
info: {
    tab1: { active: false, component: svelteComponent, ... },
    tab2: { active: true, component: svelteComponent, ... },
}

void tab.close({ tab: tabObject }) {}
```

> panel
```js
target panel.setIcon({ extension, icon: name, number: int, callback: { opened: true|false } => }) {
    sets an icon for the extension.
    returned target is shown when icon gets clicked.
    `extension` must be passed or throws "panel icon with no extension"
    `number` is prefered position of icon. (user can change this)
    `callback` is called when the icon gets clicked.
    `callback` inputs:
        opened: true or false. shows click event either closed the target or opened it
}

target panel.setIconBottom({ icon: name, number: int, callback: ({ opened: true|false }) => }) {}

Promise(void) panel.close() {
    closes the panel
}

Promise(void) panel.open({extension, number}) {
    opens the panel for `extension` or `number`
}
```

> action bar
```js
{ target, tabSpace } actionBar.setTab(name, reservedTabSpace = 0, cb) {}
void actionBar.close() {}
```

---
## event

> tabs
```js
emit("tab.open", { tab: tabObject })
    emits when a tab opens
    `tab` is the opened tab

emit("tab.close", { tab: tabObject })
    emits when a tab closes
    `tab` is the closed tab
```

> panel


> action bar