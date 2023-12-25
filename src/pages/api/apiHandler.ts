/* eslint-disable no-undefined */
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { Method } from "axios";
import createHttpError from "http-errors";
// import jwt from "jsonwebtoken";
import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";

// import { logger } from "@/lib/logger";

interface ErrorResponse {
  message: string;
  err?: any;
  status?: number;
  data?: any;
}

type ApiMethodHandlers = {
  // eslint-disable-next-line no-unused-vars
  [key in Uppercase<Method>]?: NextApiHandler;
};

/**
 * middleware for handling API requests.
 * @param handler asynchronous function that handles API requests
 * @param withAuth whether or not the request requires authentication
 * @returns response or throws error if an error occurs during request
 */

export function apiHandler(handler: ApiMethodHandlers, withAuth?: boolean) {
  return async (req: NextApiRequest, res: NextApiResponse<ErrorResponse>) => {
    const session = await getServerSession(req, res, authOptions);

    // Check if session exists, if not, return an unauthorized response
    // if (!session) {
    //   //   logger.error("Unauthorized request: " + JSON.stringify(req.headers));
    //   return res.status(401).json({
    //     message: "Unauthorized",
    //   });
    // }

    // if (withAuth) {
    //   const userAddress = req.cookies.user_address;
    //   const token = req.cookies[`token_${userAddress}`];

    //   if (!token) {
    //     return res.status(401).end("Unauthorized");
    //   }

    //   try {
    //     // Validate token
    //     // const decoded = jwt.verify(token, "your-secret-key")
    //     const decoded = jwt.decode(token);
    //     console.log("===================================");
    //     console.log(decoded);
    //     console.log("===================================");

    //     // You can set the user info to the req object
    //     // @ts-ignore
    //     req.user = decoded;

    //     // Continue to route handler
    //     // return handler(req, res)
    //   } catch (err) {
    //     console.error(err);
    //     return res.status(401).end("Unauthorized");
    //   }
    // }

    // Cors
    const origin = req.headers.origin;
    if (
      (origin === "http://localhost:3000" &&
        process.env.NODE_ENV === "development") ||
      origin === "https://dapexperience.netlify.app/"
    ) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, ApiKey"
      );

      if (req.method === "OPTIONS") {
        return res.status(200).end();
      }
    }

    // logger.info("request: " + JSON.stringify(req.headers))
    try {
      const method = req.method
        ? (req.method.toUpperCase() as keyof ApiMethodHandlers)
        : undefined;

      // check if handler supports current HTTP method
      if (!method) {
        throw new createHttpError.MethodNotAllowed(
          `No method specified on path ${req.url}!`
        );
      }

      const methodHandler = handler[method];
      if (!methodHandler) {
        throw new createHttpError.MethodNotAllowed(
          `Method ${req.method} Not Allowed on path ${req.url}!`
        );
      }

      await methodHandler(req, res);
    } catch (err) {
      handleErrors(req, res, err);
    }
  };
}

/**
 * Handle request errors and return an appropriate JSON response to front-end
 * @param res Express Response object
 * @param err The error object
 * @param renderErrorPage Redirect to error page
 */
export function handleErrors(
  _: NextApiRequest,
  res: NextApiResponse,
  err: any
): void {
  let errorMessage = "";
  let body = err.body ?? "";

  if (body.traceId) {
    body = body.detail;
  }

  if (typeof err !== "undefined" && typeof err.statusMessage !== "undefined") {
    errorMessage = err.statusMessage;
  } else if (typeof err.stack !== "undefined") {
    errorMessage = err.stack;
  } else {
    errorMessage = err;
  }

  if (err.body && err.body.status === 400) {
    if (err.body.errors) {
      const validationErrors = Object.keys(err.body.errors).map((key) => {
        return {
          field: key,
          message: err.body.errors[key].join(", "),
        };
      });

      body = validationErrors;
    } else {
      body = err.body.detail;
    }
  }

  const errorBody = {
    success: false,
    errorMessage,
    body,
  };

  if (err.statusCode) {
    res.status(err.statusCode).json(errorBody);
  } else {
    res.status(500).json(errorBody);
  }
}
