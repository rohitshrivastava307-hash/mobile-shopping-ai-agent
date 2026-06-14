fetch("https://generativelanguage.googleapis.com")
  .then(res => {
    console.log("Connected");
    console.log(res.status);
  })
  .catch(err => {
    console.error(err);
  });