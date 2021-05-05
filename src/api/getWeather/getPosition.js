import { handleError } from "../../lib/utils";

export default function getPosition() {
  return new Promise((resolve, reject) => {
    const geo_options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
    };

    if (!navigator.geolocation) {
      return "Geolocation is not supported by your device/browser";
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const results = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        resolve(results);
      },
      handlePositionError,
      geo_options
    );
  });
}

function handlePositionError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return handleError("Turn your location service on");

    case error.POSITION_UNAVAILABLE:
      return handleError("Location information is unavailable.");

    case error.TIMEOUT:
      return handleError("The request to get location timed out.");

    case error.UNKNOWN_ERROR:
      return handleError("An unknown error occurred.");

    default:
      return handleError("Error Not Known! 👽");
  }
}
