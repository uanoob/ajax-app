document.getElementById('button').addEventListener('click', loadData);

function loadData(e) {
  // Create XMLHttpRequest Object (XHR Object)
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - used for spinners, loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  };

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      const output = document.getElementById('output');
      output.innerHTML = `<h2>${this.responseText}</h2>`;
    }
  };

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function() {
    console.log('Request error...');
  };

  xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
