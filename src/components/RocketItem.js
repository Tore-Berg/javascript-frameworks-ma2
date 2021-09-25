import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SubHeading } from "./Heading";

export default function RocketItem({ id, name, country, images }) {
    return (
        <Link to={`detail/${id}`}>
            <div key={id}>
                <SubHeading title={name} />
                {images.map((image => <img src={image} key={image} alt={`Rocket`}></img>))}
                <p>{country}</p>
            </div>
        </Link>
    )
}

RocketItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};
