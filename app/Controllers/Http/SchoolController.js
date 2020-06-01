'use strict'
const School = use('App/Models/School');
const Database = use('Database')
class SchoolController {
  async create({ request,response }) {

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

    return response.status(200).send({message:'Escuela agregada correctamente',data:school});
};
async update({ params:{id} ,request,response }) {
  const { name,description,phone,mobile,information,email,schedule, turn,location} = request.all();
  const school = await Database
  .table('schools')
  .where('id',id)
  .update({
    name:         name,
    description:  description,
    phone:        phone,
    mobile:       mobile,
    information:  information,
    email:        email,
    schedule:     schedule,
    turn:         turn,
    location:     location
  })

  const find_school = await School.find(id)
  const Schooledit = await School.query().where('id',id).fetch()
  return  response.status(200).send({message:'Escuela actualizada correctamente',data:Schooledit});
};
 // Desrtoy userSelect
 async destroy({response, params:id,}) {
  const school = await School.find(id)
      await school.delete()
      return response.status(200).send({message:'Escuela eliminada'});
}
}

module.exports = SchoolController

