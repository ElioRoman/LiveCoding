// option #1
// const items = document.querySelector('.list-item');
// console.log(items);

// items.forEach(item => {
//   item.addEventListener('click', handleItemClick);
// });

// function handleItemClick() {
//   console.log('clicked');
// }

// option #2

function handleListClick(event) {
  if (event.target.className !== 'list-item') {
    return;
  }
  console.log(event.target.innerText);
}

const list = document.querySelector('.list');
list.addEventListener('click', handleListClick);

// WEB FLOW !!!
// 1. get data from server => [{...}, {...}, {...}]
// 2. render (!!!)
// 3. handle event - UPDATE [{...}, {...}, {...}] don't touch DOM
// 4. re render

// algo
// 1. find task array
// 2. upDate done field
// 3. call render

function handeTaskClick(event) {
  // TODO
}
