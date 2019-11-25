"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class CourseSchedule extends Model {
  schedules() {
    return this.belongsToMany("App/Models/Schedule").pivotModel(
      "App/Models/CourseDay"
    );
  }
}

module.exports = CourseSchedule;
