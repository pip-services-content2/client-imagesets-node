import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ImageSetsMemoryPersistence } from 'service-imagesets-node';
import { ImageSetsController } from 'service-imagesets-node';
import { ImageSetsDirectClientV1 } from '../../src/version1/ImageSetsDirectClientV1';
import { ImageSetsClientFixtureV1 } from './ImageSetsClientFixtureV1';

suite('ImageSetsDirectClientV1', ()=> {
    let client: ImageSetsDirectClientV1;
    let fixture: ImageSetsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new ImageSetsMemoryPersistence();
        let controller = new ImageSetsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-imagesets', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-imagesets', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ImageSetsDirectClientV1();
        client.setReferences(references);

        fixture = new ImageSetsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
