const NodeGeocoder = require('node-geocoder')
const axios = require('axios')

const saveListing = ListingModel => async (listing, userID, latitude, longitude) => {
    let NewListing

    try {
        NewListing = await ListingModel.create({
            userID,
            latitude,
            longitude,
            ...listing
        })
        console.log(newListing)
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

const geoCoder = address => {
    const options = {
        provider: 'google',

        // Optional depending on the providers
        httpAdapter: 'https', // Default
        formatter: null         // 'gpx', 'string', ...
    };
    const geoCoder = NodeGeocoder(options)
    let code;
    geoCoder.geocode(address, function (err, res) {
        console.log(res);
        code = res[0]
        if (err) {
            console.log(err)
        }
    });

    return {
        latitude: code.latitude,
        longitude: code.longitude
    }
}

const getPrice = async (listing) => {
    let price;
    try {
        price = await axios.post('http://python.foodsquadapp.com/', listing)
        console.log('price', price)
    } catch(e){
        console.log(e)
    }
    return price[0].listing_prediction
}

module.exports = ListingModel => ({
    saveListing: saveListing(ListingModel),
    getListings: getListings(ListingModel),
    geoCoder,
    getPrice
});