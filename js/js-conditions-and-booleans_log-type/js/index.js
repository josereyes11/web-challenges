const data = null;

switch (true) {
  case Number.isNaN(data):
    console.log("not a number!");
    break;
  case Array.isArray(data):
    console.log("array!");
    break;
  case typeof data === "number":
    console.log("number!");
    break;
  case typeof data === "string":
    console.log("string!");
    break;
  case typeof data === "boolean":
    console.log("boolean!");
    break;
  case data === null:
    console.log("null");
    break;
  case typeof data === "object":
    console.log("object!");
    break;
  case typeof data === "function":
    console.log("function!");
    break;
  case data === undefined:
    console.log("undefined!");
    break;
  default:
    console.log("I have no idea!");
}
