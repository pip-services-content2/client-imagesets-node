# ImageSets Microservice Client SDK for Node.js / ES2017

This is a Node.js client SDK for [service-imagesets](https://github.com/pip-services-content2/service-imagesets-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* AWS Lambda client
* Direct client

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-imagesets-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-imagesets-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.ImageSetsHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
} catch(err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Create a new imageset
let imageset = await client.createImageSet(
    null,
    { 
        title: 'Cars',
        tags: ['car', 'cars', 'cartoon'],
        pics: [{ id: '111' }, { id: '222' }, { id: '333' }]
    }
);
```

```javascript
// Search for car images
let page = await client.getImageSets(
    null,
    {
        tags: 'cars'
    },
    null
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

