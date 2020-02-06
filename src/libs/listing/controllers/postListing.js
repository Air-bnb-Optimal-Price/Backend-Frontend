const { getPrice, geoCoder, saveListing, getListings, setPrice } = require('../services')

module.exports = async (req, res, next) => {
    req.userID = 1
    try {
        const body = req.body

        const { longitude, latitude } = await geoCoder(body.country + " ," + body.street_address)

        const listingWithCoords = {
            ...req.body,
            longitude,
            latitude,
            summary: "",
            host_is_superhost: 0
        }

        const savedListing = await saveListing({ ...listingWithCoords, user_id: req.userID })

        // switch save first to get id, then add price.
        console.log('savedListing', savedListing)

        const price = await getPrice(savedListing)


        await setPrice(savedListing.id, price)
        console.log('pricedListing', price)


        console.log('savedListing2', savedListing)
        // price does not set
        const userListings = await getListings(req.userID)
        console.log(userListings)

        return res.json({ userListings, price })
    } catch (e) {
        console.log(e)
        next(e)
    }

    // console.log('postListing invoked')
    // const body = req.body


    // console.log('postListingBody', body)
    // return res.json([body])
}