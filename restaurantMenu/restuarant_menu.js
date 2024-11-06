const bMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dMenu = ['Lettuce1', 'Lettuce2', 'Lettuce3', 'Lettuce4'];


// B Menu
const bMenuItemsHTML = bMenu.map(
    (item, index) => `<p>Item ${index + 1}: ${item}</p>`
).join('');

document.getElementById('breakfastMenuItems').innerHTML = bMenuItemsHTML;



// M Menu
let mainCourseItem = '';
mainCourseMenu.forEach( (item, index) => {
        mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`; 
    }
);
document.getElementById('MainMenuItems').innerHTML = mainCourseItem;



// D Menu
let dItem = '';
for (let i = 0; i < dMenu.length; i++) {
    dItem += `<p>Item ${i + 1}: ${dMenu[i]}</p>`;
}
document.getElementById('DMenuItems').innerHTML = dItem;