import React, { useState } from 'react';
import './HeroStory.css';
import HImage from '../../../components/OurStory/HeroStory/HImage.png';

const HeroStory = () => {
  const [WWSDropdown, setWWSDropdown] = useState(null);
  
    const handleWWSDropdownClick = (index) => {
      setWWSDropdown(WWSDropdown === index ? null : index);
    };

    const WWSValues = [
      {
        title: "Read More",
        content:"One memory, however, has stayed with me. I had a close friend who struggled deeply because his parents couldn’t afford the textbooks he needed. I still remember his exact words till date, “I feel like a farmer who comes to the farm without a cutlass and a hoe. What do I aim to achieve?” By the following term, he had dropped out. That moment broke something in me. I desperately wished that I could help him, but I couldn’t. I was just a child myself. As the years went by, life moved on, and that memory faded into the background until one day, it all came rushing back. My husband and I were cleaning out his foster son's room, and there it was a stack of textbooks he had used over the years, still fairly neat but already gathering dust. My first instinct was to clear them out and discard everything. We don’t have kids yet, and there’s no one around who would need them. But then, I paused. That memory of my friend, the struggle, the frustration of not having the tools to learn hit me so hard. It was like his words were echoing in my ears again. I realized something simple but powerful: there are still so many children out there, just like my friend and I were eager to learn but held back because they lack basic resources. And at the same time, there are countless families with unused books or other academic resources, sitting forgotten on shelves or in storage. It was at that moment that EduKit Nigeria was born.",
      }
    ]


  return (
    <div className='Hstory-container'>
      <div className='Hstory-text'> 
        <h2>OUR STORY</h2>
      </div>
      <img src={HImage} alt="girl students" />

      <div className='WWS-container'>
        <div className='WWS1'>
          <h2> WE STARTED</h2>
          <p className='WWS1-Text'>Growing up in a small, humble home, I learned early on the value of education and the weight of its challenges. My parents did everything they could to provide the textbooks I needed. Yet, there were times I chose not to ask them for books I could manage without, just to spare them the burden. In school, not having certain textbooks often meant punishment, and I remember standing outside the classroom more times than I care to admit.            
          </p>

          <div>
            {WWSValues.map((value, index) => (
            <div className="WWS-drop" key={index}>
              <div className="WWS-header"
              onClick={() => handleWWSDropdownClick(index)}>
                <h4>{value.title}</h4>
                <p className="WWS-plus">{WWSDropdown === index ? "-" : "+"}</p>
              </div>
              {WWSDropdown === index && (
                <p className="WWS-info">{value.content}</p>)}
            </div>
            ))}
          </div>

        </div>

        <div className='WWS2'>
          <div className='founder-card'>
          <h2>Fausat Abiola</h2>
          <p>Founder, Educational Kits for Charity Foundation</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HeroStory;