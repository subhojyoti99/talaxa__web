import React from 'react'

export default function About() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                    <h3 className="fs-5 text-center mb-3">AbouT_us</h3>
                    </div>
                    <div className="col-md-6">
                        <img src="images/19.jpg" alt="About" className="w-75 mt-5" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-6 mb-2">What Is <b>TalaxA</b></h1>
                        <hr className="w-50" />
                        <p className="lead mb-4">Talaxa is an easy way to chronicle and share the things you do, 
                        the way you feel, and all the other things in between that make up your life, 
                        with the people close to you.
                        <br />
                        It's instant gratification, instant self-indulgence, instant celebrity, instantly <b>YOU</b>.
                        <br />
                        Share your life stream, live your life with your campus mates.
                        <br />
                        This website is specially designed for college students to get an opportunity to interact and share their talents in this platform. 
                        Starting from sharing shayaris,poetry,blogging to publishing new inventions and news- 
                        this platform is the best place to <b>showcase all your hidden talents with your college friends.</b></p>
                        <button className="btn btn-secondary px-4 py-2 shadow">Start Your Journey</button>
                        <button className="btn btn-dark px-4 py-2 ms-2 shadow">ContacT_us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
