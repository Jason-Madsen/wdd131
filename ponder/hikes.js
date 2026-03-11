
const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];
                
let hikeContainer = document.querySelector('#hike-container');
let button = document.querySelector('button');

button.addEventListener('click', search);

function search() {
    let hikeQuery = document.querySelector('#search').value

    let filterHikes = hikes.filter(function(hike){
        return (
            hike.name.toLowerCase().includes(hikeQuery.toLowerCase()) ||
            hike.description.toLowerCase().includes(hikeQuery.toLowerCase()) ||
            hike.tags.find(tag => tag.toLowerCase().includes(hikeQuery.toLowerCase()))
        )
    })

    console.log(filterHikes);

    let sortedHikes = filterHikes.sort(compareHikes)

    function compareHikes(a,b) {
    if (a.difficulty < b.difficulty) {
        return -1;
    } else if (a.difficulty > b.difficulty) {
        return 1;
    }
    return 0;
    }

    hikeContainer.innerHTML = ' '
    sortedHikes.forEach(function(hike){
        renderHike(hike);
    })
}


let randomNum = Math.floor(Math.random()* hikes.length);
console.log(randomNum)

function tagTemplate(tags) {
    return tags.map((tag)=> `<button>${tag}</button>`).join(' ');
}

function difficultyTemplate(rating) {
		let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5"
>  Difficulty: `
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-boot"> 🥾</span>`
      } else {
        html += `<span aria-hidden="true" class="icon-empty">▫️</span>`
      }			
    }
    html += `</span>`
    return html
  }

function hikesTemplate(hike) {
    return `<div class="hike-card">
  <div class="hike-content">
    <h2>${hike.name}</h2>
    <div class="hike-tags">
      ${tagTemplate(hike.tags)}
    </div>
    <p>${hike.description}</p>
    <p>${difficultyTemplate(hike.difficulty)}</p>
  </div>
</div>`
}

function renderHike(hike) {
    let html = hikesTemplate(hike);
    hikeContainer.innerHTML += html
}

function init() {
    renderHike(hikes[randomNum]);
}

init();






// // 
// const recipes = [
// 	{
// 		author: 'Provo High Culinary Students',
// 		url: '',
// 		isBasedOn: '',
// 		cookTime: '30 Min',
// 		datePublished: '2016-10-16',
// 		tags: ['Waffles', 'Sweet Potato', 'Side'],
// 		description: 'Savory waffles made with Sweet potato with a hint of Ginger',
// 		image: './images/sweet-potato-waffle-md.jpg',
// 		recipeIngredient: [
// 			'2 separated eggs',
// 			'1/4 C Oil',
// 			'1/4 tsp salt',
// 			'1/4 tsp Cayenne pepper',
// 			'3/4 C milk',
// 			'1 Tbsp Brown Sugar',
// 			'2 tsp Shredded Ginger',
// 			'3/4 C Mashed Sweet Potatoes',
// 			'1 Tbsp Minced Shallots',
// 			'1 Tbsp Baking Powder',
// 			'1 Tbsp Chives',
// 			'1/4 C Cornmeal',
// 			'1 C Flour'
// 		],
// 		name: 'Sweet Potato Waffles',
// 		prepTime: '30 Min',
// 		recipeInstructions: [
// 			'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
// 			'Next add the cornmeal, chives, and flour and baking powder',
// 			'Whip the egg whites until stiff and fold in',
// 			'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
// 		],
// 		recipeYield: '6 waffles',
// 		rating: 4
// 	},
// 	{
// 		author: 'Shane Thompson',
// 		url: '',
// 		isBasedOn: '',
// 		cookTime: '20 min',
// 		datePublished: '',
// 		tags: ['Chicken', 'Entree'],
// 		description:
// 			'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
// 		image: './images/escalopes-de-poulet-a-la-creme.webp',
// 		recipeIngredient: [
// 			'2 Chicken Tenders, Cubed',
// 			'4 Mushrooms, Sliced',
// 			'1/2 C Whipping Cream',
// 			'1-2 Tbsp Stone Ground Mustard',
// 			'1 tsp Lemon Juice',
// 			'Salt and Pepper to taste',
// 			'1 C Rice, uncooked',
// 			'4-5 oz Fresh Green Beans'
// 		],
// 		name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
// 		prepTime: '10 min',
// 		recipeInstructions: [
// 			'Add 1 1/2 cups of water to a pan and bring to a boil.  Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.',
// 			'Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through. (10 minutes). ',
// 			'Pour in cream, mustard and salt and pepper.  Stir.  On medium heat, simmer until it thickens (5 minutes)',
// 			'While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2in lengths.  In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes)',
// 			'Serve sauce over rice, with the Green beans on the side.'
// 		],
// 		recipeYield: '3 servings',
// 		rating: 4.5
// 	},
// 	{
// 		author: 'Shane Thompson',
// 		url: '',
// 		isBasedOn: '',
// 		cookTime: '30 min',
// 		datePublished: '2018-09-19',
// 		tags: ['Potatoes', 'side'],
// 		description:
// 			'Easy and delicious oven roasted potatoes that go great with almost anything.',
// 		image: './images/roasted-potatoes.webp',
// 		recipeIngredient: [
// 			'3-4 Medium Potatoes',
// 			'1 Tbsp Olive oil',
// 			'2 tsp Italian Seasoning',
// 			'1/2 tsp Salt',
// 			'1/2 tsp Ground Black Pepper',
// 			'1-2 tsp Hot Sauce (optional)'
// 		],
// 		name: 'Oven Roasted potato slices',
// 		prepTime: '10 min',
// 		recipeInstructions: [
// 			'Preheat oven to 400 deg F',
// 			'Wash and thinly slice the potatoes (I usually slice the potato in half lengthwise, then thinly slice the halves, again lengthwise)',
// 			'Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.',
// 			'Toss the potatoes in the spice mixture to evenly coat then spead over a baking sheet',
// 			'Bake for 30 min or until the desired level of crispyness is achieved.'
// 		],
// 		recipeYield: '',
// 		rating: 4
// 	},
// 	{
// 		author: 'Shane Thompson',
// 		url: '',
// 		isBasedOn: '',
// 		cookTime: '20 min',
// 		datePublished: '2018-09-19',
// 		tags: ['Southwest', 'entree'],
// 		description:
// 			'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
// 		image: './images/black-beans-and-rice.jpg',
// 		recipeIngredient: [
// 			'1 Medium Onion, diced',
// 			'2 Cloves Garlic, minced',
// 			'1 Tbsp Olive oil',
// 			'1 Can Black Beans (15oz)',
// 			'1 Can Diced Tomatoes (15oz)',
// 			'1/8 tsp Cayenne Pepper (optional)',
// 			'2 C Brown Rice (uncooked)',
// 			'Grated Cheese',
// 			'Tortilla Chips'
// 		],
// 		name: 'Black Beans and Rice',
// 		prepTime: '10 min',
// 		recipeInstructions: [
// 			'Add 4 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (20-30 minutes)',
// 			'In another saucepan heat the oil and add the diced onion and garlic. Cook until tender.',
// 			'Stir in the drained Black beans, Undrained tomatoes, and Cayenne.',
// 			'Bring to a boil, then reduce heat and simmer uncovered for 15 min.',
// 			'Serve over rice, topped with grated cheese and Tortilla chips.'
// 		],
// 		recipeYield: '4 servings',
// 		rating: 3
// 	},
// 	{
// 		author: 'Shane Thompson',
// 		url: '',
// 		isBasedOn: '',
// 		cookTime: '30 min',
// 		datePublished: '2018-09-19',
// 		tags: ['chicken', 'entree', 'Indian'],
// 		description:
// 			'Quick and easy Chicken curry recipe made with easy to find ingredients.',
// 		image: './images/chicken-curry.webp',
// 		recipeIngredient: [
// 			'4 Slices Bacon',
// 			'1 clove Garlic',
// 			'2 Tbsp Flour',
// 			'1 C water',
// 			'1 C Milk',
// 			'3 Tbsp Tomato Paste',
// 			'1/2 C Apple Sauce',
// 			'3-4 tsp Curry Powder',
// 			'2 tsp Chicken Bouillion',
// 			'3/4 C Sour Cream',
// 			'1-2 C Chicken, cubed',
// 			'2 C Rice, uncooked'
// 		],
// 		name: 'Chicken Curry',
// 		prepTime: '10 min',
// 		recipeInstructions: [
// 			'Add 3 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (15-20 minutes)',
// 			'Cook bacon until crisp, drain reserving 1 Tbsp of bacon drippings, crumble bacon and set aside.',
// 			'Cook Chicken and Cube.',
// 			'Blend flour into bacon drippings then stir in the milk until the flour is well mixed. Stir in water, applesauce, tomato paste, curry, and bullion, and garlic.',
// 			'Bring to a boil, then reduce heat and simmer until rice is done.',
// 			'Before serving add crumbled bacon, chicken and stir in sour cream. Serve over rice.',
// 			'Can add condiments if desired: fried potatoes, raisins, toasted coconut, chutney, diced peppers, almonds, cashews.'
// 		],
// 		recipeYield: '5 servings',
// 		rating: 5
// 	},
// 	{
// 		author: 'Shane Thompson',
// 		url: '',
// 		isBasedOn: '',
// 		cookTime: '11 min',
// 		datePublished: '2018-09-19',
// 		tags: ['dessert'],
// 		description: 'Delicious soft chocolate chip cookies with coconut.',
// 		image: './images/chocolate-chip-cookies.jpg',
// 		recipeIngredient: [
// 			'1 Lb butter, softened',
// 			'1 C white sugar',
// 			'3 Eggs',
// 			'1 1/2 C Brown sugar',
// 			'1 tsp Baking soda',
// 			'1 tsp Vanilla extract',
// 			'1/4 tsp Salt',
// 			'5 C Flour (We like mixing 2 cups whole wheat with 3 cups white)',
// 			'2 C Chocolate Chips',
// 			'1 C Shredded Coconut'
// 		],
// 		name: 'Chocolate Chip Cookies',
// 		prepTime: '15 min',
// 		recipeInstructions: [
// 			'Preheat oven to 350F.',
// 			'Cream butter, white sugar, and eggs together.',
// 			'Add brown sugar, salt, baking soda, and vanilla. Mix well.',
// 			'Add flour, chocolate chips, and coconut. Mix well.',
// 			'Place on baking sheet in rows of 1-1.5 inch balls of dough.',
// 			'Bake for 11-12 minutes.'
// 		],
// 		recipeYield: '8 dozen',
// 		rating: 5
// 	},
// 	{
// 		author: 'Ester Kocht',
// 		url: 'https://www.esterkocht.com/german-gooseberry-cake-with-vanilla-cream-and-crumble/',
// 		isBasedOn: '',
// 		cookTime: '45min',
// 		datePublished: '2023-10-10',
// 		tags: ['dessert', 'German'],
// 		description:
// 			"This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet. Made up of a cake base, filled with fresh gooseberries and vanilla cream and finished off with crumble that's flavored with vanilla. A must have recipe for gooseberry lovers!!",
// 		image: './images/german-gooseberry-cake.jpg',
// 		recipeIngredient: [
// 			'For the Cake Base:',
// 			'180 g (1 ½ cups/ 6.3 oz) plain flour',
// 			'2 medium eggs',
// 			'100 g (3 ½ oz) butter soft',
// 			'2 teaspoons vanilla sugar',
// 			'60 g (about 1/3 cup/ 2.1 oz) sugar',
// 			'2 ½ teaspoons baking powder',
// 			'For the Vanilla Cream:',
// 			'250 ml (1 cup/ 8 ½ fl. oz) milk',
// 			'40 (⅓ cup/ 1.4 oz) corn flour cornstarch',
// 			'2 tablespoons sugar',
// 			'1 tablespoon vanilla sugar',
// 			'200 g (7.1 oz) sour cream',
// 			'For the struesel (crumble):',
// 			'250 g (2 cups + 1 tablespoon/ 8.8 oz) plain flour (all purpose flour)',
// 			'2 tablespoons vanilla sugar',
// 			'175 g (about ¾ cup/ 6.2 oz) butter soft',
// 			'100 g (½ cup/ 3 ½ oz) sugar',
// 			'You will also need:',
// 			'550 g (1.2 lbs) gooseberries washed and stems and brown appendage removed OR',
// 			'550 g (1.2 lbs) raspberries'
// 		],
// 		name: 'Gooseberry cake with vanilla cream and crumble',
// 		prepTime: '30 min',
// 		recipeInstructions: [
// 			'Combine the flour, butter, sugar and eggs in a bowl and beat with a whisk until you have a smooth dough. Transfer the batter to a 26 cm(10 inch) spring-form (or cake tin with removable base) lined with a parchment paper at the bottom and greased on the side. Smooth with a spoon or spatula and set aside.',
// 			"In the same bowl that you've used to make the cake base combine sugar, butter and flour. Using your hands mix all the ingredients together until small crumbles start to form. Set aside as well. Then preheat the oven to 180 ° C (356 °F), with both top and bottom heat.",
// 			'Now in a small pot combine milk, sugar and cornstarch (corn flour). Keep stirring constantly until it starts to bubble and has thickened. Remove from the heat and let cool for 2 to 3 minutes. In the meantime scatter gooseberries over the base. Add sour cream to the cream that you previously made and whisk. Spread the vanilla cream on top of the gooseberries and sprinkle the crumble evenly over the top and bake for 45 minutes or until the crumbles are lightly golden brown. Remove from the oven and let cool for few minutes. Serve it with whipped cream and enjoy!'
// 		],
// 		recipeYield: '12 servings',
// 		rating: 5
// 	},
// 	{
// 		author: 'AllRecipes',
// 		url: 'https://www.allrecipes.com/recipe/12409/apple-crisp-ii/',
// 		isBasedOn: '',
// 		cookTime: '45min',
// 		datePublished: '2023-10-10',
// 		tags: ['dessert'],
// 		description:
// 			"This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
// 		image: './images/apple-crisp.jpg',
// 		recipeIngredient: [
// 			'10 C apples, cored and sliced',
// 			'1 C white sugar',
// 			'1 Tbsp white flour',
// 			'1 tsp ground cinnamon',
// 			'3 Tbsp water',
// 			'1 C rolled oats',
// 			'1 C Flour',
// 			'1 C Brown sugar',
// 			'1/4 tsp baking powder',
// 			'1/4 tsp baking soda',
// 			'1/2 C butter, melted'
// 		],
// 		name: 'Apple Crisp',
// 		prepTime: '30 min',
// 		recipeInstructions: [
// 			'Preheat the oven to 350 degrees F (175 degrees C).',
// 			'Place sliced apples in a 9x13-inch baking dish. Mix white sugar, 1 tablespoon flour, and cinnamon together; sprinkle over apples. Pour water evenly over apples.',
// 			'Combine oats, 1 cup flour, brown sugar, baking powder, and baking soda in a large bowl. Add melted butter and mix with a fork until crumbly; sprinkle evenly over apple mixture.',
// 			'Bake in the preheated oven until top is golden brown and apples are bubbling around the edges, about 45 minutes.'
// 		],
// 		recipeYield: '12 servings',
// 		rating: 4
// 	}
// ]            

// let recipeContainer = document.querySelector('#recipe-container');
// let button = document.querySelector('button');

// button.addEventListener('click', search);

// function search(event) {

//     event.preventDefault();
    
//     let recipeQuery = document.querySelector('#search').value

//     let filterRecipes = recipes.filter(function(recipe){
//         return (
//             recipe.name.toLowerCase().includes(recipeQuery.toLowerCase()) ||
//             recipe.description.toLowerCase().includes(recipeQuery.toLowerCase()) ||
//             recipe.tags.find(tag => tag.toLowerCase().includes(recipeQuery.toLowerCase()))
//         )
//     })

//     let sortedRecipes = filterRecipes.sort(function(a, b) {
//         if (a.name.toLowerCase() < b. name.toLowerCase()) {
//             return -1;
//         } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
//             return 1
//         }
//         return 0
//     })

//     recipeContainer.innerHTML = ' '
//     sortedRecipes.forEach(function(recipe){
//         renderRecipe(recipe);
//     })
// }

// let randomNum = Math.floor(Math.random()* recipes.length);


// function tagTemplate(tags) {
//     return tags.map((tag)=> `<button>${tag}</button>`).join(' ');
// }

// function starsTemplate(rating) {
// 		let html = `<span
// 	class="rating"
// 	role="img"
// 	aria-label="Rating: ${rating} out of 5"
// >  Difficulty: `
//     for (let i = 1; i <= 5; i++) {
//       if (i <= rating) {
//         html += `<span aria-hidden="true" class="icon-star"> ⭐</span>`
//       } else {
//         html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
//       }			
//     }
//     html += `</span>`
//     return html
//   }

// function recipesTemplate(recipe) {
//     return `<section class="recipe-card">
//             <img src="${recipe.image}" alt="${recipe.name}">
//             <p>${starsTemplate(recipe.rating)}</p>
//             <div class="recipe-details">
//                 <div class="tag">${tagTemplate(recipe.tags)}</div>
//                 <h2>${recipe.name}</h2>
//                 <p class="recipe-desc">${recipe.description}</p>    
//             </div>
//         </section>`
// }

// function renderRecipe(recipe) {
//     let html = recipesTemplate(recipe);
//     recipeContainer.innerHTML += html
// }

// function init() {
//     renderRecipe(recipes[randomNum]);
// }

// init();