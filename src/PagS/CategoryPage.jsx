import { useState } from 'react';
import { Accordion } from 'rsuite';
import { Range, getTrackBackground } from 'react-range';
import 'rsuite/dist/rsuite.min.css';
import './CategoryPage.css';

import { IoSearch, IoGridSharp } from "react-icons/io5";
import { BsFillGrid1X2Fill } from "react-icons/bs";

const STEP = 1;
const MIN = 0;
const MAX = 500;

const CategoryPage = () => {
  const [values, setValues] = useState([0, 500]);

  return (
    <div className="container m-auto row">
      {/* Sidebar */}
      <div className="col-md-4 border p-4">
        {/* Categories */}
        <div>
          <h1 className="h5 text-one px-3" style={{ borderLeft: '5px solid #8c0d4f' }}>
            Categories
          </h1>
          <Accordion>
            <Accordion.Panel header="Men" defaultExpanded>
              <div className="d-flex flex-column mb-3">
                <div className="p-2"><a href="#" className="text-secondary">Men's Wear</a></div>
                <div className="p-2"><a href="#" className="text-secondary">Accessories</a></div>
              </div>
            </Accordion.Panel>
            <Accordion.Panel header="Women">
              <div className="d-flex flex-column mb-3">
                <div className="p-2"><a href="#" className="text-secondary">Women's Wear</a></div>
                <div className="p-2"><a href="#" className="text-secondary">Accessories</a></div>
              </div>
            </Accordion.Panel>
            <Accordion.Panel header="Kid">
              <div className="d-flex flex-column mb-3">
                <div className="p-2"><a href="#" className="text-secondary">Kid's Wear</a></div>
                <div className="p-2"><a href="#" className="text-secondary">Accessories</a></div>
              </div>
            </Accordion.Panel>
          </Accordion>
        </div>

        {/* Price Range */}
        <div className="mt-4 border p-3">
          <h1 className="h5 text-one px-3" style={{ borderLeft: '5px solid #8c0d4f' }}>
            Price Range
          </h1>
          <div className="price-range px-2 mt-3">
            <div className="d-flex justify-content-between mb-2">
              <span>${MIN}</span>
              <span>${MAX}</span>
            </div>
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: '36px',
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '8px',
                      width: '100%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        values,
                        colors: ['#ccc', '#8c0d4f', '#ccc'],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: 'center',
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#8c0d4f',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              )}
            />

            <div className="d-flex justify-content-between mt-3">
              <div className="input-group me-2">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  value={values[0]}
                  onChange={(e) => setValues([+e.target.value, values[1]])}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  value={values[1]}
                  onChange={(e) => setValues([values[0], +e.target.value])}
                />
              </div>
            </div>

            <button className="btn btn-primary w-100 mt-3" style={{ backgroundColor: '#8c0d4f', border: 'none' }}>
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-md-8">
        <div className="d-flex align-items-end justify-content-between">
          {/* Search */}
          <div>
            <label htmlFor="productSearch" className="text-two fw-semibold mb-1 d-block">Search Products</label>
            <div className="input-group" style={{ maxWidth: '280px' }}>
              <input
                type="text"
                id="productSearch"
                className="form-control text-two rounded-start-pill"
                placeholder="Search for products..."
              />
              <button
                type="button"
                className="btn rounded-end-pill"
                style={{ backgroundColor: '#8c0d4f', color: 'white' }}
              >
                <IoSearch className="fs-5" />
              </button>
            </div>
          </div>

          {/* View Toggle */}
          <div>
            <label htmlFor="view" className="text-two fw-semibold mb-1 d-block text-end">View</label>
            <div className="d-flex gap-2">

              <button
                type="button"
                className="btn d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: '#8c0d4f',
                  borderRadius: '0.5rem',
                  width: '40px',
                  height: '40px',
                  color: 'white',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                <IoGridSharp className="fs-5" />
              </button>

              <button
                type="button"
                className="btn d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: '0.5rem',
                  width: '40px',
                  height: '40px',
                  color: '#8c0d4f',
                  border: '1px solid #dee2e6'
                }}
              >
                <BsFillGrid1X2Fill className="fs-5" />
              </button>

            </div>
          </div>
        </div>
        {/* PRODUCTS ITEMS CARDS */}
        <div className="container d-flex flex-wrap gap-5 m-5">

          <div class="card" style={{width: "18rem"}}>
            <img src="https://www.bosch-pt.com.au/au/en/ocsmedia/363751-117/dimensional-drawing-image/767x767/tool-bag-gwt-4-1600a0265t.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="https://www.thelovelymadness.com/cdn/shop/files/931DFF4A-05CE-4653-8989-0B7DBB75A20B.jpg?v=1694796868&width=1200" class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              </div>
          </div>

        </div>
        {/* PRODUCTS ITEMS CARDS------ */}
      </div>
    </div>
  );
};

export default CategoryPage;