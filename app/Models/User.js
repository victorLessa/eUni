"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Hash = use("Hash");

class User extends Model {
  static boot() {
    super.boot();

    this.addHook("beforeCreate", async userInstance => {
      userInstance.password = await Hash.make(userInstance.password);
    });
  }
  course_days() {
    return this.hasMany("App/Models/CourseDay");
  }
}

module.exports = User;
