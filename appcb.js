const posts = [
  { title: 'Post 1', body: 'This is post one' },
  { title: 'Post 2', body: 'This is post two' },
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(post => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.querySelector('.output').innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post 3', body: 'This is post three' });

// getPosts();

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
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

createPost({ title: 'Post 3', body: 'This is post three' }, getPosts);
