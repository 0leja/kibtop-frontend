import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import { useLanguage } from "../../../../../../locales/hooks/useLanguage"
import Text from "../../../../../Elementes/Text/Text"
import Image from "next/image"


const MobFileField = () => {
    const [valueSrc, setValueSrc] = useState(null)
    const {t} = useLanguage()
    const {register, formState, getFieldState, watch} = useFormContext()
    const {isDirty, error} = getFieldState('file', formState)
    const isError = isDirty  && error 

    const value = watch('file')


    const fileFormValid = (filelist) => {
        if(!filelist || filelist.length === 0) return true
        
        const fileName = filelist[0].name
        const fileFormat = fileName.split('.')[fileName.split('.').length - 1]

        const allowedFormats = ['jpg', 'jpeg', 'png']
        if(!allowedFormats.some(format => format === fileFormat)) return false

        const fileSize = filelist[0].size
        const fileSizeKb = fileSize / 1024
        const fileSizeMb = fileSize / 1024**2

        if(fileSizeKb < 30 || fileSizeMb > 10) return false

        return true
    }

    useEffect(() => {
        if(!value?.length || !FileReader) {
            setValueSrc(null)
            return
        }

        if(!fileFormValid(value)) return

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setValueSrc(fileReader.result)
        }

        fileReader.readAsDataURL(value[0])

    }, [value])

    const isSelectedStyle = (!!watch('file')?.length) ? ' form__file-field--selected' : ''

    return (
        <>
            <div className={"form__file-field form__file-field--mob" + (isError ? ' form__file-field--error' : '') + isSelectedStyle}>
                <label className="label-file">
                        <input {...register('file', {
                                        validate: {
                                            format: val => fileFormValid(val) || t('invalid format')
                                        }
                                })} type="file" placeholder={t("Your email")} id="ava" />

                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_508_6265)">
                                    <path d="M30 5.33333L27.6124 2.07644C27.1368 1.43254 26.5282 0.910963 25.8326 0.551207C25.1371 0.191451 24.3728 0.00295652 23.5978 0L17.0688 0C16.2938 0.00295652 15.5295 0.191451 14.8339 0.551207C14.1384 0.910963 13.5297 1.43254 13.0541 2.07644L10.6666 5.33333H30Z" />
                                    <path d="M20 30C23.6819 30 26.6667 27.0152 26.6667 23.3333C26.6667 19.6514 23.6819 16.6667 20 16.6667C16.3181 16.6667 13.3334 19.6514 13.3334 23.3333C13.3334 27.0152 16.3181 30 20 30Z" />
                                    <path d="M31.6667 8H8.33333C6.12401 8.00267 4.00593 8.89075 2.4437 10.4694C0.88147 12.0481 0.00264643 14.1885 0 16.4211L0 31.5789C0.00264643 33.8115 0.88147 35.9519 2.4437 37.5306C4.00593 39.1093 6.12401 39.9973 8.33333 40H31.6667C33.876 39.9973 35.9941 39.1093 37.5563 37.5306C39.1185 35.9519 39.9974 33.8115 40 31.5789V16.4211C39.9974 14.1885 39.1185 12.0481 37.5563 10.4694C35.9941 8.89075 33.876 8.00267 31.6667 8ZM20 33.2632C18.0222 33.2632 16.0888 32.6705 14.4443 31.5601C12.7998 30.4497 11.5181 28.8715 10.7612 27.025C10.0043 25.1785 9.80629 23.1467 10.1921 21.1865C10.578 19.2262 11.5304 17.4256 12.9289 16.0124C14.3275 14.5991 16.1093 13.6367 18.0491 13.2468C19.9889 12.8569 21.9996 13.057 23.8268 13.8218C25.6541 14.5867 27.2159 15.8819 28.3147 17.5437C29.4135 19.2055 30 21.1593 30 23.1579C29.9974 25.8372 28.9429 28.4059 27.0681 30.3004C25.1934 32.195 22.6514 33.2605 20 33.2632Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_508_6265">
                                        <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        <img width={100} height={100} alt={''} src={valueSrc} className="file-img file-img--mob" style={{opacity: valueSrc ? 1 : 0}} />
                        
                </label>

                <label htmlFor="ava" className="form__text form__text--mob"><Text content="Add photo" /></label>
            </div>
        </>
    );
}

export default MobFileField;