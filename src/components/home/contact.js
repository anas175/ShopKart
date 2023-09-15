import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='contact-container' id="contact">
                <div className="container">
                    <form >
                        <div className='contact-wrapper'>
                            <div className="newsletter">
                                <p style={{ fontSize: '26px', fontWeight: '600' }}>Newslleter</p>
                                <p style={{ fontSize: '18px', fontWeight: '400' }}>Get news about articles and updates in your inbox</p>
                            </div>
                            <div className="form">
                                <input type="text" placeholder='NAME' required /> <br /> <br />
                                <input type="email" placeholder='EMAIL' required /> <br /> <br />
                                <textarea name="" id="" cols="30" rows="1" placeholder='MESSAGE' required></textarea>
                            </div>
                        </div>

                        <div className='d-flex get-in-touch'>
                            <div>
                                <h1>GET <br />
                                    IN TOUCH
                                </h1>
                            </div>
                            <div >
                                <button type='submit' className='send-btn'>SEND</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

            <div className='py-3 text-center  footer-btm'>
                <p>copyright 2022 All Reserved by SG</p>

            </div>
        </>
    );
}

export default Contact;
