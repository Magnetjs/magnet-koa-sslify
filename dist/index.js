"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const sslify = require("koa-sslify");
const koa = require("koa");
class MagnetKoaSslify extends module_1.Module {
    init() {
        this.moduleName = 'koa-sslify';
        this.defaultConfig = __dirname;
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.config.magnet) {
                return;
            }
            this.app.config[this.config.magnet].requestListener = koa().use(sslify()).callback();
        });
    }
}
exports.default = MagnetKoaSslify;
//# sourceMappingURL=index.js.map