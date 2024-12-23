import { type LatLng, type LatLngExpression, Map as LeafletMap, marker, tileLayer, type ZoomPanOptions } from "leaflet";
import { createUniqueId, onMount } from "solid-js";
import { mergeProps } from "solid-js";

import "leaflet/dist/leaflet.css";

interface MapProps {
	center: LatLngExpression;
	markers?: LatLng[];
	maxZoom: number;
	zoom: number;
	zoomPanOptions: ZoomPanOptions;
}

const TILE_LAYER = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const DEFAULT_PROPS: MapProps = {
	center: [ 59.8444, 30.3131 ],
	markers: [],
	maxZoom: 20,
	zoom: 13,
	zoomPanOptions: {}
};

function Map(allProps: Partial<MapProps>) {
	const props = mergeProps(DEFAULT_PROPS, allProps);
	const id = createUniqueId();

	onMount(() => {
		const map = new LeafletMap(id).setView(props.center, props.zoom, props.zoomPanOptions);

		map.attributionControl.setPrefix(false);

		tileLayer(TILE_LAYER, {
			attribution: "<a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>",
			maxZoom: props.maxZoom
		}).addTo(map);


		for (const item of props.markers) {
			marker(item).addTo(map);
		}
	});

	return (
		<div
			id={id}
			style={{ height: "800px", width: "800px"}}
		/>
	);
}

export default Map;
