const assert = require('chai').assert;

import { IImageSetsClientV1 } from '../../src/version1/IImageSetsClientV1';
import { ImageSetV1 } from '../../src/version1/ImageSetV1';

let IMAGESET1 = <ImageSetV1>{
    id: '1',
    title: 'ImageSet 1',
    pics: [{ id: '111' }, { id: '222' }, { id: '333' }]
};
let IMAGESET2 = <ImageSetV1>{
    id: '2',
    tags: ['TAG 1'],
    all_tags: ['tag1'],
    title: 'ImageSet 2',
    pics: [{ id: '444' }, { id: '555' }, { id: '666' }]
};


export class ImageSetsClientFixtureV1 {
    private _client: IImageSetsClientV1;
    
    constructor(client: IImageSetsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let imageset1, imageset2;

        // Create one imageset
        let imageset = await this._client.createImageSet(null, IMAGESET1);

        assert.isObject(imageset);
        assert.equal(imageset.title, IMAGESET1.title);
        assert.sameDeepMembers(imageset.pics, IMAGESET1.pics);

        imageset1 = imageset;

        // Create another imageset
        imageset = await this._client.createImageSet(null, IMAGESET2);

        assert.isObject(imageset);
        assert.equal(imageset.title, IMAGESET2.title);
        assert.sameDeepMembers(imageset.pics, IMAGESET2.pics);

        imageset2 = imageset;

        // Get all imagesets
        let page = await this._client.getImageSets(null, null, null);

        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        // Update the imageset
        imageset1.title = 'New Title 1';

        imageset = await this._client.updateImageSet(null, imageset1);

        assert.isObject(imageset);
        assert.equal(imageset.title, 'New Title 1');
        assert.sameDeepMembers(imageset.pics, IMAGESET1.pics);

        imageset1 = imageset;

        // Delete imageset
        await this._client.deleteImageSetById(null, imageset1.id);

        // Try to get delete imageset
        imageset = await this._client.getImageSetById(null, imageset1.id);

        assert.isNull(imageset || null);
    }
}
