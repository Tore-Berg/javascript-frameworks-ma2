import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { API } from '../constants/Api'
import Heading from './Heading'

export default function RocketDetails() {

    const [rocket, setRocket] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    let history = useHistory()

    const { id } = useParams()

    if (!id) {
        history.push("/")
    }

    const url = API + "/" + id;

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await fetch(url)

                if (response.ok) {
                    const json = await response.json()
                    console.log(json)
                    setRocket(json)
                } else {
                    setError("An error occured")
                }

            }
            catch (error) {
                setError(error.toString())
            }
            finally {
                setLoading(false)
            }
        }
        getDetails()
    },
        [url]
    );

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>An error occured: {error}</div>
    }

    return (
        <>
            <div className="details">
                <div className="details__card">
                    <Heading title={rocket.name} />
                    <img src={rocket.flickr_images} alt={rocket.name} />
                    <p>{rocket.description}</p>
                </div>
            </div>
        </>
    )
}
