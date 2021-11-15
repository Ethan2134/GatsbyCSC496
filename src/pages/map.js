import React from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import { useHasMounted } from "gatsby-theme-catalyst-core"
import geojson from "../data/geojson.json"
import L from "leaflet"
import Layout from '../components/layout'
const Map = () => {
    const createPopups = (feature = {}, layer) => {
        const { properties = {} } = feature
        const { name, visitors, founded, size } = properties
        const popup = L.popup()
        const html = `
    <div class="popup-container">
    <h2 class="popup-header">${name}</h2>
	<ul>
		<li><b>Visitors: </b>${visitors}</li>
		<li><b>Established: </b>${founded}</li>
		<li><b>Size: </b>${size} acres</li>
	</ul>
    </div>
    `
        popup.setContent(html)
        layer.bindPopup(popup)
    }
    return (
	<Layout pageTitle="Popular National Parks">
        <div>
		<p>This map shows the 10 most popular national parks in the United States according to <a href="https://morethanjustparks.com/most-visited-national-parks/">MTJP</a>. Click the pins to see more info.</p>
            {useHasMounted && (
                <MapContainer
                    center={[39, -98]}
                    zoom={3}
                    style={{ height: "400px" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON data={geojson} onEachFeature={createPopups} />
                </MapContainer>
            )}
        </div>
		</Layout>
    )
}

export default Map