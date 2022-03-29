const models = require('../models')

const getAllRecords = async (request, response) => {
  try {
    const members = await models.Members.findAll({
      attributes: ['name', 'relation', 'bestQuote', 'characterGroup'],
      include: [
        {
          model: models.Characteristics,
          attributes: ['trait'],
        },
      ],
    })

    return response.send(members)
  } catch (error) {
    return response.status(500).send('Cannot retrieve members, try again.')
  }
}

const getMemberByName = async (request, response) => {
  try {
    const { name } = request.params

    const namedMember = await models.Members.findOne({
      where: { name: { [models.Op.like]: `%${name}%` } },
      include: [{
        model: models.Characteristics,
        attributes: ['trait']
      }]
    })

    return namedMember
      ? response.send(namedMember)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Cannot retrieve member, try again.')
  }
}
const saveMember = async (request, response) => {
  try {
    const {
      name, relation, bestQuote, characterGroup
    } = request.body

    if (!name || !relation || !bestQuote || !characterGroup) {
      return response
        .status(400)
        .send('Missing paramter(s), please bouch check fields')
    }

    const newMember = await models.Members.create({
      name, relation, bestQuote, characterGroup
    })

    return response.status(201).send(newMember)
  } catch (error) {
    return response.status(500).send('Cannot save new member.')
  }
}

module.exports = {
  getAllRecords,
  getMemberByName,
  saveMember
}
