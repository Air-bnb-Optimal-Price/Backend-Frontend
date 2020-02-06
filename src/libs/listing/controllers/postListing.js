const {getPrice, geoCoder, saveListing, getListings} = require('../services')

module.exports = async (req, res, next) => {
    try {
        const coords = await geoCoder(body.country + " ," + body.street_address)
        console.log('lll', coords.data)
        const { longitude, latitude} = coords.data.response
        const listingWithCoords = {
            ...req.body,
            longitude,
            latitude
        }
        const pricedListing = await getPrice(listingWithCoords)
        console.log('pricedListing', pricedListing)
    
    }catch(e){
        next(e)
    }

    console.log('postListing invoked')
    const body = req.body

    body.price = 1234
    console.log('postListingBody', body)
    return res.json([body])
}