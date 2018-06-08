const posts = [
  { title: 'Post 1', body: 'This is post one' },
  { title: 'Post 2', body: 'This is post two' },
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const error = true;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Error: something went wrong.');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.querySelector('.output').innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post 3', body: 'This is post three' })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
