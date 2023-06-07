import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const Cart = () => {

    let [data, setData] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3005/product/' + id, {
        }).then(res => {
            res.json().then(record => {
                let datarecord = [record]
                setData(datarecord);
            })
                .catch(err => {
                    console.log(err);
                })

        }).catch(err => { console.log(err) })
    }, setData)

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

            <div className="cart_area section_padding_100 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-table clearfix">
                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>Old Price</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data && data.map((v, i) => {
                                            return (
                                                <tr>
                                                    <td className="cart_product_img d-flex align-items-center">
                                                        <a href="#"><img src={v.image} alt="Product" /></a>
                                                    </td>
                                                    <td>
                                                        <h6>{v.name}</h6>
                                                    </td>
                                                    <td className="total_price"><span>{v.o_price}</span></td>
                                                    <td class="qty">
                                                        <div class="quantity">
                                                            <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                            <input type="number" class="qty-text" id="qty" step="1" min="1" max="99" name="quantity" value="1" />
                                                            <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                        </div>
                                                    </td>
                                                    <td className="price"><span>{v.price}</span></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-footer d-flex mt-30">
                                <div className="back-to-shop">
                                    <a href='/shop'>Continue_shooping</a>
                                </div>
                                <div className="update-checkout w-100 text-right">
                                    <a href="#">clear cart</a>
                                    <a href="#">Update cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="coupon-code-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Cupon code</h5>
                                    <p>Enter your cupone code</p>
                                </div>
                                <form action="#">
                                    <input type="search" name="search" placeholder="#569ab15" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="shipping-method-area mt-70">
                                <div className="cart-page-heading">
                                    <h5>Shipping method</h5>
                                    <p>Select the one you want</p>
                                </div>
                                <div className="custom-control custom-radio mb-30">
                                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor="customRadio1"><span>Next day delivery</span><span>$4.99</span></label>
                                </div>
                                <div className="custom-control custom-radio mb-30">
                                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor="customRadio2"><span>Standard delivery</span><span>$1.99</span></label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label d-flex align-items-center justify-content-between" htmlFor="customRadio3"><span>Personal Pickup</span><span>Free</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            {data.map((v, i) => {
                                return (
                                    <div className="cart-total-area mt-70">
                                        <div className="cart-page-heading">
                                            <h5>CART TOTAL</h5>
                                            <p>Final info</p>
                                        </div>
                                        <ul className="cart-total-chart">
                                            <li><span>OLd Price</span> <span>{v.o_price}</span></li>
                                            <li><span>Subtotal</span> <span>{v.price}</span></li>
                                            <li><span>Shipping</span> <span>Free</span></li>
                                            <li><span><strong>Total</strong></span> <span><strong>{v.price}</strong></span></li>
                                        </ul>
                                        <Link to={"/checkout/" + v.id} className="btn karl-checkout-btn">Proceed to checkout</Link>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cart;
