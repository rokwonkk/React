import { Link } from 'react-router-dom'

const Topics = () => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props">Props</Link>
        </li>
      </ul>
    </div>
  )
}

export default Topics;