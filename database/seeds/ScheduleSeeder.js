"use strict";

/*
|--------------------------------------------------------------------------
| ScheduleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class ScheduleSeeder {
  async run() {
    const users = await Database.table("schedules").insert([
      { day_of_the_week: "monday" },
      { day_of_the_week: "tuesday" },
      { day_of_the_week: "wednesday" },
      { day_of_the_week: "thursday" },
      { day_of_the_week: "friday" },
      { day_of_the_week: "saturday" },
      { day_of_the_week: "sunday" }
    ]);
  }
}

module.exports = ScheduleSeeder;
