/**
 * Calculates the amount of pixels needed to offset the pan from the center. On
 * display of the left side panel, the markers need to be centered within the remaining
 * space on the map. This allows us to calculate how many pixels are needed to offset
 * the marker.
 * @param map map to perform functions on
 * @returns amount of pixels that need to be offset
 */
export const calculatePanelOffset = (map: google.maps.Map): number => {
  const scale = Math.pow(2, map.getZoom()!);
  const bounds = map.getBounds();
  if (bounds !== null && bounds !== undefined && scale !== undefined) {
    // get northwest point to determine world coordinates for marker
    const nw = new google.maps.LatLng(
      bounds.getNorthEast().lat(),
      bounds.getSouthWest().lng()
    );

    // get map projection to convert lat/lngs into x/y points
    const projection = map.getProjection();
    if (projection !== null && projection !== undefined) {
      const nwPoint = projection.fromLatLngToPoint(nw);
      const centerPoint = projection.fromLatLngToPoint(map.getCenter()!);
      if (nwPoint !== null && centerPoint !== null) {
        // get center world coords
        const center = new google.maps.Point(
          Math.floor((centerPoint.x - nwPoint.x) * scale),
          Math.floor((centerPoint.y - nwPoint.y) * scale)
        );

        let viewportWidth = map.getDiv().offsetWidth;

        // get left panel offset
        let panelOffset = 0.0;
        // if the 35% of the viewports width is over 410 then the panel offset width is 430
        if (viewportWidth * 0.35 >= 410) {
          panelOffset = viewportWidth * 0.35 + 20;
        } else {
          // even though I know this is not the panel offset, setting it to the remaining map
          // width outside the panel works.
          panelOffset = viewportWidth - 430;
        }

        // calculate offset
        let offsetMapWidth = viewportWidth - panelOffset;
        let offsetCenterX = offsetMapWidth / 2.0;
        let offsetBetweenRealCenter = offsetCenterX - center.x;

        // when the maps center is behind the left side panel
        if (center.x <= 430) {
          // after a lot of trial and error, this works but I cannot explain the math behind this
          return offsetBetweenRealCenter - (430 - center.x);
        } else {
          return offsetBetweenRealCenter;
        }
      }
    }
  }

  // in case any optionals are null return 0.0 so that the map pans to the normal center
  return 0.0;
};