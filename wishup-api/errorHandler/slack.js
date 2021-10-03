import request from "request";
import config from "../../config.js";
const Slack = async function (message, channel) {
  const headers = { "Content-type": "application/json" };
  let body = {
    text: "",
  };
  if (typeof message === "object") {
    body.text = JSON.stringify(message);
  } else {
    body.text = message;
  }

  const text = config.ENV + " :- @amit :" + body.text;
  var url = config.SLACKURL;

  await request.post(
    {
      headers: headers,
      url,
      form: { payload: JSON.stringify({ text }) },
    },
    (error, res, body) => console.log("Error slacked")
  );
};

export { Slack };
