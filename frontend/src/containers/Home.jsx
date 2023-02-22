import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import ListingForm from "../components/ListingForm";
import Listings from "../components/Listings";
import Paginations from "../components/Paginations";

const Home = () => {
  const [listing, setListing] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ListingPerPage, setListingPerPage] = useState(2);
  const [active, setActive] = useState(1);
  const indexOfLastListing = currentPage * ListingPerPage;
  const indexOfFirstListing = indexOfLastListing - ListingPerPage;
  const currentListing = listing.slice(indexOfFirstListing, indexOfLastListing);
  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
  }
  const previous_number = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  }
  const next_number = () => {
    if (currentPage !== Math.ceil(listing.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  }
  return (
    <main className="home">
      <Helmet>
        <title>Real Estate - Home</title>
        <meta
          name='description'
          content='Real Estate Home Page'
        />
      </Helmet>
      <section className='home__form'>
        <ListingForm setListing={setListing} />
      </section>
      <section className='home__listings'>
        <Listings setListing={currentListing} />
      </section>
      <section className='home__pagination'>
        <div className='row'>
          {
            listing.length !== 0 ? (
              <Pagination
                itemsPerPage={ListingPerPage}
                count={listing}
                visitPage={visitPage}
                previous={previous_number}
                next={next_number}
                active={active}
                setActive={setActive}
              />
            ) : (
              <></>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Home
