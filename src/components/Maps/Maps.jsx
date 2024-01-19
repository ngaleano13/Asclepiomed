import React from "react";
import '../Maps/maps.css';
import {useTranslation} from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from 'react';
import { mockMap } from "../Maps/mockMap";
import L from 'leaflet';
import markerIcon from '/public/marker.png'


export const Maps = () => {
    const [t] = useTranslation("global");
    const customIcon = new L.Icon({
        iconUrl: markerIcon,
        iconSize: [36, 36],
    });

    const mapRef = useRef();

    const geoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    if (mapRef.current) {
                        mapRef.current.flyTo([latitude, longitude], 12);
                    }
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <section className="text-light mt-5 pt-5">
            <h2>{t("maps.title")}</h2>
            <p>{t("maps.text")}</p>
            <p>{t("maps.text-2")}</p>
            <button id="btn-ubi" onClick={geoLocation}>
                    {t("maps.btn")}
            </button>


            <div id="map">
                <MapContainer center={[-34.5913541,-58.4519815]} zoom={12} ref={mapRef}>
                    <TileLayer
                        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    {mockMap.map((markers, index) => (
                <Marker position={markers.coor} icon={customIcon} key={index}>
                    <Popup>
                        <h4 id="popup-title">{markers.name}</h4>
                        <p id="popup-info"><b>{t("maps.address")}:</b>  {markers.address}</p>
                        <p id="popup-info"><b>{t("maps.phone")}:</b>  {markers.tel}</p>
                    </Popup>
                </Marker>
            ))}
                </MapContainer>
            </div>
        </section>
    );
}
