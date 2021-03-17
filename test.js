Promise.resolve().then(() => {
  console.log('mm');
  return Promise.resolve()
  .then(() => {
    console.log('xx');
  })
  .then(() => {
    console.log('yy');

    return 'nn'
  });
}).then((res) => {
  console.log(res);
});