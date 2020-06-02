'use strict'

const City = use('App/Models/City');

class CityController {
    async create({ request }) {

        const { cityname,citycode} = request.all();
        const City = await City.create({
            cityname,
            citycode
        });
        return City;
    };
    async update({params:{id} ,request }) {
      const find_city = await City.find(id)
      const {cityname,citycode} = request.all();
      const city = await City.update({
        name:City.name
    });
      return  City;
    };
}

module.exports = CityController
