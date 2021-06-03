const getCurrentLocation = (accuracy = false, timeout = 3, age = 0) => {
  const locationPromise = new Promise((resolve, reject) => {
    if (typeof navigator === 'undefined') {
      reject({
        error: true,
        message: 'Browser is not supported',
      })
    }
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (location) =>
          resolve({
            error: false,
            location: location.coords,
            timestamps: location.timestamp,
          }),
        (error) => {
          const { message } = error
          reject({
            error: true,
            message,
          })
        },
        {
          enableHighAccuracy: accuracy,
          timeout: timeout * 1000,
          maximumAge: age,
        },
      )
    } else {
      reject({
        error: true,
        message: 'Geolocation not supported in this browser',
      })
    }
  })
  return locationPromise
}

module.exports = getCurrentLocation
