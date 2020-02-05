const {getPrice, geoCoder, saveListing, getListings} = require('../services')

module.exports = async (req, res, next) => {
    // try {

    // }catch(e){
    //     next(e)
    // }
    const body = req.body

    body.price = 1234
    console.log('postListingBody', body)
    return res.json([body])
}