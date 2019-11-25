"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ScheduleDaySchema extends Schema {
  up() {
    this.create("course_days", table => {
      table.increments();
      table.integer("user_id").notNullable();
      table
        .foreign("user_id")
        .references("users.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.string("title_course", 60);
      table.string("description");
      table.date("hour").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("course_days");
  }
}

module.exports = ScheduleDaySchema;
