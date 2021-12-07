import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'


const conform = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    console.log("pickup:", pickup)
    console.log("dropoff:", dropoff)

    const [pickupCoordinates, setpickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setdropoffCoordinates] = useState([0, 0])

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token : "pk.eyJ1IjoicHJ1ZGh2aXJlZGR5IiwiYSI6ImNrd3BnOGt3NTBhYWUycW8wdGFxejJhOTEifQ.BYZYZKIMile7w-vi81vwPg",
                limit : 1
            })
        ).then(
            response => response.json()
        ).then(data => {
            setpickupCoordinates(data.features[0].center)
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token : "pk.eyJ1IjoicHJ1ZGh2aXJlZGR5IiwiYSI6ImNrd3BnOGt3NTBhYWUycW8wdGFxejJhOTEifQ.BYZYZKIMile7w-vi81vwPg",
                limit : 1
            })
        ).then(
            response => response.json()
        ).then(data => {
            setdropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup); 
        getDropoffCoordinates(dropoff);     
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href = "/search">
                    <BackButton src = "https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <Map
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates = {dropoffCoordinates}
            />
            <RideContainer>
                {/* RideSelector */}
                <RideSelector 
                    pickupCoordinates = {pickupCoordinates}
                    dropoffCoordinates = {dropoffCoordinates}
                />
               {/* Conform Button */}
               <ConformButtonContainer>
                    <ConformButton>
                        Conform UberX
                    </ConformButton>
               </ConformButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default conform

const ConformButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
`
const ConformButtonContainer = tw.div`
    border-t-2
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`
const Wrapper = tw.div`
    flex h-screen flex-col
`
const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 shadow-md
`
const BackButton = tw.img`
    h-12 cursor-pointer rounded-full bg-white
`