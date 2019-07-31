
# search

---
## api

```js
Promise(selection) search (query, dictionaryName = all) {
    search in all `dictionaries` or specefied one.
    render relevant answers to `search.svelte` component.
    the component returns a promise that resolves to users selection
    // TODO
}
```

```js
void register (dictionaryName, dictionaryObject) {
    if the name is not used registers the dictionary
    else throw "duplicate dictionary name"
}
```

```js
dictionary makeDictionary() {
    // TODO
}
```

---
## event