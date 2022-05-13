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
exports.ImageSetsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
//import { IImageSetsController } from 'service-imagesets-nodex';
class ImageSetsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-imagesets", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getImageSets(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'imagesets.get_imagesets');
            try {
                return yield this._controller.getImageSets(correlationId, filter, paging);
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
                return yield this._controller.getImageSetById(correlationId, imagesetId);
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
                return yield this._controller.createImageSet(correlationId, imageset);
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
                return yield this._controller.updateImageSet(correlationId, imageset);
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
                return yield this._controller.deleteImageSetById(correlationId, imagesetId);
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
exports.ImageSetsDirectClientV1 = ImageSetsDirectClientV1;
//# sourceMappingURL=ImageSetsDirectClientV1.js.map