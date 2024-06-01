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
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Linkedin from "./Linkedin";
import Image from "next/image";
import woman from "../../../images/woman4.svg"

interface Values {
  fullName: string;
  email: string;
  why: string;
}

export const LetsMeet = () => {
  return (
    <section className="mt-[50px] bg-[#262595] pb-[50px] md:pt-[40px] relative">

        <Image
        className="sm:hidden md:block md:absolute bottom-[40px] right-[32px] md:w-[290px] md:h-[800px] xl:right-[120px] xl:bottom-[118px]"
        priority
        src={woman}
        height={500}
        width={180}
        alt="woman4"
        />
   
      <div className="container md:flex-col">
        <h2 className="mt-[47px] text-[34px] font-bold text-white md:mt-0 md:text-[70px] md:leading-[123%] xl:text-[70px] xl:leading-[120%]">
          Let’s meet
        </h2>
        <p className="text-[26px] font-bold text-white mt-[50px] sm:hidden  md:block">
          Say Hello!
        </p>
        <p className="xl:text[24px] mt-[16px] text-[20px] text-white">
          Drop us a line! We&apos;d love to hear from you
        </p>

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
          <Form className="mt-[30px] flex flex-col md:ml-0 md:w-[574px] xl:w-[793px]">
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

            <button className="btn-main mt-[46px] md:w-[343px]" type="submit">
              JOIN US
            </button>
            <p className="mb-[47px] mt-[10px] text-[16px] text-white md:w-[343px] xl:w-[331px]">
              By clicking the button, you consent to the processing of your
              personal data.
            </p>
          </Form>
        </Formik>
        <div className="mt-[36px] flex justify-between px-[37px] md:w-[284px] md:px-[1px]">
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </section>
  );
};
