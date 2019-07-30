const app = {
    api: {},
    extension: {},
    use(extension) {
        const app = this;
        if(!app.api || !app.extension) {
            app.api = {};
            app.extension = {};
        }
        app.extension[extension.name] = extension;
        extension.app = app;
        app.prepareEvents(extension);
        app.prepareApi(extension);
        extension.init({app});
    },
    prepareEvents(extension) {
        const ext = extension;
        ext._eventCallbacks = {}
        ext.on = function on(event, cb) {
            if(!ext._eventCallbacks[event]) {
                ext._eventCallbacks[event] = [];
            }
            return ext._eventCallbacks[event].push(cb);
        }
        ext.once = function once(event, cb) {
            ext.on(event, data => {
                ext.off(event, cb);
                return cb(data);
            })
        }
        ext.off = function off(event, cb) {
            if(ext._eventCallbacks[event]) {
                ext._eventCallbacks[event] = ext._eventCallbacks[event].filter(e=>e!=cb);
            }
            return true;
        }
        ext.emit = function emit(event, data) {
            if(ext._eventCallbacks[event]) {
                ext._eventCallbacks[event].forEach(cb => cb(data));
            }
            return true;
        }
    },
    prepareApi(extension) {
        const app = this;
        // ...
    },
    async start(options = {}) {
        for(var ext in this.extension) {
            if(this.extension[ext].start) {
                this.extension[ext].start(options);
            }
        }
    }
}

export default app;