import React from 'react';
import appointment from '../../assets/images/doctor-small.png';
import appo from '../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appo})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={appointment} alt="" />
            </div>


            <div className='flex-1'>
                <h3 className='text-xl font-bold text-primary py-2'>Appointment</h3>
                <h2 className='text-3xl font-semibold text-white py-2'>Make an appointment Today</h2>
                <p className='text-white py-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary uppercase text-white font-bold  bg-gradient-to-r from-secondary to-primary py-2">Get Started</button>
            </div>
        </section>
    );
};

export default Appointment;