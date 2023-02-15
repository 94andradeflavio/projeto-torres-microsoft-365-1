export const fixImage = (image) => {
    const typeImage = image.slice(0, 4)
    const location = window.location.href

    // console.log('imageURL', image)

    if (location.slice(0, 4) === 'file') {
        return image
    }

    if (typeImage === 'data') {
        return image
    } else {
        const sliceLocation = (location).slice(0, -1)
        const replaceString = sliceLocation.replace('/index.htm', '')

        // console.log('location', location)

        return `${replaceString}${image.replace('./static', '/static')}`
    }
}