const express = require("express");
const router = express.Router();
const { version } = require("./versions");

router.all("/", function(req, res, next) {
  // Log the request
  console.log("alerts request: ");
  console.log("  method: ", req.method);
  console.log("  query parameters: ", req.query);
  console.log("  headers: ", req.headers);
  console.log("  body: ", req.body);

  // Check method
  if (req.method !== version.method) {
    return res.status(405).json({ title: "Method not allowed" });
  }

  // Locality parameter
  if (!(version.localityParameter in req.query)) {
    res.status(400);
    return res.json({
      title: "Missing required parameter",
      detail: `missing required address locality parameter '${version.localityParameter}'`
    });
  }

  // Find the locality
  const locality = req.query[version.localityParameter];
  if (!(locality in responses)) {
    res.status(404);
    return res.json({
      title: "Not found",
      detail: `address locality '${locality}' not found`
    });
  }

  res.status(200);
  res.json(responses[locality]);
});

//
// Mock the data
//
const responses = {
  Arbordale: {
    title: "Earthquake",
    description:
      "Magnitude 4.3 earthquake. This earthquake poses no tsunami risk.",
    severity: "warning",
    startDate: "2019-12-9T16:24:08Z",
    endDate: "2019-11-14T16:24:08Z"
  },
  Embelton: {
    title: "Snow/Ice",
    description:
      "Expected amounts: 80-120 cm, Intensifying conditions: accompanied by winds at gale force.",
    severity: "warning",
    startDate: "2019-12-9T16:24:08Z",
    endDate: "2019-11-14T16:24:08Z"
  },
  Lexington: {
    title: "Thunderstorms",
    description:
      "Heavy rainfall may affect human activities, Extensive flooding is possible in the flood-prone areas on all the watersheds of the impacted departments.",
    severity: "advisory",
    startDate: "2019-12-9T16:24:08Z",
    endDate: "2019-11-14T16:24:08Z"
  }
};

module.exports = router;
