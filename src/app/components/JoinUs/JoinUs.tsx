"use client";
import React from 'react'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';


  interface Values {
    fullName: string;
    email: string;
    why: string;
  }

export const JoinUs = () =>{
  return (
    <section className="mt-[62px] py-[50px] bg-[#262595] clip-path-custom-clip md:clip-path-custom-clip-none md:py-[40px] xl:clip-path-custom-clip-desktop">
        <div className='container w-auto md:justify-between'>
            <div className='md:w-[375px]'>
            <h2 className='mt-[47px] text-[34px] font-bold text-white md:text-[50px] md:leading-[123%] md:mt-0'>Join Us And Support Sister Street!</h2>
            <p className='mt-[16px] text-[20px] text-white'>We truly value your interest in our team, and we can&apos;t thank you enough for considering joining our team, testing our app, providing feedback, or making a donation.</p>
            <p className='md:mt-[20px] text-[20px] text-white'> Whatever the reason for getting in touch, we&apos;re always here to listen and support you. Please feel free to reach out to us anytime.
            </p>
            </div>
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
        <Form className='flex flex-col mt-[30px] md:ml-[20px] md:w-[375px] md:mt-0'>
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

          <button className='btn-main mt-[46px]' type="submit">JOIN US</button>
          <p className='mt-[10px] mb-[47px] text-[16px] text-white'>By clicking the button, you consent to the processing of your personal data.</p>
        </Form>
      </Formik>
        </div>
    </section>
  )
}

