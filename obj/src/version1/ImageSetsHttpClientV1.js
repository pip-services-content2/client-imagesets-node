"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSetsHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class ImageSetsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/imagesets');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getImageSets(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'imagesets.get_imagesets');
            try {
                return yield this.callCommand('get_imagesets', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getImageSetById(correlationId, imagesetId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'imagesets.get_imageset_by_id');
            try {
                return yield this.callCommand('get_imageset_by_id', correlationId, {
                    imageset_id: imagesetId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createImageSet(correlationId, imageset) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'imagesets.create_imageset');
            try {
                return yield this.callCommand('create_imageset', correlationId, {
                    imageset: imageset,
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateImageSet(correlationId, imageset) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'imagesets.update_imageset');
            try {
                return yield this.callCommand('update_imageset', correlationId, {
                    imageset: imageset,
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteImageSetById(correlationId, imagesetId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'imagesets.delete_imageset_by_id');
            try {
                return yield this.callCommand('delete_imageset_by_id', correlationId, {
                    imageset_id: imagesetId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.ImageSetsHttpClientV1 = ImageSetsHttpClientV1;
//# sourceMappingURL=ImageSetsHttpClientV1.js.map