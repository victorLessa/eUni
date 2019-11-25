"use strict";

const Database = use("Database");
const CourseSchedule = use("App/Models/CourseSchedule");
const CourseDay = use("App/Models/CourseDay");

class CourseController {
  async store({ request }) {
    const trx = await Database.beginTransaction();
    const {
      title_course,
      description,
      hour,
      day: { id }
    } = request.body;
    const date = new Date();
    const courseDay = await CourseDay.create(
      {
        user_id: 1,
        title_course,
        description,
        hour: date
      },
      trx
    );

    const courseSchedule = await CourseSchedule.create(
      {
        course_id: courseDay.id,
        schedule_id: id
      },
      trx
    );

    trx.commit();

    return courseSchedule;
  }
}

module.exports = CourseController;
