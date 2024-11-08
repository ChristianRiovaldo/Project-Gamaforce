
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            mapInstance.current = L.map(mapRef.current).setView(
                [-7.773179090390894, 110.37823736303379], 15
            );

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapInstance.current)

            // Marker
            const marker = L.marker([-7.773179090390894, 110.37823736303379]).addTo(
                mapInstance.current
            );

            // Add popup
            marker.bindPopup("This is GAMAFORCE!").openPopup();

            // Custom icon
            const customIcon = L.icon({
                iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
                iconSize: [38, 50],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76],
            });

        }
    }, []);
    return (
        <div ref={mapRef} className="w-screen h-screen mt-16" style={{ width: "100%", height: "calc(100vh - 4rem)" }}>
            MapComponent
        </div>
    );
}

export default MapComponent
