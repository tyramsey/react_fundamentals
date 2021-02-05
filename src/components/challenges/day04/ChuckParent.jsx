import React, { useState } from 'react';


const ChuckParent = () => {
    const [jokes, setDisplayJoke] = useState([]);

    function fetchRandomJoke() {
        const url = 'https://api.chucknorris.io/jokes/random'

        fetch(url)
      .then(res => res.json())
      .then(json => {
        setDisplayJoke(json.value);  
        console.log(json.value);
    })
      .catch(err => console.log(err));
    }

    // function displayJoke() {
    //     return jokes
    // }

    return ( <div>
        <button onClick={fetchRandomJoke}>Round into a Laugh</button>
            {jokes}
    </div> );
}
 
export default ChuckParent;