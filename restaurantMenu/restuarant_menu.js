const bMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dMenu = ['Lettuce1', 'Lettuce2', 'Lettuce3', 'Lettuce4'];


const bMenuItemsHTML = bMenu.map(
    (item, index) => `<p>Item ${index + 1}: ${item}</p>`
).join('');

document.getElementById('breakfastMenuItems').innerHTML = bMenuItemsHTML;