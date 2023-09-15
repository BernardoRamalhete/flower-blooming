export const useLoadImage = () => {
    return (imageSrc) => {
        if(process.server) return
        const img = new Image()
        img.src = imageSrc
    }
}