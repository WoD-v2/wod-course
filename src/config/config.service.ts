import { DotenvParseOutput, config } from "dotenv";
import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;

    constructor() {
        const {error, parsed} = config();
        if (error) {
            throw new Error("Could not find .env file");
        }
        if (!parsed) {
            throw new Error("Empty .env file");
        }
        this.config = parsed;
    }

    get(key: string): string {
        const res = this.config[key];
        if (!res) {
            throw new Error("No such key");
        }
        return res;
    }
}