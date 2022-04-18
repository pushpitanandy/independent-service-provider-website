import React from 'react';

const ProviderInfo = () => {
    return (
        <div id='providerInfo'>
            <h2 className='mt-5 text-center'>Service Provider's Info</h2>
            <div className="container d-flex">
                <div>
                    <img className='w-100 m-5' src="https://img.freepik.com/free-photo/image-handsome-caucasian-man-party-suit-smiling-pleased-attend-formal-event-standing-white-background_1258-64650.jpg?t=st=1650288571~exp=1650289171~hmac=0f19189f01703332d78f0888b04b948a5dbda4ba424d98d1c3dda1af9a528d35&w=740" alt="" />
                </div>
                <div className='w-100 m-5 p-5'>
                    <h3 className='text-success'>Robert Dias</h3>
                    <p>I'm a Regulated Canadian Immigration Consultant (RCIC) licensed under the Immigration Consultants of Canada Regulatory Council (ICCRC). I'm a believer who is Forever Hopeful. My commitment, passion and transparency towards this work is what my clients and audience seek.</p>
                </div>
            </div>
        </div>
    );
};

export default ProviderInfo;