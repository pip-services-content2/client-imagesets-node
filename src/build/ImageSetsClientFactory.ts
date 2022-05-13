import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';
import { ImageSetsLambdaClientV1 } from '../version1';

import { ImageSetsDirectClientV1 } from '../version1/ImageSetsDirectClientV1';
import { ImageSetsHttpClientV1 } from '../version1/ImageSetsHttpClientV1';

export class ImageSetsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-imagesets', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-imagesets', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-imagesets', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-imagesets', 'client', 'lambda', 'default', '1.0');

	constructor() {
		super();

		this.registerAsType(ImageSetsClientFactory.DirectClientV1Descriptor, ImageSetsDirectClientV1);
		this.registerAsType(ImageSetsClientFactory.HttpClientV1Descriptor, ImageSetsHttpClientV1);
		this.registerAsType(ImageSetsClientFactory.LambdaClientV1Descriptor, ImageSetsLambdaClientV1);
	}
	
}
