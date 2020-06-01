'use strict'
const School = use('App/Models/School');

class SchoolController {
  async create({ request }) {

    const { name,description,phone,mobile,information,email,schedule, turn,location} = request.all();
    const school = await School.create({
        name,
        description,
        phone,
        mobile,
        information,
        email,
        schedule,
        turn,
        location
    });
    return school;
};
async update({ params:{id} ,request }) {
  const find_school = await School.find(id)
  const { name,description,phone,mobile,information,email,schedule, turn,location} = request.all();
  const school = await School.update({
    name:school.name
});
  return  school;
};
}

module.exports = SchoolController

