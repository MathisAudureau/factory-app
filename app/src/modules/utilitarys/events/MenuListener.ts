import { Event, BaseEvent } from 'ioc:factory/Core/Event'
import {Interaction, MessageEmbed} from 'discord.js'
import {Embed} from "App/utils/types";
import {ColorsPanel} from "App/utils/enums";

@Event('interactionCreate')
export default class MenuListener extends BaseEvent {
  public async run (interaction: Interaction): Promise<void> {
    if(!interaction.isSelectMenu()) return
    if(interaction.customId === 'select-menu') {
      if(interaction.values[0] === 'value1') {
        await interaction.reply({
          content: `Bonjour!`,
          ephemeral: true
        })
      }

      if(interaction.values[0] === 'value2') {
        await interaction.reply({
          content: `Aurevoir!`,
          ephemeral: true
        })
      }
    }
  }
}