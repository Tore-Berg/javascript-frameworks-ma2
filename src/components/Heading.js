import React from 'react'
import PropTypes from 'prop-types'

export default function Heading({ title }) {
  return <h1 className="heading">{title}</h1>;
}

Heading.propTypes = {
  title: PropTypes.string
};

export function SubHeading({ title }) {
  return <h2 className="sub-heading">{title}</h2>
}

SubHeading.propTypes = {
  title: PropTypes.string
};