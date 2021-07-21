import * as express from "express";
import { NextFunction, Request, Response } from "express";
import { HttpError, NotFound } from "http-errors";

const app = express();

// Configure Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
    next(new NotFound(`Path "${req.path}" not found`));
});

app.use(function (error: unknown | HttpError | string, request: Request, response: Response, next: NextFunction) {
    if (error instanceof HttpError) {
        response.statusCode = error.statusCode;
    } else if (typeof error === "string") {
        error = {
            message: error,
        };
    } else {
        response.statusCode = 500;
    }
    console.log(error);
    response.json({ error });
    return next();
});

// Start Server
const port = process.env.PORT || 9000;
app.listen(port);
console.log(`listening on port ${port}`);
