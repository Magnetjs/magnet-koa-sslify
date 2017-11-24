import { Module } from 'magnet-core/module'
import * as sslify from 'koa-sslify'
import * as koa from 'koa'

export default class MagnetKoaSslify extends Module {
  init () {
    this.moduleName = 'koa-sslify'
    this.defaultConfig = __dirname
  }

  async setup () {
    if (!this.config.magnet) { return }

    this.app.config[this.config.magnet].requestListener = koa().use(sslify()).callback()
  }
}
