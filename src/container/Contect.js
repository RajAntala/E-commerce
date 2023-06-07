import React from 'react';

const Contect = () => {
    return (
        <div>
            <h2 className='mt-3 mb-3'>Contect Page</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11933.71581421495!2d72.86994637393948!3d21.208053862804974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2a17808633%3A0x46b88d7b44496c03!2sD%20Mart!5e1!3m2!1sen!2sin!4v1684382229013!5m2!1sen!2sin" width="100%" height="400" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


            <form className='container' style={{display:"flex",flexDirection:"column",gap:"3rem",alignItems:"center"}} action='https://formspree.io/f/xwkjzzlq'method='post'>
                <div className='card-body'>

                    <div className="form-group row">
                        <input type="text" style={{width:"300px"}} className="form-control" name='UserName' placeholder="USERNAME" />
                    </div>

                    <div className="form-group row">
                        <input type="email" style={{width:"300px"}} className="form-control" name='email' placeholder="EMAIL" />
                    </div>

                    <div className="form-group row">
                        <textarea type="text" style={{width:"300px"}} className="form-control" name='Message' placeholder="Enter Description" />
                    </div>

                    <div className="form-group row">
                        <button type="submit" value="Send" name='submit' className="btn btn-primary">
                            SEND
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contect;
