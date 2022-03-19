import { BaseProvider, EntityResolvable } from 'ioc:factory/Core/Provider'
import { Application } from "@discord-factory/core-next";
import Logger from '@leadcodedev/logger'
import { Provider} from "App/utils/enums/lang";

export default class AppProvider implements BaseProvider {
  public async boot (): Promise<void> {
    Logger.send('success', `${Provider.APPLICATION_START}`)
  }

  public async load (Class: EntityResolvable): Promise<void> {
    Logger.send('success', `${Provider.APPLICATION_LOAD} ${Class.file?.filename}.`)
  }

  public async ok (): Promise<void> {
    const client: any = Application.getClient()
    Logger.send('success', `${Provider.APPLICATION_READY}`)

    client.user.setPresence({
      afk: false,
      status: "idle",
      activities: [{name: "Test", type: "STREAMING", url: "https://twitch.tv/nase"}
      ]
    })
  }
}