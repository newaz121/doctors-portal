import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div className='my-20'>
            <h4 className='text-xl text-primary text-center font-bold my-12'>Available Appointments on:{format(date, 'pp')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></Service>)
                }

            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;