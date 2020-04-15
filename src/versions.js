//
// What API version is the service implementing
//
const API_VERSION = "v1"

// Dictionary of the versions of the API, documented in the corresponding OAS files
const versions = {
  v1: {
    path: "/alerts",
    oas: "./design/koana-alerts-1.0.oas3.yaml",
    method: "GET",
    localityParameter: "addressLocality"
  },
  v2: {
    path: "/weather-alerts",
    oas: "./design/koana-alerts-2.0.oas3.yaml",
    method: "GET",
    localityParameter: "addressLocality"
  },
  v3: {
    path: "/alerts",
    oas: "./design/koana-alerts-3.0.oas3.yaml",
    method: "POST",
    localityParameter: "addressLocality"
  },
  v4: {
    path: "/alerts",
    oas: "./design/koana-alerts-4.0.oas3.yaml",
    method: "GET",
    localityParameter: "place"
  }
};

module.exports = {
  version: versions[API_VERSION]
}
