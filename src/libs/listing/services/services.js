// const NodeGeocoder = require('node-geocoder')
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.LALA,
    Promise: Promise
});

const axios = require('axios')

const saveListing = ListingModel => async (listing, userID, latitude, longitude) => {
    let NewListing

    try {
        NewListing = await ListingModel.create({
            user_id: userID,
            latitude,
            longitude,
            ...listing
        })
        console.log('NewListing', NewListing)
    } catch (e) {
        console.log(e)
    }


    return NewListing
}

const getListings = ListingModel => async userID => {
    const Listings = await ListingModel.findAll({
        where: {
            userID
        }
    })

    return Listings
}

const geoCoder = async address => {
    try {
        const res = await googleMapsClient.geocode(
            { address: 'Wilmersdorfer Str. 148, 10585 Berlin, Germany' }
        ).asPromise()

        const code = res.json.results[0].geometry.location

        return {
            latitude: code.lat,
            longitude: code.lng
        }
    }
    catch (e) {
        console.log(e)
    }
}

const getPrice = async (listing) => {
    // listing.userID = 1
    listing.dataValues.summary = ""
    console.log('bbb', listing.dataValues)
    try {
        const { data } = await axios.post(
            'http://python.foodsquadapp.com/predict',
            listing.dataVaues,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        console.log('nnn', data)
        return data.meta.listing_prediction
    } catch (e) {
        console.log('mmm', e)
    }
    return listing_prediction
}

const setPrice = ListingModel => async (id, price) => {
    try {
        const listing = await ListingModel.findOne({
            where: { id }
        })

        listing.price = price

        const pricedListing = await listing.save()

        return pricedListing
    } catch (e) {
        console.log(e)
    }
}

module.exports = ListingModel => ({
    saveListing: saveListing(ListingModel),
    getListings: getListings(ListingModel),
    setPrice: setPrice(ListingModel),
    geoCoder,
    getPrice
});