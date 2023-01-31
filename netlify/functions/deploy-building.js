exports.handler = async function (event, context) {
  console.log('Netlify function demo');
  process.env.REACT_APP_DEMO = "Test";
  console.log(process.env.REACT_APP_DEMO);
  console.log(event.path);
};
