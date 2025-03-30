import { useState } from 'react'
import './Learning.css'
import Boy from './learning_images/boy.png'
import Laptop from './learning_images/laptop-on-table.png'

function Learning() {
  const [toReadMore, setToReadMore] = useState(null)
  
  // I use this const=more as a placeholder for now
  const more = [
    {
      description:'We have partnered with very top organization around the world, such as......'
    }
  ]

  const handleReadDropdown = (index) => {
    setToReadMore(toReadMore === index ? null : index);
  }

  return (
    <>
    <div className='E-learn'>
      <div className='Ment'>
        <div className='learn-desc'>
          <h1>
          E-LEARNING & MENTORSHIP
          </h1>
          <p>
            We are working to establish an e-learning library that will provide access to
            a wide range of books through partnerships with authors and publishers.
            Additionally, we aim to collaborate with academic counselors to offer 
            mentorships and career guidance.
          </p>
        </div>
        {more.map((word, index) => (
          <div className='learn-more' onClick={() => handleReadDropdown(index)}>
            <div className='learn-head'>
              <h4>Read More</h4>
              {/* {toReadMore === index && (
              <p className='learn-content'>{ word.description}</p>
              )} */}
            </div>
            <p className="Read-symb">{toReadMore === index ? "-" : "+"}</p>
          </div>
        ))}

      </div>
      <div className='on-table'>
        <img src={Laptop} alt ='picture' />
      </div>
    </div>
    <div className='found-join'>
      <div className='found-desc'>
        <p>
          Join us on this mission. Let's give every
          child the tools they need to succeed, 
          one book at a time.
        </p>

        <button>
          Make a Donation
        </button>
      </div>
    </div>
    </>
  )
}

export default Learning
