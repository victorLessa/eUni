"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CourseScheduleSchema extends Schema {
  up() {
    this.create("course_schedules", table => {
      table.increments();
      table.integer("course_id").notNullable();
      table
        .foreign("course_id")
        .references("course_days.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.integer("schedule_id").notNullable();
      table
        .foreign("schedule_id")
        .references("schedules.id")
        .onDelete("cascade")
        .onUpdate("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("course_schedules");
  }
}

module.exports = CourseScheduleSchema;
