import React from 'react';
import picture from '../../images/pushpita1.png';

const About = () => {
    return (
        <div className='text-center'>
            <h3 className='m-4'>About</h3>
            <h2 className='text-success m-3'>Pushpita Nandy</h2>
            <img className='w-25' src={picture} alt="" />
            <h4 className='text-primary'>My Goal is to become a Full-Stack Web Developer.</h4>
            <p className='m-3 p-5'>To reach my goal, I will try to learn new techniques and develop my coding skills for building more and more websites. Though I am learning Web Development via Programming Hero's Course, I usually go through various contents regarding different topic from other websites like YouTube and Stack Overflow. This practice will be continued for my further improvment. </p>

        </div>
    );
};

export default About;