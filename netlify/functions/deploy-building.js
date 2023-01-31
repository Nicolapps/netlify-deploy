exports.handler = async function (event, context) {
  await fetch(`https://eoskf43kwo94499.m.pipedream.net/?event=${encodeURIComponent(JSON.stringify(event))}&context=${encodeURIComponent(JSON.stringify(context))}`)
};
