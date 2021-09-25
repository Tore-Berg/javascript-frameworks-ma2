import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from './Heading';


export default function Contact() {
    const schema = yup.object().shape({
        name: yup.string()
            .required("Please enter your name").min(4, "At least 3 characters"),
        website: yup.string()
            .matches(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/, "Invalid url"),
        age: yup.number().required()
            .min(10, "You have to be at least 10 years old")
            .max(20, "You have to be max 20 years old")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);


    return (
        <>
            <Heading title={`Contact`} />
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Enter your name" />
                {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                <input {...register("age")} placeholder="Enter your age" />
                {errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}
                <input {...register("website")} placeholder="Your website adress" />
                {errors.website && <span style={{ color: 'red' }} >{errors.website.message}</span>}
                <button type="submit">Send</button>
            </form>
        </>
    )
}
