"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ScheduleSchema extends Schema {
  up() {
    this.create("schedules", table => {
      table.increments();
      table.string("day_of_the_week").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("schedules");
  }
}

module.exports = ScheduleSchema;
