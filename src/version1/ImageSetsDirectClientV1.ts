import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { ImageSetV1 } from './ImageSetV1';
import { IImageSetsClientV1 } from './IImageSetsClientV1';
//import { IImageSetsController } from 'service-imagesets-nodex';

export class ImageSetsDirectClientV1 extends DirectClient<any> implements IImageSetsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-imagesets", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getImageSets(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ImageSetV1>> {
        let timing = this.instrument(correlationId, 'imagesets.get_imagesets');
        
        try {
            return await this._controller.getImageSets(correlationId, filter, paging);
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
            return await this._controller.getImageSetById(correlationId, imagesetId);
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
            return await this._controller.createImageSet(correlationId, imageset);
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
            return await this._controller.updateImageSet(correlationId, imageset);
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
            return await this._controller.deleteImageSetById(correlationId, imagesetId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}