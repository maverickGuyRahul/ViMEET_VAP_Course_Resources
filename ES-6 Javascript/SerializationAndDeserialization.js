const namoone = {
  name: 'Vishwas',
  rollNo: 24,
  city: 'Uran',
};

const serializedJSON = JSON.stringify(namoone);

console.log(`serialized Data : ${serializedJSON}`);

const deSerializedJSON = JSON.parse(serializedJSON);

console.log(deSerializedJSON);
