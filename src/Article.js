import React from 'react'
import moment from 'moment'

const Article = ({ title, snippet, date, length }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('MMMM Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p className="post-snippet" style={{ color: 'var(--clr-primary)', fontWeight: 'bold', margin: '1rem 0' }}>{snippet}</p>
      <button className="btn btn-primary">read more</button>
    </article>
  )
}

export default Article
