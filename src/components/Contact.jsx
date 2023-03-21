import React from 'react';
import QueriesImg from './images/any_queries2.jpg';

export default function Contact() {
    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">ContacT_us</h3>
                            <h1 className="diaplay-6 text-center mb-4">
                                Have Some <b>Queries..?</b>
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="images/any_queries2.jpg" alt="Contact" className="w-50 opacity-25" />
                        </div>
                        <div className="col-md-6">
                            <form href="mailto:subhajyotisingha@gmail.com" method="post" enctype="text/plain">
                                <div class="mb-3">
                                    <label for="name" class="form-label">YouR_name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Abcd Xyz" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">EmaiL_address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">YouR_message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-dark px-4 shadow rounded-pill">Send <i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
