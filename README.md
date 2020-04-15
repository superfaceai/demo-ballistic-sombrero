# [Koana Islands](http://nswiki.org/index.php?title=Nation/Koana_Islands) Weather Service

Weather Alerts provider for the [superface.ai](https://superface.ai) demo.

This is an autonomous API provider (Autonomy Level 5) that enables self-driving API clients. The client example for this API is available at <http://demo.superface.dev/>.

### Multiple API Versions

There are four versions of this API as described in OpenAPI spec files the `/design` folder. In the source, you can control what version the provider currently implements.

### Changing the API Version

To change the implemented API version head over to [`versions.js`](https://glitch.com/edit/#!/ballistic-sombrero?path=src/versions.js:1:0) and set desired version in the `API_VERSION` variable.

```
const API_VERSION = "v1";
```

## Remixing the Provider

If you are remixing this project and want to register remixed provider in the superface registry make sure to set correct values in the `.env` file:

```
REGISTRY_URL='https://registry.superface.dev'

HOST='<https://name-of-your-remix.glitch.me>'
```

## Contact

If you would like to contribute to the superface project or deploy an Autonomous API in your next application, please email <hello@superface.ai> or contact us at [@superfaceai](http://twitter.com/superfaceai) on Twitter.

