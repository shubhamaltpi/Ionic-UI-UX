export const convertToBase64 = (file) => {
    let data: any

    if (file) {
        const reader = new FileReader()
        reader.onload = () => {
            data = reader.result;
        }
        reader.readAsDataURL(file)
        return data
    }
}