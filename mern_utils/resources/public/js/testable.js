var path = require("path");
try {
    require("source-map-support").install();
} catch(err) {
}
require(path.join(path.resolve("."),"out","goog","bootstrap","nodejs.js"));
require(path.join(path.resolve("."),"out","cljs_deps.js"));
goog.global.CLOSURE_UNCOMPILED_DEFINES = {"cljs.core._STAR_target_STAR_":"nodejs"};
goog.require("mern_utils.test.runner");
goog.require("cljs.nodejscli");
