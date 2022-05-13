import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ImageSetsMemoryPersistence } from 'service-imagesets-node';
import { ImageSetsController } from 'service-imagesets-node';
import { ImageSetsHttpServiceV1 } from 'service-imagesets-node';
import { ImageSetsHttpClientV1 } from '../../src/version1/ImageSetsHttpClientV1';
import { ImageSetsClientFixtureV1 } from './ImageSetsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ImageSetsHttpClientV1', ()=> {
    let service: ImageSetsHttpServiceV1;
    let client: ImageSetsHttpClientV1;
    let fixture: ImageSetsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ImageSetsMemoryPersistence();
        let controller = new ImageSetsController();

        service = new ImageSetsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-imagesets', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-imagesets', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-imagesets', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ImageSetsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ImageSetsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
