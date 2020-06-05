'use strict'
const Packs = packs('App/Models/pack')

/*

*/

class PackController {
    async GetAllPacks()//Traer todo
    {
        return await Database.select('*').from('packs')
    }
    async Store({ request })//registrar
    {
        const { packagetype, description, cost, status } = request.all();
        console.log(packagetype, description, cost, status)
        const packs = await Packs.create({
            packagetype,
            description,
            cost,
            status
        });
        return Packs;
    }
    async Delete({ request, params: { id } }) //eliminar
    {
        const packs = await Packs.find(id)
        await pack.delete()
        return await Database.select('*').from('packs')
    }
    async Update({ params: { id }, request, response }) {
        const { packagetype, description, cost, status } = request.all();
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
        const New_Packs = await Packs.query().where('id', id).fetch()
        return response.status(50).send({ message: 'Package Updated', data: New_Packs })
    }
}

module.exports = PackController
