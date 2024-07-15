import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useState } from 'react';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const FooterMap = ({ address }) => {
    const [position, setPosition] = useState([52.510, 13.398]) // Center of Berlin
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&accept-language=en`);
                const data = await response.json();

                if (data && data.length > 0) {
                    setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
                }
            } catch (error) {
                console.error("Error fetching coordinates: ", error)
            } finally {
                setLoading(false)
            }
        }

        fetchCoordinates();
    }, [address])

    return (
        <div className="bg-slate-300">
            {
                loading
                    ?
                    <div className=''>Map loading...</div>
                    :
                    <MapContainer center={position} zoom={13} className="w-full h-full">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                {address}
                            </Popup>
                        </Marker>
                    </MapContainer>
            }
        </div>
    )
}

export default FooterMap