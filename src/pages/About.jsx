import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Medicare is a national health insurance program that provides coverage to individuals aged 65 and older, as well as certain younger individuals with disabilities or specific medical conditions. It is a crucial part of the U.S. healthcare system, offering access to hospital care, medical services, and prescription drug coverage. The program is divided into different parts: Part A covers hospital insurance, Part B covers medical insurance, Part C (Medicare Advantage) offers private health plan options, 
            and Part D provides prescription drug coverage.</p>
            <p>Medicare helps millions of Americans manage healthcare costs, ensuring that those who are eligible can access necessary medical treatments without facing the financial burden of high healthcare expenses. Beneficiaries are often able to receive care from a wide range of healthcare providers, allowing for flexibility in treatment and care options. 
            The program is designed to be simple and accessible, with benefits tailored to the needs of seniors and those with qualifying disabilities</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>"To ensure that every eligible individual has access to comprehensive, affordable, and high-quality healthcare, empowering them to live healthier, longer lives with dignity and security."
Let me know if you need further edits or details!</p>
          </div>
        </div>
        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
        </div>
        <div className='flex flex-col md:flex-row mb-20' >
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>EFFICIENCY:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Acess to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION</b>
          <p>Tailored recommedations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
    </div>
  )
}

export default About