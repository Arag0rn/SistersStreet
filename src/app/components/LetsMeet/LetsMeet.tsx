"use client"
import React from 'react'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
    import Facebook from "./Facebook"
    import Instagram from "./Instagram"
    import Linkedin from "./Linkedin"



  interface Values {
    fullName: string;
    email: string;
    why: string;
  }

export const LetsMeet = () => {
  return (
    <section className='pb-[50px] mt-[50px] bg-[#262595]'>
        <div className='container'>
            <h2 className='mt-[47px] text-[34px] font-bold text-white md:text-[50px] md:leading-[123%] md:mt-0 xl:text-[70px] xl:leading-[120%]'>Let’s meet</h2>
            <p className='mt-[16px] text-[20px] text-white xl:text[24px]'>Drop us a line! We&apos;d love to hear from you</p>

            <Formik
        initialValues={{
            fullName: '',
            email: '',
            why: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className='flex flex-col mt-[30px] md:ml-[20px] md:w-[375px] md:mt-0 xl:w-[570px]'>
          <label className='text-[20px] font-bold text-white' htmlFor="fullName">Full Name*</label>
          <Field className="mt-[8px]  rounded-[8px] p-[16px_16px_10px_16px]" id="fullName" name="fullName" placeholder="Full Name*" />

          <label className='mt-[30px] text-[20px] font-bold text-white' htmlFor="email">E-mail*</label>
          <Field className="mt-[8px] p-[16px_16px_10px_16px] rounded-[8px]" id="email" name="email" type="email" placeholder="E-mail*" />

          <label className='mt-[30px] text-[20px] font-bold text-white' htmlFor="why">Why you want to join us?</label>
          <Field
            className="mt-[8px] p-[34px_16px_50px_16px] rounded-[8px]"
            id="why"
            name="why"
            placeholder="Message"
            as="textarea"
          />

          <button className='btn-main mt-[46px] xl:w-[284px]' type="submit">JOIN US</button>
          <p className='mt-[10px] mb-[47px] text-[16px] text-white xl:w-[331px]'>By clicking the button, you consent to the processing of your personal data.</p>
        </Form>
      </Formik>
      <div className="mt-[36px] flex justify-between px-[37px] md:w-[284px] md:px-[1px]">
        <Facebook />
        <Instagram/>
        <Linkedin/>

      </div>
        </div>
    </section>
  )
}

