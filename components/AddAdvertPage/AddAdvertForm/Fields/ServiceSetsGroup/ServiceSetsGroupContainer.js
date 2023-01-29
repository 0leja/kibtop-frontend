import { useState } from "react";
import { useFormContext } from "react-hook-form";
import ServiceSetsGroup from "./ServiceSetsGroup";

const ServiceSetsGroupContainer = ({requiredFields}) => {
    const {register, setValue, getValues} = useFormContext()

    const setLiftValue = addLifts => {
        const {lifts} = getValues()
        setValue('lifts', Number(lifts) + addLifts)
    }

    const setTopValue = addTop => {
        const {top} = getValues()
        setValue('top', Number(top) + addTop)
    }

    const setVipValue = addVip => {
        const {vip} = getValues()
        setValue('vip', Number(vip) + addVip)
    }

    const [fullPrice, setFullPrice] = useState(0)

    const addFullPrice = price => {
        setFullPrice(fullPrice => fullPrice+price)
    }


    return (
        <>
            <input {...register('lifts', {required: false})} type="text" hidden={true} />
            <input {...register('top', {required: false})} type="text" hidden={true} />
            <input {...register('vip', {required: false})} type="text" hidden={true} />

            <ServiceSetsGroup {...{setLiftValue, setTopValue, setVipValue, fullPrice, addFullPrice, requiredFields}} />
        </>
    );
}

export default ServiceSetsGroupContainer;