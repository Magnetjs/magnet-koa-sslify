import { Module } from 'magnet-core/module'
import * as http from 'http'
import * as sslify from 'koa-sslify'
import * as Koa from 'koa'

import defaultConfig from './config/koaSslify'

export default class KoaSslify extends Module {
  async setup () {
    const config = this.prepareConfig('koaSslify', defaultConfig)

    let redirectToHttps = new Koa().use(sslify()).callback()

    for (const wrapper of config.wrappers) {
      redirectToHttps = wrapper(redirectToHttps)
    }

    // this.app.sslifyServer = http
    //   .createServer(redirectToHttps)
    //   .listen(
    //     config.port,
    //     () => {
    //       this.log.info('handle ACME http-01 challenge and redirect to https')
    //     }
    //   )
  }
}
