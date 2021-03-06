const { surveydb } = require('../db')

const getQuestion = (admin_id, surey_header_id, buildingId) => {
    return surveydb.getQuestion(admin_id, surey_header_id, buildingId);
}

const addAnswer = (other, optionChoiceId, userId, questionId, surey_headers_id, building_id) => {
    return surveydb.addAnswer(other, optionChoiceId, userId, questionId, surey_headers_id, building_id);
}

const deleteAnswer = (userId, survey_headers_id, building_id) => {
    return surveydb.deleteAnswer(userId, survey_headers_id, building_id);
}

const getMenu = (userId) => {
    return surveydb.getMenu(userId);
}

const surveyList = (userId, survey_header_id) => {
    return surveydb.surveyList(userId, survey_header_id);
}

const surveyMenuApi = (userId) => {
    return surveydb.surveyMenuApi(userId)
}

const newSurveyList = (userId, survey_header_id) => {
    return surveydb.newSurveyList(userId, survey_header_id)
}

module.exports = { getQuestion, addAnswer, deleteAnswer, getMenu, surveyList, surveyMenuApi, newSurveyList };