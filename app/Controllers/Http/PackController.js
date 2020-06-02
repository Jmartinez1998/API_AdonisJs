'use strict'

const Packs = use('App/Models/pack');
const Database = use('Database');

class PackController {

    async getAllPack() //Traer todo
    {
        return await Database.select('*').from('packs')
    }
    async Store({ request }) //registrar un paqeute
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
    async Delete({ params: { id }, request, response }) //eliminar paquete
    {
        const packs = await Database
            .table('packs')
            .where('id', id)
            .delete()

        return await Database.select('*').from('packs');
    }
    async Update({ params: { id }, request, response }) //Actualisar el paquete
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
