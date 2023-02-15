export const fixImage = (image) => {
    const isDataImage = image.slice(0, 4) === 'data' ? true : false
    console.log(isDataImage)

    if (isDataImage) {
        return image
    } else {
        return `${(window.location.href).slice(0, -1)}${image}`
    }
}