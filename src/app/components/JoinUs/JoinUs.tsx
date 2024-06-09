"use client";
import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

interface Values {
  fullName: string;
  email: string;
  why: string;
}

export const JoinUs = () => {
  return (
    <section className="mt-[62px] bg-[#262595] py-[50px] clip-path-custom-clip md:py-[40px] md:clip-path-custom-clip-none xl:py-[108px] xl:pb-[180px] xl:clip-path-custom-clip-desktop">
      <div className="container gap-[20px] md:justify-between xl:justify-center">
        <div className="md:w-[375px] xl:w-[570px]">
          <h2 className="mt-[47px] text-[34px] font-bold text-white md:mt-0 md:text-[50px] md:leading-[123%] xl:text-[70px] xl:leading-[120%]">
            Join Us And Support Sister Street!
          </h2>
          <p className="xl:text[24px] mt-[16px] text-[20px] text-white">
            We truly value your interest in our team, and we can&apos;t thank
            you enough for considering joining our team, testing our app,
            providing feedback, or making a donation.
          </p>
          <p className="xl:text[24px] text-[20px] text-white md:mt-[20px]">
            {" "}
            Whatever the reason for getting in touch, we&apos;re always here to
            listen and support you. Please feel free to reach out to us anytime.
          </p>
        </div>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            why: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>,
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className="mt-[30px] flex flex-col md:ml-[20px] md:mt-0 md:w-[375px] xl:w-[570px]">
            <label
              className="text-[20px] font-bold text-white"
              htmlFor="fullName"
            >
              Full Name*
            </label>
            <Field
              className="mt-[8px]  rounded-[8px] p-[16px_16px_10px_16px]"
              id="fullName"
              name="fullName"
              placeholder="Full Name*"
            />

            <label
              className="mt-[30px] text-[20px] font-bold text-white"
              htmlFor="email"
            >
              E-mail*
            </label>
            <Field
              className="mt-[8px] rounded-[8px] p-[16px_16px_10px_16px]"
              id="email"
              name="email"
              type="email"
              placeholder="E-mail*"
            />

            <label
              className="mt-[30px] text-[20px] font-bold text-white"
              htmlFor="why"
            >
              Why you want to join us?
            </label>
            <Field
              className="mt-[8px] rounded-[8px] p-[34px_16px_50px_16px]"
              id="why"
              name="why"
              placeholder="Message"
              as="textarea"
            />

            <button className="btn-main mt-[46px] xl:w-[284px]" type="submit">
              JOIN US
            </button>
            <p className="mb-[47px] mt-[10px] text-[16px] text-white xl:w-[331px]">
              By clicking the button, you consent to the processing of your
              personal data.
            </p>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
