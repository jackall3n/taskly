import {Service} from "../utils/decorators/service";
import {Type} from "../utils/decorators/type";
import * as e from "express";
import {reflector} from "../utils/decorators/reflection";
import {Injector} from "./injector.service";
import * as passport from "passport";
import multer from '../config/multer';

@Service()
export default class RouteService {
    static init(appModule: Type<any>): e.Router {
        let module = reflector.annotations(appModule);
        let router = e.Router();

        for (let _controller of module[0].controllers) {
            let methods = reflector.propMetadata(_controller.controller);

            let controller = Injector.resolve(_controller.controller);

            let method_router = <any>e.Router({mergeParams: true});

            for (let method_name in methods) {
                let method_config = methods[method_name][0];

                let method_type = method_config.method.toLowerCase();
                let method_body = (<any>controller)[method_name];

                let method_arguments = [
                    method_config.path,
                    (...args: any[]) => method_body.apply(controller, args)
                ];

                if (method_config.authorise) {
                    method_arguments.splice(1, 0, passport.authenticate('jwt', {session: false}))
                }

                if (method_config.uploads) {
                    let upload_config;

                    if (method_config.uploads.length === 1) {
                        const config = method_config.uploads[0];
                        upload_config = config.max === undefined || config.max <= 1
                            ? multer.single(config.name)
                            : multer.array(config.name, config.max)
                    }
                    else {
                        upload_config = multer.fields(method_config.uploads);
                    }

                    method_arguments.splice(1, 0, upload_config)
                }

                method_router[method_type].apply(method_router, method_arguments);
            }

            router.use(_controller.path, method_router);
        }

        return router;
    }
}