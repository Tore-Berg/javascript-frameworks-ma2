import React, { useEffect, useState } from "react";
import { API } from "../constants/Api";
import RocketItem from "./RocketItem";
import Heading from "./Heading";

export default function RocketList() {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(API);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setRockets(json);
                }
                else {
                    setError("Something went wrong, please try again later")
                }

            } catch (error) {
                setError(error.toString())
            }
            finally {
                setLoading(false)
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong. Please try again later.</div>
    }

    return (
        <>
        <Heading title={`SpaceX Rockets`} />
            <div className="grid">
                {rockets.map(function (rocket) {
                    const { id, name, country, flickr_images } = rocket;
                    return <RocketItem key={id} id={id} name={name} country={country} images={flickr_images} />
                })}
            </div>
        </>
    );
}
