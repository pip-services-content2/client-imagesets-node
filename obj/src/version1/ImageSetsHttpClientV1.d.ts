import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { ImageSetV1 } from './ImageSetV1';
import { IImageSetsClientV1 } from './IImageSetsClientV1';
export declare class ImageSetsHttpClientV1 extends CommandableHttpClient implements IImageSetsClientV1 {
    constructor(config?: any);
    getImageSets(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<ImageSetV1>>;
    getImageSetById(correlationId: string, imagesetId: string): Promise<ImageSetV1>;
    createImageSet(correlationId: string, imageset: ImageSetV1): Promise<ImageSetV1>;
    updateImageSet(correlationId: string, imageset: ImageSetV1): Promise<ImageSetV1>;
    deleteImageSetById(correlationId: string, imagesetId: string): Promise<ImageSetV1>;
}
