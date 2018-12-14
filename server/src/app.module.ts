import controllers from "./controllers";
import {Module} from "./utils/decorators/module";
import 'reflect-metadata';

@Module({
    controllers
})
export default class AppModule {
}