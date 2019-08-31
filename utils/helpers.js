const jsonFormatId = (json, callback) => {
  const results = {};

  for (let key in json) {
    if (key === "vin" || key === "color") {
      results[key] = json[key].value;
    } else if (key === "fourDoorSedan") {
      if (json[key].value === "True") {
        results.doorCount = 4;
      } else {
        results.doorCount = 2;
      }
    } else if (key === "driveTrain") {
      results[key] = json[key].value;
    }
  }

  callback(results);
}

const jsonFormatSecurity = (json, callback) => {
  const results = [];
  const doors = json.doors.values;

  doors.forEach((door) => {
    results.push({
      location: door.location.value,
      locked: door.locked.value.toLowerCase()
    });
  });

  callback(results);
}

const jsonFormatEngineAction = (json, callback) => {
  const results = {};

  if (json.data.actionResult.status === 'EXECUTED') {
    results.status = 'success'
  } else if (json.data.actionResult.status === 'FAILED') {
    results.status = 'error';
  }
  callback(results);
}



module.exports = {
  jsonFormatId,
  jsonFormatSecurity,
  jsonFormatEngineAction
}


