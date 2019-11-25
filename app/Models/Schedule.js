"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Schedule extends Model {
  course_schedules() {
    return this.belongsToMany("App/Models/CourseSchedule").pivotModel(
      "App/Models/CourseDay"
    );
  }
}

module.exports = Schedule;
