'use strict'

class EventService {
  constructor(sequelize, Event, EventWeek) {
    this.sequelize = sequelize
    this.event = Event
    this.eventWeek = EventWeek
  }

  async transactionEvent({ day_week, ...data }, next) {
    try {
      let result = await this.sequelize.transaction()
        .then(async t => {
          return await this.event
            .create(
              data,
              { transaction: t }
            ).then(async event => {
              return await this.eventWeek
                .create({
                  event_id: event.id,
                  day_week_id: day_week
                }, { transaction: t }
                )

            }).then(async (event) => {
              await t.commit()
              return event
            }).catch(err => {
              t.rollback()
              throw new Error(err)
            })
        })
      return result
    } catch (err) {
      next(err)
    }
  }
}

module.exports = EventService