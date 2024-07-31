import React from 'react';

const FAQ = () => {
  return (
    <div className="our-faq-wrapper">
      <div className="faq-container">
        <div className="faq-row">
          <div className="col-md-12">
            <div className="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="accordion">
              <div className="faq-card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Frequently Asked Questions ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="faq-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam quis perferendis beatae? Alias reprehenderit ut voluptatem mollitia sit aut eum ratione laudantium soluta ipsam adipisci, molestias delectus iure. Recusandae?
                  </div>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Frequently Asked Questions ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam quis perferendis beatae? Alias reprehenderit ut voluptatem mollitia sit aut eum ratione laudantium soluta ipsam adipisci, molestias delectus iure. Recusandae?
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Frequently Asked Questions ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam quis perferendis beatae? Alias reprehenderit ut voluptatem mollitia sit aut eum ratione laudantium soluta ipsam adipisci, molestias delectus iure. Recusandae?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="accordion2">
              <div className="card">
                <div className="card-header" id="heading4">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Frequently Asked Questions ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapse4"
                  className="collapse"
                  aria-labelledby="heading4"
                  data-parent="#accordion2"
                >
                  <div className="faq-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam quis perferendis beatae? Alias reprehenderit ut voluptatem mollitia sit aut eum ratione laudantium soluta ipsam adipisci, molestias delectus iure. Recusandae?
                  </div>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-card-header" id="heading5">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      Frequently Asked Questions ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapse5"
                  className="collapse"
                  aria-labelledby="heading5"
                  data-parent="#accordion2"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam quis perferendis beatae? Alias reprehenderit ut voluptatem mollitia sit aut eum ratione laudantium soluta ipsam adipisci, molestias delectus iure. Recusandae?
                  </div>
                </div>
              </div>
              <div className="faq-card">
                <div className="faq-card-header" id="heading6">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      Frequently Asked Questions ?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapse6"
                  className="collapse show"
                  aria-labelledby="heading6"
                  data-parent="#accordion2"
                >
                  <div className="faq-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, numquam quis perferendis beatae? Alias reprehenderit ut voluptatem mollitia sit aut eum ratione laudantium soluta ipsam adipisci, molestias delectus iure. Recusandae?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
