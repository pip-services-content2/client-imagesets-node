import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { ImageSetV1 } from './ImageSetV1';
import { IImageSetsClientV1 } from './IImageSetsClientV1';

export class ImageSetsHttpClientV1 extends CommandableHttpClient implements IImageSetsClientV1 {

    constructor(config?: any) {
        super('v1/imagesets');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getImageSets(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ImageSetV1>> {
        let timing = this.instrument(correlationId, 'imagesets.get_imagesets');

        try {
            return await this.callCommand(
                'get_imagesets',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getImageSetById(correlationId: string, imagesetId: string): Promise<ImageSetV1> {
        let timing = this.instrument(correlationId, 'imagesets.get_imageset_by_id');

        try {
            return await this.callCommand(
                'get_imageset_by_id',
                correlationId,
                {
                    imageset_id: imagesetId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createImageSet(correlationId: string, imageset: ImageSetV1): Promise<ImageSetV1> {
        let timing = this.instrument(correlationId, 'imagesets.create_imageset');

        try {
            return await this.callCommand(
                'create_imageset',
                correlationId,
                {
                    imageset: imageset,
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateImageSet(correlationId: string, imageset: ImageSetV1): Promise<ImageSetV1> {
        let timing = this.instrument(correlationId, 'imagesets.update_imageset');

        try {
            return await this.callCommand(
                'update_imageset',
                correlationId,
                {
                    imageset: imageset,
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteImageSetById(correlationId: string, imagesetId: string): Promise<ImageSetV1> {
        let timing = this.instrument(correlationId, 'imagesets.delete_imageset_by_id');

        try {
            return await this.callCommand(
                'delete_imageset_by_id',
                correlationId,
                {
                    imageset_id: imagesetId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
