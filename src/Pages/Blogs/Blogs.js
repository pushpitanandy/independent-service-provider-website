import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-dark text-center m-3'>Blogs</h2>
            <div className='border border-2 border-success rounded-2 m-5 p-5'>
                <h3>Authentication VS Authorization</h3>
                <p>Authentication means to verify who is someone. For example, when a user tries to log into an account by giving his or her user ID and password, the information is verified by matching the saved information in database. if the ID and password matches, the user gets the access of the account.</p>
                <p>After the user logs in, he or she gets the access of some data and power to do some changes in the website. This is known as authorization. It is the process of giving access to specific data and features, based on a user's authority.</p>
            </div>
            <div className='border border-2 border-primary rounded-2 m-5 p-5'>
                <h3>Why Firebase?</h3>
                <p>Firebase allows us to use their security system to secure user's personal data while providing authorization to an application. For example, email and password authentication and signing in with user's Google account.</p>
                <h3>What other options do we have to implement authentication?</h3>
                <p>There are many alternatives of Firebase which we may use to implement authentication. For example, Back4App, Parse, AWS Amplify, Backendless, and so on.</p>
            </div>
            <div className='border border-2 border-success rounded-2 m-5 p-5'>
                <h3>Other services provided by firebase other than authentication</h3>
                <p>Firebase can also be used for mobile applications. Some services which are provided by firebase are Cloud Firestone, Cloud Functions, Cloud Storage, Google Analytics and so on.</p>
            </div>
        </div>
    );
};

export default Blogs;