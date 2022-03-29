const models = require('../models')

const getAllTraitsWithCharactersName = async (request, response) => {
  try {
    const traits = await models.Characteristics.findAll({
      attributes: ['trait'],
      include: [{
        model: models.Members,
        attributes: ['name']
      }]
    })

    return response.send(traits)
  } catch (error) {
    return response.status(400).send('Cannot retrieve traits, try again.')
  }
}

module.exports = {
  getAllTraitsWithCharactersName
}
