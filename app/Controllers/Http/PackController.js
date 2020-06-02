'use strict'

const Packs = use('App/Models/pack');
const Database = use('Database');

class PackController {

    async getAllPack() //todo
    {
        return await Database.select('*').from('packs')
    }

    async Store({ request }) //rregtra
    {
        const { packagetype, description, cost, status } = request.all();
        //console.log(packagetype, description, cost, status);
        const packs = await Packs.create({
            packagetype,
            description,
            cost,
            status
        });
        return packs;
    };

    /*
         async Delete({ request, auth }) {
        const user = await auth.getUser();
        const { id } = params;
        const proyectos = await proyectos.find(email);
        const affectedRows = await Database
            .table('user')
            .where('email', this.login('email'))
            .delete()
    };
    */

    async Delete({ params: { id }, request, response }) //delete
    {
       // const { id } = params;
        const packs = await Database
            .table('packs')
            .where('id', id)
            .delete()

        return await Database.select('*').from('packs');
    }

    async Update({ params: { id }, request, response }) //update
    {
        const { packagetype, description, cost, status } = request.all();
        console.log(packagetype, description, cost, status);
        const packs = await Database
            .table('packs')
            .where('id', id)
            .update({
                packagetype: packagetype,
                description: description,
                cost: cost,
                status: status
            })
        const Update_pack = await Packs.find(id)
        const New_packs = await Packs.query().where('id', id).fetch()
        return response.status(200).send({ message: 'Package updated', data: New_packs })
    }
}
module.exports = PackController
