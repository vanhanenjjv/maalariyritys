// Turn back

const extractData = (data, name) => {
  const createDate = date => {
    const ensureTwoDigits = value => ('0' + value).slice(-2);
  
    return new Date(`${date.year}-` +
                    `${ensureTwoDigits(date.month)}-` +
                    `${ensureTwoDigits(date.day)}T` +
                    `${ensureTwoDigits(date.hour)}:00:00`);
  }

  const values = [];
  for (const sample of data) {
    values.push({
      values: {
        average: sample['avg'][name],
        maximum: sample['max'][name],
        minimum: sample['min'][name]
      },
      time: createDate(sample.group)
    });
  }

  return values;
}

const getLabels = (records) => {
  const labels = [];
  for (const record of records) {
    const date = record.t.toLocaleDateString();
    const time = record.t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    labels.push(date + ' klo. ' + time);
  }

  return labels;
}

export const buildTemperatureData = data => {
  const records = extractData(data, 'temperature');

  const formattedRecords = [];
  for (const record of records) {
    formattedRecords.push({
      y: record.values.minimum,
      t: record.time
    });
  }

  return {
    labels: getLabels(formattedRecords),
    datasets: [
      {
        label: 'Minimi',
        fill: false,
        backgroundColor: 'rgba(255,0,0,0.8',
        borderColor: 'rgba(255,0,0,1)',
        hoverBackgroundColor: 'rgba(255,0,0,1)',
        data: formattedRecords
      }
    ]
  };
}

export const buildHumidityData = data => {
  const records = extractData(data, 'humidity');

  const formattedRecords = [];
  formattedRecords.push({
    y: 0,
    t: new Date('1995-12-17T00:00:00')
  });
  for (const record of records) {
    if (record.time.getHours() === 18) {
      formattedRecords.push({
        y: record.values.maximum,
        t: record.time
      });
    }
  }
  formattedRecords.push({
    y: 0,
    t: new Date('1995-12-17T00:00:00')
  }); 

  return {
    labels: getLabels(formattedRecords),
    datasets: [
      {
        tension: 0,
        label: 'Maksimi',
        fill: false,
        borderColor: 'rgba(0,0,255,1)',
        data: formattedRecords
      }
    ]
  };
}
