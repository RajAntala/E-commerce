import { useState, useEffect, useParams } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {

    let [data, setData] = useState('');
    let [active, setactive] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3005/product")
            .then(async (ress) => {
                let record = await ress.json();
                if (record) {
                    setData(record)
                }
                else {
                    console.log("Record Not Found")
                }
            })
            .catch((err) => {
                console.log("Somthing Wrong");
            })
    }, setData);

    const filter = async (item) => {
        await fetch('http://localhost:3005/product', {
        }).then(res => {
            res.json().then(record => {
                setactive(false);
                if (item) {
                    let updateData = record.filter((v, index) => {
                        if (v.category == item) {
                            return v;
                        }
                    });
                    setData(updateData)
                }
                else {
                    console.log(record);
                    setData(record);
                }
            });
        }).catch(err => { console.log(err) })
    }

    return (
        <div>
            <section className="top-discount-area d-md-flex align-items-center">
                <div className="single-discount-area">
                    <h5>Free Shipping &amp; Returns</h5>
                    <h6><a href="#">BUY NOW</a></h6>
                </div>

                <div className="single-discount-area">
                    <h5>20% Discount for all dresses</h5>
                    <h6>USE CODE: Colorlib</h6>
                </div>

                <div className="single-discount-area">
                    <h5>20% Discount for students</h5>
                    <h6>USE CODE: Colorlib</h6>
                </div>
            </section>

            <section className="welcome_area">
                <div className="welcome_slides owl-carousel">

                    <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(img/bg-img/bg-1.jpg)' }}>
                        <div className="container h-100">
                            <div data-animationclassName="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 className="bounceInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                        <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Fashion Trends</h2>
                                        <a href="#" className="btn karl-btn" data-animation="fadeInUp" data-delay="1s" data-duration="500ms">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(assets/img/bg-img/bg-4.jpg)' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                        <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Summer Collection</h2>
                                        <a href="#" className="btn karl-btn" data-animation="fadeInLeftBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(assets/img/bg-img/bg-2.jpg)' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                        <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">Women Fashion</h2>
                                        <a href="#" className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="top_catagory_area d-md-flex clearfix">

                <div className="single_catagory_area d-flex align-items-center bg-img" style={{ backgroundImage: 'url(assets/img/bg-img/bg-2.jpg)' }}>
                    <div className="catagory-content">
                        <h6>On Accesories</h6>
                        <h2>Sale 30%</h2>
                        <Link to="/shop" className="btn karl-btn">SHOP NOW</Link>
                    </div>
                </div>

                <div className="single_catagory_area d-flex align-items-center bg-img" style={{ backgroundImage: 'url(assets/img/bg-img/bg-3.jpg)' }}>
                    <div className="catagory-content">
                        <h6>in Bags excepting the new collection</h6>
                        <h2>Designer bags</h2>
                        <Link to="/shop" className="btn karl-btn">SHOP NOW</Link>
                    </div>
                </div>
            </section>

            <section className="new_arrivals_area section_padding_100_0 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading text-center">
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="karl-projects-menu mb-100">
                    <div className="text-center portfolio-menu">
                        <button className="btn active" onClick={() => filter('')}>ALL</button>
                        <button className="btn" onClick={() => filter('Women')}>WOMAN</button>
                        <button className="btn" onClick={() => filter('Men')}>MAN</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row karl-new-arrivals">
                        {data ? data.filter((data, id) => {
                            return data;
                        }).map((v, i) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                                    <div className="product-img">
                                        <img src={v.image} alt style={{ height: "500px" }} />
                                        <div className="product-quicview">
                                            <NavLink to={'/cart/' + v.id} data-toggle="modal"><i className="ti-plus" /></NavLink>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <h4 className="product-price">{v.price}</h4>
                                        <p>{v.name}</p>

                                        <NavLink to={'cart/' + v.id} className="add-to-cart-btn">ADD TO CART</NavLink>
                                    </div>
                                </div>
                            )
                        }) : ""}
                    </div>
                </div>
            </section>

            <section className="offer_area height-700 section_padding_100 bg-img" style={{ backgroundImage: 'url(assets/img/bg-img/bg-5.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-end justify-content-end">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="offer-content-area wow fadeInUp" data-wow-delay="1s">
                                <h2>White t-shirt <span className="karl-level">Hot</span></h2>
                                <p>* Free shipping until 25 Dec 2017</p>
                                <div className="offer-product-price">
                                    <h3><span className="regular-price">$25.90</span> $15.90</h3>
                                </div>
                                <Link to="/shop" className="btn karl-btn mt-30">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="karl-testimonials-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_heading text-center">
                                <h2>Testimonials</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">

                            <div className="single-testimonial-area text-center">
                                <span className="quote">"</span>
                                <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                                <div className="testimonial-info d-flex align-items-center justify-content-center">
                                    <div className="tes-thumbnail">
                                        <img src="assets/img/bg-img/tes-1.jpg" alt />
                                    </div>
                                    <div className="testi-data">
                                        <p>Michelle Williams</p>
                                        <span>Client, Los Angeles</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Home;
