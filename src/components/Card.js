import React, { PropTypes } from 'react'

const Card = ({ title, url, description }) => (
  <div className='card'>
    <div className='card-block'>
      <h2 className='card-title'>
        <a className='card-url' href={url}>{title}</a>
      </h2>
      <div className='card-text'>
        {description}
      </div>
    </div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Card
