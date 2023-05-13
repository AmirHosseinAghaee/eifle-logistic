const priceFormat = (price) => {
    let Locale = Intl.NumberFormat('en-US');
    return Locale.format(price)
}

export default priceFormat ;