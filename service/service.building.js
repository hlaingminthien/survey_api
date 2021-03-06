const { surveydb } = require('../db')

const getBuilding = () => {
    return surveydb.getBuilding();
}

const addBuilding = (buildingName, companyName, address, postalCode, country, comment, userId, surveyHeadersId) => {
    return surveydb.addBuilding(buildingName, companyName, address, postalCode, country, comment, userId, surveyHeadersId);
}

const updateBuilding = (buildinId, active) => {
    return surveydb.updateBuilding(buildinId, active);
}

module.exports = { getBuilding, addBuilding, updateBuilding }