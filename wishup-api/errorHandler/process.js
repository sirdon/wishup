import { Slack } from "./slack.js";
export default function () {
  process.on("syntaxError", function (err) {
    console.log("SyntaxError Node NOT Exiting...", err.stack);
    Slack("SyntaxError : " + (err.stack || err));
  });
  process.on("uncaughtException", function (err) {
    console.log("Node NOT Exiting...", err);
    Slack("uncaughtException : " + (err.stack || err));
  });
  process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection =>\n", reason.stack || reason);
    Slack("unhandledRejection : " + (reason.stack || reason));
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  });
  process.on("doesNotExist", (reason, promise) => {
    console.log("doesNotExist Rejection at:", reason.stack || reason);
    Slack("doesNotExist : " + (reason.stack || reason));
    // IVR
    //
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  });
  process.on("ReferenceError", (reason, promise) => {
    console.log("ReferenceError Rejection at:", reason.stack || reason);
    Slack("ReferenceError : " + (reason.stack || reason));
    // IVR
    //
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  });
  process.on("ServiceUnavailableError", (reason, promise) => {
    console.log(
      "ServiceUnavailableError Rejection at:",
      reason.stack || reason
    );
    Slack("ServiceUnavailableError : " + (reason.stack || reason));
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  });
  process.on("exit", (code) => {
    console.log(`About to exit with code: ${code}`);
  });
}
