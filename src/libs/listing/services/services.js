const saveListing = ListingModel => async listing => {
    const NewListing = await ListingModel.create({
        
    })

    return NewListing
}

module.exports = ListingModel => ({
    saveListing: saveListing(ListingModel),
    getListings: getListings(ListingModel),
});