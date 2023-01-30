export default function FormDataCreator(data) {
    const formObj = {...data}

    const formData = new FormData()
    for (const key in formObj) {
        
            formData.append(key, formObj[key])
        
    }

    return formData
}