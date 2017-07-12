const blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};

// Start Editing Here
let container = document.querySelector('.container')

let htmlString = '<article>'
  htmlString += `<h2>${blogPost.title}</h2>`
  htmlString += `<div class="meta">${blogPost.meta.date}</div>`
  htmlString += `<img src="${blogPost.post.image}">`
  htmlString += `<div class="post">${blogPost.post.content}</div>`
  htmlString += `<div class="site">Part of this site was pulled from `
  htmlString += `<a href="${blogPost.site.url}">${blogPost.site.name}</a></div>`


htmlString += '</article>'

container.innerHTML = htmlString
