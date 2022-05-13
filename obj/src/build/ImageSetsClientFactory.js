"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSetsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const version1_1 = require("../version1");
const ImageSetsDirectClientV1_1 = require("../version1/ImageSetsDirectClientV1");
const ImageSetsHttpClientV1_1 = require("../version1/ImageSetsHttpClientV1");
class ImageSetsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(ImageSetsClientFactory.DirectClientV1Descriptor, ImageSetsDirectClientV1_1.ImageSetsDirectClientV1);
        this.registerAsType(ImageSetsClientFactory.HttpClientV1Descriptor, ImageSetsHttpClientV1_1.ImageSetsHttpClientV1);
        this.registerAsType(ImageSetsClientFactory.LambdaClientV1Descriptor, version1_1.ImageSetsLambdaClientV1);
    }
}
exports.ImageSetsClientFactory = ImageSetsClientFactory;
ImageSetsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-imagesets', 'factory', 'default', 'default', '1.0');
ImageSetsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-imagesets', 'client', 'direct', 'default', '1.0');
ImageSetsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-imagesets', 'client', 'http', 'default', '1.0');
ImageSetsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-imagesets', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ImageSetsClientFactory.js.map