import "dotenv/config"
import * as joi from "joi";


interface envVars {
    PORT: number
    DATABASE_URL: string
}

const envsSchema = joi.object<envVars>({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required()
})
.unknown(true);

const { error, value } = envsSchema.validate(process.env);
if(error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envsVars: envVars = value;

export const envs = {
    PORT: envsVars.PORT,
    DATABASE_URL: envsVars.DATABASE_URL
}


