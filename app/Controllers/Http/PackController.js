'use strict'

const Packs = packs('App/Models/packs')

class PackController {
    /* datos
    packagetype
    description
    cost
    status*/

    async getAllPack() //todo
    {
        return await Database.select('*').from('packs')
    }

    async store({ request }) //rregtra
    {
        const { packagetype, description, cost, status } = request.all();
        console.log(packagetype, description, cost, status);
        const packs = await Packs.create({
            packagetype,
            description,
            cost,
            status
        });
        return Packs;
    };
    async destroy({ response, params: id, }) //delete
    {
        const packs = await Packs.find(id)
        await packs.delete()
        return response.status(200).send({ message: 'Package removed' });
    }

    async update({ params: { id }, request, response }) //update
    {
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
        const New_packs = await Packs.query().where('id', id).fetch()
        return response.status(200).send({ message: 'Package updated', data: New_packs })

    }

module.exports = PackController

