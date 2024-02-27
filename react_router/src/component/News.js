import { useParams, useState } from 'react'

const News = () => {

    // parameter value
    let { top } = useParams();
    const [ news ] = useState(top);
  
    return (
      <div>
        <h2>News</h2>
        <p>news : {news}</p>
      </div>
    )
  }

  export default News;