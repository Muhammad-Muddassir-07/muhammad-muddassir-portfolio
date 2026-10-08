import services from "../data/services";

function Services(){
    return(

        <section id="services" className="section services">

            <div className="container">

                <div className="section-top">
                    <div>
                        <p className="section-label">04 — SERVICES</p>

                        <h2 className="section-title">
                            What I Can Build
                        </h2>

                        <p className="section-description">
                            Practical development services focused on clean design,
                            responsive experiences and reliable implementation.
                        </p>
                    </div>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <article className="service-card" key={service.number}>

                            <span className="service-number">
                                {service.number}
                            </span>

                            <div className="service-card-content">
                                <h3>{service.title}</h3>

                                <p>{service.description}</p>
                            </div>

                            <span className="service-arrow">
                                ↗
                            </span>

                        </article>
                    ))}
                </div>

            </div>
            
        </section>
    
    );
}

export default Services;