// import { changeUserName } from '../services'

module.exports = async (req, res, next) => {
    const { body, userID } = req

    try {
        const user = await changeUserName(body, userID)
        console.log('changedUser', user)

        res.json({
            username: user.name
        })

    } catch (e) {
        next(e)
    }

}