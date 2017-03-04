"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const module_1 = require("magnet-core/module");
const sslify = require("koa-sslify");
const Koa = require("koa");
const koaSslify_1 = require("./config/koaSslify");
class KoaSslify extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.prepareConfig('koaSslify', koaSslify_1.default);
            let redirectToHttps = new Koa().use(sslify()).callback();
            for (const wrapper of config.wrappers) {
                redirectToHttps = wrapper(redirectToHttps);
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KoaSslify;
//# sourceMappingURL=index.js.map