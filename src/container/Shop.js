import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Shop = () => {

    let [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/product")
            .then(async (ress) => {
                let record = await ress.json();
                if (record) {
                    setProduct(record);
                }
                else {
                    console.log("Record Not Found")
                }
            })
            .catch((err) => {
                console.log("Somthing Wrong");
            })
    }, setProduct);

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

            <div className="modal fade" id="quickview" tabIndex={-1} role="dialog" aria-labelledby="quickview" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body">
                            <div className="quickview_body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-lg-5">
                                            <div className="quickview_pro_img">
                                                <img src="assets/img/product-img/product-1.jpg" alt />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7">
                                            <div className="quickview_pro_des">
                                                <h4 className="title">Boutique Silk Dress</h4>
                                                <div className="top_seller_product_rating mb-15">
                                                    <i className="fa fa-star" aria-hidden="true" />
                                                    <i className="fa fa-star" aria-hidden="true" />
                                                    <i className="fa fa-star" aria-hidden="true" />
                                                    <i className="fa fa-star" aria-hidden="true" />
                                                    <i className="fa fa-star" aria-hidden="true" />
                                                </div>
                                                <h5 className="price">$120.99 <span>$130</span></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                                                <a href="#">View Full Product Details</a>
                                            </div>

                                            <form className="cart" method="post">
                                                <div className="quantity">
                                                    <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                    <input type="number" className="qty-text" id="qty" step={1} min={1} max={12} name="quantity" defaultValue={1} />
                                                    <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                </div>
                                                <button type="submit" name="addtocart" value={5} className="cart-submit">Add to cart</button>

                                                <div className="modal_pro_wishlist">
                                                    <a href="wishlist.html" target="_blank"><i className="ti-heart" /></a>
                                                </div>

                                                <div className="modal_pro_compare">
                                                    <a href="compare.html" target="_blank"><i className="ti-stats-up" /></a>
                                                </div>
                                            </form>
                                            <div className="share_wf mt-30">
                                                <p>Share With Friend</p>
                                                <div className="_icon">
                                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="shop_grid_area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="shop_sidebar_area">
                                <div className="widget catagory mb-50">

                                    <div className="nav-side-menu">
                                        <h6 className="mb-0">Catagories</h6>
                                        <div className="menu-list">
                                            <ul id="menu-content2" className="menu-content collapse out">

                                                <li data-toggle="collapse" data-target="#women2">
                                                    <a href="javascript:void(0)">Woman wear</a>
                                                    <ul className="sub-menu collapse show" id="women2">
                                                        <li><a href="javascript:void(0)">Midi Dresses</a></li>
                                                        <li><a href="javascript:void(0)">Maxi Dresses</a></li>
                                                        <li><a href="javascript:void(0)">Prom Dresses</a></li>
                                                        <li><a href="javascript:void(0)">Little Black Dresses</a></li>
                                                        <li><a href="javascript:void(0)">Mini Dresses</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="#man2" className="collapsed">
                                                    <a href="javascript:void(0)">Man Wear</a>
                                                    <ul className="sub-menu collapse" id="man2">
                                                        <li><a href="javascript:void(0)">Man Dresses</a></li>
                                                        <li><a href="javascript:void(0)">Man Black Dresses</a></li>
                                                        <li><a href="javascript:void(0)">Man Mini Dresses</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="#kids2" className="collapsed">
                                                    <a href="javascript:void(0)">Children</a>
                                                    <ul className="sub-menu collapse" id="kids2">
                                                        <li><a href="javascript:void(0)">Children Dresses</a></li>
                                                        <li><a href="javascript:void(0)">Mini Dresses</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="#bags2" className="collapsed">
                                                    <a href="javascript:void(0)">Bags &amp; Purses</a>
                                                    <ul className="sub-menu collapse" id="bags2">
                                                        <li><a href="javascript:void(0)">Bags</a></li>
                                                        <li><a href="javascript:void(0)">Purses</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="#eyewear2" className="collapsed">
                                                    <a href="javascript:void(0)">Eyewear</a>
                                                    <ul className="sub-menu collapse" id="eyewear2">
                                                        <li><a href="javascript:void(0)">Eyewear Style 1</a></li>
                                                        <li><a href="javascript:void(0)">Eyewear Style 2</a></li>
                                                        <li><a href="javascript:void(0)">Eyewear Style 3</a></li>
                                                    </ul>
                                                </li>

                                                <li data-toggle="collapse" data-target="#footwear2" className="collapsed">
                                                    <a href="javascript:void(0)">Footwear</a>
                                                    <ul className="sub-menu collapse" id="footwear2">
                                                        <li><a href="javascript:void(0)">Footwear 1</a></li>
                                                        <li><a href="javascript:void(0)">Footwear 2</a></li>
                                                        <li><a href="javascript:void(0)">Footwear 3</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget price mb-50">
                                    <h6 className="widget-title mb-30">Filter by Price</h6>
                                    <div className="widget-desc">
                                        <div className="slider-range">
                                            <div data-min={0} data-max={3000} data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min={0} data-value-max={1350} data-label-result="Price:">
                                                <div className="ui-slider-range ui-widget-header ui-corner-all" />
                                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                            </div>
                                            <div className="range-price">Price: 0 - 1350</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget color mb-70">
                                    <h6 className="widget-title mb-30">Filter by Color</h6>
                                    <div className="widget-desc">
                                        <ul className="d-flex justify-content-between">
                                            <li className="gray"><a href="javascript:void(0)"><span>(3)</span></a></li>
                                            <li className="red"><a href="javascript:void(0)"><span>(25)</span></a></li>
                                            <li className="yellow"><a href="javascript:void(0)"><span>(112)</span></a></li>
                                            <li className="green"><a href="javascript:void(0)"><span>(72)</span></a></li>
                                            <li className="teal"><a href="javascript:void(0)"><span>(9)</span></a></li>
                                            <li className="cyan"><a href="javascript:void(0)"><span>(29)</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget size mb-50">
                                    <h6 className="widget-title mb-30">Filter by Size</h6>
                                    <div className="widget-desc">
                                        <ul className="d-flex justify-content-between">
                                            <li><a href="javascript:void(0)">XS</a></li>
                                            <li><a href="javascript:void(0)">S</a></li>
                                            <li><a href="javascript:void(0)">M</a></li>
                                            <li><a href="javascript:void(0)">L</a></li>
                                            <li><a href="javascript:void(0)">XL</a></li>
                                            <li><a href="javascript:void(0)">XXL</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="shop_grid_product_area">
                                <div className="row">
                                    {product && product.map((v, i) => {
                                        return (
                                            <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.3s">

                                                <div className="product-img">
                                                    <img src={v.image} alt style={{ height: "350px" }} />
                                                </div>

                                                <div className="product-description">
                                                    <h4 className="product-price">{v.price}</h4>
                                                    <p>{v.name}</p>

                                                    <Link to={'/cart/' + v.id} className="add-to-cart-btn">ADD TO CART</Link>
                                                </div>

                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Shop;
