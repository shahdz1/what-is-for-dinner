var food = [
    {
        id: 0,
        title: "Caesar Salad",
        pragaraf: "Classic salad with crispy romaine and creamy dressing",
        typeOfFood: "Mediterranean",
        level: "Easy",
        ingredients: [
            {
                number: "1",
                item: `1 large romaine lettuce`
            },
            {
                number: "2",
                item: `1/2 cup Caesar dressing`
            },

            {
                number: "3",
                item: `1/2 cup parmesan cheese, shaved`
            },
            
            {
                number: "4",
                item: `1 cup croutons`
            },
            {
                number: "5",
                item: `2 anchovy fillets (optional)`
            },
            {
                number: "6",
                item: `Lemon wedges`
            },
            {
                number: "7",
                item: `Black pepper`
            }
        ],
        instructions: [
            {
                number: "1",
                item: `Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.`
            },
            {
                number: "2",
                item: `Place lettuce in a large salad bowl.`
            },
            {
                number: "3",
                item: `Add Caesar dressing and toss until evenly coated.`
            },
            {
                number: "4",
                item: `Add croutons and half the parmesan cheese. Toss gently.`
            },
            {
                number: "5",
                item: `Top with remaining parmesan shavings and anchovies if using.`
            },
            {
                number: "6",
                item: `Serve immediately with lemon wedges and fresh black pepper.`
            }
        ],
        nutrition:
        {
            Calories: "320 kcal",
            Protein: "12g",
            Carbohydrates: "18g",
            Fat: "22g",
            Fiber: "3g",
            Sodium: "680mg"
        }
        ,
        tips: [
            "Use cold, crisp lettuce for best texture",
            "Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal",
            "Don't dress salad until ready to serve"
        ],
        image: "./caesar.avif",
        reviewRate: "4.4",
        reviewsCount: "(198 reviews)",
        prepTime: "15 min",
        cookTime: "0 min",
        servings: "2 people",
    },
    {
        id: 1,
        title: "Classic Beef Burger",
        pragaraf: "Juicy homemade burger with all the fixings",
        typeOfFood: "American",
        level: "Easy",
        ingredients: [
            {
                number: "1",
                item: `500g ground beef (80/20)`
            },
            {
                number: "2",
                item: `4 burger buns`
            },
            {
                number: "3",
                item: `4 slices cheddar cheese`
            },
            {
                number: "4",
                item: `Lettuce leaves`
            },
            {
                number: "5",
                item: `Tomato slices`
            },
            {
                number: "6",
                item: `Red onion, sliced`
            },
            {
                number: "7",
                item: `Pickles`
            },
            {
                number: "8",
                item: `Burger sauce or condiments`
            }
        ],
        instructions: [
            {
                number: "1",
                item: `Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.`
            },
            {
                number: "2",
                item: `Season patties generously with salt and pepper on both sides.`
            },
            {
                number: "3",
                item: `Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.`
            },
            {
                number: "4",
                item: `Add cheese slices in the last minute of cooking and cover to melt.`
            },
            {
                number: "5",
                item: `Toast burger buns lightly on the grill or in a pan.`
            },
            {
                number: "6",
                item: `Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.`
            }
        ],
        nutrition:
        {
            Calories: "650 kcal",
            Protein: "38g",
            Carbohydrates: "42g",
            Fat: "35g",
            Fiber: "2g",
            Sodium: "920mg"
        }
        ,
        tips: [
            "Don't press down on burgers while cooking - keeps them juicy",
            "Make indent in center to prevent burger from puffing up",
            "Let patties rest for 2-3 minutes before serving",
            "Toast buns for better texture and flavor"
        ],
        image: "./burger.avif",
        reviewRate: "4.6",
        reviewsCount: "(421 reviews)",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "4 people",
    },
    {
        id: 2,
        title: "Teriyaki Chicken Bowl",
        pragaraf: "Sweet and savory chicken over rice with vegetables",
        typeOfFood: "Asian",
        level: "Easy",
        ingredients: [
            {
                number: "1",
                item: `400g chicken thighs, sliced`
            },
            {
                number: "2",
                item: `1/2 cup teriyaki sauce`
            },
            {
                number: "3",
                item: `2 cups cooked rice`
            },
            {
                number: "4",
                item: `1 broccoli head, florets`
            },
            {
                number: "5",
                item: `1 carrot, julienned`
            },
            {
                number: "6",
                item: `Sesame seeds`
            },
            {
                number: "7",
                item: `Green onions, sliced`
            },
            {
                number: "8",
                item: `1 tablespoon sesame oil`
            }
        ],
        instructions: [
            {
                number: "1",
                item: `Heat sesame oil in a pan. Cook chicken until browned on all sides.`
            },
            {
                number: "2",
                item: `Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.`
            },
            {
                number: "3",
                item: `Meanwhile, steam broccoli and carrots until tender-crisp.`
            },
            {
                number: "4",
                item: `Divide rice between bowls.`
            },
            {
                number: "5",
                item: `Top with teriyaki chicken and steamed vegetables.`
            },
            {
                number: "6",
                item: `Garnish with sesame seeds and green onions. Serve hot.`
            }
        ],
        nutrition:
        {
            Calories: "540 kcal",
            Protein: "42g",
            Carbohydrates: "58g",
            Fat: "14g",
            Fiber: "4g",
            Sodium: "1240mg"
        }
        ,
        tips: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead"
        ],
        image: "./teryaki.avif",
        reviewRate: "4.7",
        reviewsCount: "(367 reviews)",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "2 people"
    },
    {
        id: 3,
        title: "Caprese Sandwich",
        pragaraf: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        typeOfFood: "Italian",
        level: "Easy",
        ingredients: [
            {
                number: "1",
                item: `1 ciabatta bread`
            },
            {
                number: "2",
                item: `200g fresh mozzarella, sliced`
            },
            {
                number: "3",
                item: `2 large tomatoes, sliced`
            },
            {
                number: "4",
                item: `Fresh basil leaves`
            },
            {
                number: "5",
                item: `3 tablespoons pesto`
            },
            {
                number: "6",
                item: `2 tablespoons balsamic glaze`
            },
            {
                number: "7",
                item: `Olive oil`
            },
            {
                number: "8",
                item: `Salt and pepper`
            }
        ],
        instructions: [
            {
                number: "1",
                item: `Slice ciabatta bread in half horizontally.`
            },
            {
                number: "2",
                item: `Toast bread lightly until just crispy.`
            },
            {
                number: "3",
                item: `Spread pesto on both sides of bread.`
            },
            {
                number: "4",
                item: `Layer mozzarella slices, tomato slices, and fresh basil leaves.`
            },
            {
                number: "5",
                item: `Drizzle with olive oil and balsamic glaze. Season with salt and pepper.`
            },
            {
                number: "6",
                item: `Close sandwich, cut in half, and serve immediately.`
            }
        ],
        nutrition:
        {
            Calories: "480 kcal",
            Protein: "22g",
            Carbohydrates: "48g",
            Fat: "22g",
            Fiber: "3g",
            Sodium: "680mg"
        }
        ,
        tips: [
            "Use ripe, in-season tomatoes for best flavor",
            "Buffalo mozzarella is traditional but harder to slice",
            "Toast bread lightly - not too crispy",
            "Add prosciutto or salami for a heartier sandwich"
        ],
        image: "./caprese.avif",
        reviewRate: "4.5",
        reviewsCount: "(189 reviews)",
        prepTime: "10 min",
        cookTime: "5 min",
        servings: "2 people"
    },
    {
        id: 4,
        title: "Pad Thai",
        pragaraf: "Popular Thai stir-fried noodles with shrimp and peanuts",
        typeOfFood: "Asian",
        level: "Intermediate",
        ingredients: [
            {
                number: "1",
                item: `200g rice noodles`
            },
            {
                number: "2",
                item: `200g shrimp, peeled`
            },
            {
                number: "3",
                item: `2 eggs`
            },
            {
                number: "4",
                item: `3 tablespoons tamarind paste`
            },
            {
                number: "5",
                item: `2 tablespoons fish sauce`
            },
            {
                number: "6",
                item: `1 tablespoon palm sugar`
            },
            {
                number: "7",
                item: `Bean sprouts`
            },
            {
                number: "8",
                item: `Crushed peanuts`
            },
            {
                number: "9",
                item: `Lime wedges and cilantro`
            }
        ],
        instructions: [
            {
                number: "1",
                item: `Soak rice noodles in warm water for 30 minutes. Drain and set aside.`
            },
            {
                number: "2",
                item: `Mix tamarind paste, fish sauce, and palm sugar to make the sauce.`
            },
            {
                number: "3",
                item: `Heat wok over high heat. Scramble eggs and set aside.`
            },
            {
                number: "4",
                item: `Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.`
            },
            {
                number: "5",
                item: `Add scrambled eggs and bean sprouts. Toss everything together.`
            },
            {
                number: "6",
                item: `Serve topped with crushed peanuts, lime wedges, and cilantro.`
            }
        ],
        nutrition:
        {
            Calories: "540 kcal",
            Protein: "32g",
            Carbohydrates: "62g",
            Fat: "16g",
            Fiber: "4g",
            Sodium: "1120mg"
        }
        ,
        tips: [
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook"
        ],
        image: "./padthai.avif",
        reviewRate: "4.8",
        reviewsCount: "(445 reviews)",
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people"
    },
    {
        id: 5,
        title: "Margherita Pizza",
        pragaraf: "Classic Italian pizza with fresh mozzarella and basil",
        typeOfFood: "Italian",
        level: "Intermediate",
        warning: 1,
        ingredients: [
            {
                number: "1",
                item: `300g pizza dough`
            },
            {
                number: "2",
                item: `200g crushed tomatoes`
            },
            {
                number: "3",
                item: `250g fresh mozzarella`
            },
            {
                number: "4",
                item: `Fresh basil leaves`
            },
            {
                number: "5",
                item: `2 tablespoons olive oil`
            },
            {
                number: "6",
                item: `2 cloves garlic, minced`
            },
            {
                number: "7",
                item: `Salt and pepper to taste`
            },
            {
                number: "8",
                item: `Parmesan cheese for topping`
            },
            {
                number: "9",
                item: `Lime wedges and cilantro`
            }
        ],
        instructions: [
            {
                number: "1",
                item: `Let pizza dough come to room temperature and rest for 1 hour.`
            },
            {
                number: "2",
                item: `Preheat oven to maximum temperature (usually 250°C/480°F).`
            },
            {
                number: "3",
                item: `Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.`
            },
            {
                number: "4",
                item: `Roll out dough on a floured surface to desired thickness.`
            },
            {
                number: "5",
                item: `Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.`
            },
            {
                number: "6",
                item: `Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.`
            }
        ],
        nutrition:
        {
            Calories: "580 kcal",
            Protein: "24g",
            Carbohydrates: "68g",
            Fat: "22g",
            Fiber: "4g",
            Sodium: "920mg"
        }
        ,
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload with toppings - less is more",
            "Add basil after baking to keep it fresh",
            "Let dough rest properly for best texture"
        ],
        image: "./pizza.avif",
        reviewRate: "4.9",
        reviewsCount: "(512 reviews)",
        prepTime: "20 min",
        cookTime: "12 min",
        servings: "2 people"
    },
    {
        id: 6,
        title: "Chicken Tikka Masala",
        pragaraf: "Rich and creamy Indian curry with tender chicken pieces",
        typeOfFood: "Asian",
        level: "Intermediate",
        warning: 2,
        ingredients: [
            {
                number: "1",
                item: `600g chicken breast, cubed`
            },
            {
                number: "2",
                item: `1 cup plain yogurt`
            },
            {
                number: "3",
                item: `2 tablespoons tikka masala paste`
            },
            {
                number: "4",
                item: `400ml coconut cream`
            },
            {
                number: "5",
                item: `1 onion, diced`
            },
            {
                number: "6",
                item: `4 cloves garlic, minced`
            },
            {
                number: "7",
                item: `2 tablespoons ginger, grated`
            },
            {
                number: "8",
                item: `400g canned tomatoes`
            },
            {
                number: "9",
                item: `Fresh cilantro for garnish`
            }
        ],
        instructions: [
            {
                number: "1",
                item: `Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.`
            },
            {
                number: "2",
                item: `Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.`
            },
            {
                number: "3",
                item: `In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.`
            },
            {
                number: "4",
                item: `Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.`
            },
            {
                number: "5",
                item: `Stir in coconut cream and remaining yogurt. Add chicken back to the pan.`
            },
            {
                number: "6",
                item: `Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.`
            }
        ],
        nutrition:
        {
            Calories: "450 kcal",
            Protein: "38g",
            Carbohydrates: "24g",
            Fat: "22g",
            Fiber: "4g",
            Sodium: "760mg"
        }
        ,
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice"
        ],
        image: "./masala.avif",
        reviewRate: "4.7",
        reviewsCount: "(389 reviews)",
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "4 people"
    },
    {
        id: 7,
        title: "Vegetable Curry",
        pragaraf: "Hearty vegetarian curry with coconut milk",
        typeOfFood: "Asian",
        level: "Easy",
        warning: 3,
        ingredients: [
            {
                number: "1",
                item: `2 potatoes, cubed`
            },
            {
                number: "2",
                item: `1 cauliflower, florets`
            },
            {
                number: "3",
                item: `2 carrots, sliced`
            },
            {
                number: "4",
                item: `1 can chickpeas`
            },
            {
                number: "5",
                item: `400ml coconut milk`
            },
            {
                number: "6",
                item: `3 tablespoons curry powder`
            },
            {
                number: "7",
                item: `1 onion, diced`
            },
            {
                number: "8",
                item: `3 cloves garlic, minced`
            },
            {
                number: "9",
                item: `Fresh spinach`
            }
        ],
        instructions: [
            {
                number: "1",
                item: `Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.`
            },
            {
                number: "2",
                item: `Add potatoes and carrots, cook for 5 minutes.`
            },
            {
                number: "3",
                item: `Pour in coconut milk and 1 cup water. Bring to simmer.`
            },
            {
                number: "4",
                item: `Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.`
            },
            {
                number: "5",
                item: `Stir in fresh spinach and cook until wilted.`
            },
            {
                number: "6",
                item: `Serve hot over basmati rice or with naan bread.`
            }
        ],
        nutrition:
        {
            Calories: "380 kcal",
            Protein: "14g",
            Carbohydrates: "48g",
            Fat: "16g",
            Fiber: "12g",
            Sodium: "480mg"
        }
        ,
        tips: [
            "Add vegetables in order of cooking time needed",
            "Adjust curry powder amount to taste",
            "Use full-fat coconut milk for creamier curry",
            "Add protein like tofu or paneer if desired"
        ],
        image: "./nodelles.avif",
        reviewRate: "4.6",
        reviewsCount: "(289 reviews)",
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "4 people"
    }
]

var oldValue;
function changeRecipe() {
    var randomIndex = Math.floor(Math.random() * food.length);
    while (randomIndex === oldValue) {
        randomIndex = Math.floor(Math.random() * food.length);
    }
    oldValue = randomIndex;

    var instructionsIndex = "";
    var ingredientsIndex = "";
    var tipsIndex = "";
    // ingredientsIndex = food[randomIndex].ingredients.reduce(function (result, ing) {
    //     return result + `<li class=" text-dark d-flex justify-content-start align-items-center"><span
    //         class="text-white bg-warning rounded-circle fw-bold num-div d-flex justify-content-center align-items-center me-3">${ing.number}</span>${ing.item}</li>`
    // }, '')
    for (var i = 0; i < food[randomIndex].ingredients.length; i++) {
        ingredientsIndex += `<li class=" text-dark d-flex justify-content-start align-items-center"><span
            class="text-white bg-warning rounded-circle fw-bold num-div d-flex justify-content-center align-items-center me-3">${food[randomIndex].ingredients[i].number}</span>${food[randomIndex].ingredients[i].item}</li>`
    }

    // food[randomIndex].instructions.forEach(function (instruction) {
    //     instructionsIndex += `<li class=" text-dark d-flex justify-content-start align-items-center"><span
    //                             class="text-white bg-warning fw-bold second-num-div rounded-4 me-3 d-flex justify-content-center align-items-center">${instruction.number}</span>
    //                             ${instruction.item}
    //                             </li>`
    // })

    for (var i = 0; i < food[randomIndex].instructions.length; i++) {
        instructionsIndex += `<li class=" text-dark d-flex justify-content-start align-items-center"><span
                                class="text-white bg-warning fw-bold second-num-div rounded-4 me-3 d-flex justify-content-center align-items-center">${food[randomIndex].instructions[i].number}</span>
                                ${food[randomIndex].instructions[i].item}
                                </li>`
    }

    for (var i = 0; i < food[randomIndex].tips.length; i++) {
        tipsIndex += `<div class="p-3 bg-info tips-div mb-3">
                            <p class=" text-light d-flex fs-6 justify-content-start align-items-center"><span
                            class="rounded-circle  d-flex justify-content-center align-items-center checked mt-2"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12px"height="12px">
                            <path fill="#fff" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z" />
                            </svg></span>${food[randomIndex].tips[i]}</p>
                    </div>`
    }

    document.getElementById("header").innerHTML = `
            <div class="container bg-white d-flex rounded-5">
                <div class="left-side rounded-5 w-30 position-relative">
                    <img src=${food[randomIndex].image} alt=""
                            class="img-fluid h-100 object-fit-cover">
                    <div class="z-3 p-4 position-absolute d-flex justify-content-between h-100 flex-column top-0 img-top">
                        <div class="bg-white px-3 py-2 rounded-pill d-flex align-items-center top-div">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="me-2" width="16px"
                                height="16px">
                                <path fill="#FDC700"
                                    d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                            </svg>
                            <span class="fs-6 fw-semibold me-2">${food[randomIndex].reviewRate}</span>
                            <small>${food[randomIndex].reviewsCount}</small>
                        </div>
                        <div class="bg-white d-flex align-items-center bottom-div rounded-4 gap-5 px-5">
                            <div class="d-flex flex-column align-items-center me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px"
                                    height="24px">
                                    <path fill="#FF6900"
                                        d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                </svg>
                                <small>Prep Time</small>
                                <span class="fs-6 fw-bold me-2">${food[randomIndex].prepTime}</span>
                            </div>
                            <div class="d-flex flex-column align-items-center me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px"
                                    height="24px">
                                    <path fill="#FB2C36"
                                        d="M281.7 48.3L294 34.5c5.4-6.1 13.3-8.8 20.9-8.9 7.2 0 14.3 2.6 19.9 7.8 19.7 18.3 39.8 43.2 55 70.6 15.1 27.2 26.2 58.1 26.2 88.1 0 88.7-71.3 159.8-160 159.8-89.6 0-160-71.3-160-159.8 0-37.3 16-73.4 36.8-104.5 20.9-31.3 47.5-59 70.9-80.2 5.7-5.2 13.1-7.7 20.3-7.5s13.4 3.2 18.8 7.5c14.4 11.4 38.9 40.7 38.9 40.7zM320 240.2c0-36.5-37-73-54.8-88.4-5.4-4.7-13.1-4.7-18.5 0-17.7 15.4-54.8 51.9-54.8 88.4 0 35.3 28.7 64 64 64s64-28.7 64-64zM92.8 320c37.7 48.3 96.1 80 163.2 80 66.5 0 125.1-31.7 163-80l45 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l44.8 0zM456 400a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
                                </svg>
                                <small>Cook Time</small>
                                <span class="fs-6 fw-bold me-2">${food[randomIndex].cookTime}</span>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24px"
                                    height="24px">
                                    <path fill="#2B7FFF"
                                        d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z" />
                                </svg>
                                <small>Servings</small>
                                <span class="fs-6 fw-bold me-2">${food[randomIndex].servings}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-side d-flex flex-column w-60 p-5">
                    <div class="d-flex align-items-center justify-content-between title">
                        <article>
                            <div class="mb-3 fw-semibold d-flex align-items-center">
                                <span class="py-1 rounded-pill green">${food[randomIndex].typeOfFood}</span>
                                <span class="py-1 rounded-pill blue">${food[randomIndex].level}</span>
                            </div>
                            <h2 class="text-danger fw-bold mb-2">${food[randomIndex].title}</h2>
                            <p class="text-light p-0">${food[randomIndex].pragaraf}</p>
                        </article>
                        <div class="d-flex mt-1">
                            <span class="svg-div d-flex justify-content-center align-items-center me-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16px" height="16px">
                                    <path fill="#F54900"
                                        d="M64 0C28.7 0 0 28.7 0 64L0 480c0 11.5 6.2 22.2 16.2 27.8s22.3 5.5 32.2-.4L192 421.3 335.5 507.4c9.9 5.9 22.2 6.1 32.2 .4S384 491.5 384 480l0-416c0-35.3-28.7-64-64-64L64 0z" />
                                </svg></span>
                            <span class="svg-div d-flex justify-content-center align-items-center"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px" height="16px">
                                    <path fill="#F54900"
                                        d="M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z" />
                                </svg></span>
                        </div>
                    </div>
                        ${food[randomIndex].warning ? `<div class="warning rounded-3 p-3 mb-4 d-flex  align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512" width="20px" height="20px">
                            <path fill="#fb2c36"
                                d="M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z" />
                        </svg>
                        <article>
                            <p class="fs-6 fw-semibold text-success mb-0">Extended Preparation Time</p>
                            <small class="ms-2">This recipe requires more than 45 minutes to prepare. Plan accordingly!</small>
                        </article>
                    </div>`
            : ""}
                    <ul class="nav text-center justify-content-center d-flex gap-2">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" data-bs-toggle="tab" href="#ingredients"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="me-2 mb-1"
                                    width="18px" height="18px">
                                    <path fill="#6a7282"
                                        d="M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                                </svg>Ingredients</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#Instructions"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="me-2 mb-1"
                                    width="18px" height="18px">
                                    <path fill="#6a7282"
                                        d="M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z" />
                                </svg> Instructions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#Nutrition"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="me-2 mb-1"
                                    width="18px" height="18px">
                                    <path fill="#6a7282"
                                        d="M512.4 240l-176 0c-17.7 0-32-14.3-32-32l0-176c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206 2.3 17.5-12.2 31.9-29.9 31.9zM222.6 37.2c18.1-3.8 33.8 11 33.8 29.5l0 197.3c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1-34.1 18.6-73.2 29.2-114.7 29.2-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8zM477.8 288l64 0c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9L374.9 340.4c-17.3-20.9-2.4-52.4 24.6-52.4l78.2 0z" />
                                </svg>Nutrition</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#Tips"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="me-2 mb-1"
                                    width="18px" height="18px">
                                    <path fill="#6a7282"
                                        d="M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
                                </svg>Chef's Tips</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="ingredients" role="tabpanel"
                            aria-labelledby="ingredients-tab" tabindex="0">
                            <div class="rounded-4 ingredients-div p-4 mt-4">
                                <ul class="list-unstyled gap-3 d-flex flex-column">
                                    ${ingredientsIndex}
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="Instructions" role="tabpanel" aria-labelledby="Instructions-tab"
                            tabindex="0">
                            <div class="rounded-4 p-4 mt-4">
                                <ul class="list-unstyled gap-4 d-flex flex-column">
                                    ${instructionsIndex}
                                </ul>
                            </div>
                            </p>
                        </div>
                        <div class="tab-pane fade" id="Nutrition" role="tabpanel" aria-labelledby="Nutrition-tab"
                            tabindex="0">
                            <div class="mt-4 ">
                                <div class="row p-2 g-3">
                                    <div class="col-12 col-md-6 ">
                                        <div class="d-flex bg-danger p-3 rounded-4 justify-content-between">
                                            <div class="fs-6 fw-semibold text-light d-flex align-items-center">
                                                <span
                                                    class="d-flex justify-content-center align-items-center kcl-div orange rounded-3"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                        width="16px" height="16px">
                                                        <path fill="#f54a00"
                                                            d="M160.5-26.4c9.3-7.8 23-7.5 31.9 .9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1 7.9-9.8 17.7-22.1 30.8-22.1 13.4 0 22.8 11.9 30.8 22.1 1.3 1.7 2.6 3.3 3.9 4.8 10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z" />
                                                    </svg></span>
                                                Calories
                                            </div>
                                            <span class="fw-bold fs-5 text-danger">${food[randomIndex].nutrition.Carbohydrates}</span>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 ">
                                        <div class="d-flex bg-danger p-3 rounded-4 justify-content-between">
                                            <div class="fs-6 fw-semibold text-light d-flex align-items-center">
                                                <span
                                                    class="d-flex justify-content-center align-items-center kcl-div blue rounded-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                                                        width="16px" height="16px">
                                                        <path fill="#155DFC"
                                                            d="M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112 256 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 16 16 0c26.5 0 48 21.5 48 48l0 48c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 48c0 26.5-21.5 48-48 48l-16 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112-256 0 0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-16-16 0c-26.5 0-48-21.5-48-48l0-48c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-48c0-26.5 21.5-48 48-48l16 0 0-16z" />
                                                    </svg>
                                                </span>
                                                Protein
                                            </div>
                                            <span class="fw-bold fs-5 text-danger">${food[randomIndex].nutrition.Protein}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row p-2 g-3">
                                    <div class="col-12 col-md-6 ">
                                        <div class="d-flex bg-danger p-3 rounded-4 justify-content-between">
                                            <div class="fs-6 fw-semibold text-light d-flex align-items-center">
                                                <span
                                                    class="d-flex justify-content-center align-items-center kcl-div yellow rounded-3"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                        width="16px" height="16px">
                                                        <path fill="#D08700"
                                                            d="M79.7 234.6c6.2-4.1 14.7-3.4 20.1 2.1l46.1 46.1 6.1 6.7c19.7 23.8 26.3 55 19.2 83.9 31.7-7.7 66.2 1 90.6 25.3l46.1 46.1c6.2 6.2 6.2 16.4 0 22.6l-7.4 7.4c-37.5 37.5-98.3 37.5-135.8 0L134.1 444.3 49.4 529c-9.4 9.4-24.5 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l84.7-84.7-30.5-30.5c-37.5-37.5-37.5-98.3 0-135.7l7.4-7.4 2.5-2.1zm104-104c6.2-4.1 14.7-3.4 20.1 2.1l46.1 46.1 6.1 6.7c19.7 23.8 26.3 55 19.2 83.9 31.7-7.7 66.2 1 90.6 25.3l46.1 46.1c6.2 6.2 6.2 16.4 0 22.6l-7.4 7.4c-37.5 37.5-98.3 37.5-135.8 0l-94.9-94.9c-37.5-37.5-37.5-98.3 0-135.7l7.4-7.4 2.5-2.1zM495.2 15c9.4-9.4 24.6-9.4 34 0 8.8 8.8 9.3 22.7 1.6 32.2L529.2 49 414.7 163.4c7.7 1 15.2 3 22.5 5.9L495.5 111c9.4-9.4 24.6-9.4 34 0 8.8 8.8 9.3 22.7 1.6 32.1l-1.7 1.8-52.7 52.7 39 39c6.2 6.2 6.2 16.4 0 22.6l-7.4 7.4c-37.5 37.5-98.3 37.5-135.8 0l-94.9-94.9c-37.5-37.5-37.5-98.3 0-135.7l7.4-7.4 2.5-2.1c6.2-4.1 14.7-3.4 20.1 2.1l39 39 52.7-52.7c9.4-9.4 24.6-9.4 34 0 8.8 8.8 9.3 22.7 1.6 32.1l-1.7 1.8-58.3 58.3c2.8 7.1 4.7 14.5 5.7 22.1L495.2 15z" />
                                                    </svg>
                                                </span>
                                                Carbohydrates
                                            </div>
                                            <span class="fw-bold fs-5 text-danger">${food[randomIndex].nutrition.Carbohydrates}</span>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 ">
                                        <div class="d-flex bg-danger p-3 rounded-4 justify-content-between">
                                            <div class="fs-6 fw-semibold text-light d-flex align-items-center">
                                                <span
                                                    class="d-flex justify-content-center align-items-center kcl-div red rounded-3"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                                        width="16px" height="16px">
                                                        <path fill="#E7000B"
                                                            d="M192 512C86 512 0 426 0 320 0 228.8 130.2 45.9 166.6-3.5 172.5-11.5 181.8-16 191.8-16l.4 0c10 0 19.3 4.5 25.2 12.5 36.4 49.4 166.6 232.3 166.6 323.5 0 106-86 192-192 192zM112 312c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 75.1 60.9 136 136 136 13.3 0 24-10.7 24-24s-10.7-24-24-24c-48.6 0-88-39.4-88-88z" />
                                                    </svg>
                                                </span>
                                                Fat
                                            </div>
                                            <span class="fw-bold fs-5 text-danger">${food[randomIndex].nutrition.Fat}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row p-2 g-3">
                                    <div class="col-12 col-md-6 ">
                                        <div class="d-flex bg-danger p-3 rounded-4 justify-content-between">
                                            <div class="fs-6 fw-semibold text-light d-flex align-items-center">
                                                <span
                                                    class="d-flex justify-content-center align-items-center kcl-div green rounded-3"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                        width="16px" height="16px">
                                                        <path fill="#00A63E"
                                                            d="M512 32C512 140.1 435.4 230.3 333.6 251.4 325.7 193.3 299.6 141 261.1 100.5 301.2 40 369.9 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z" />
                                                    </svg>
                                                </span>
                                                Fiber
                                            </div>
                                            <span class="fw-bold fs-5 text-danger">${food[randomIndex].nutrition.Fiber}</span>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 ">
                                        <div class="d-flex bg-danger p-3 rounded-4 justify-content-between">
                                            <div class="fs-6 fw-semibold text-light d-flex align-items-center">
                                                <span
                                                    class="d-flex justify-content-center align-items-center kcl-div pink rounded-3"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                        width="16px" height="16px">
                                                        <path fill="#E60076"
                                                            d="M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z" />
                                                    </svg>
                                                </span>
                                                Sodium
                                            </div>
                                            <span class="fw-bold fs-5 text-danger">${food[randomIndex].nutrition.Sodium}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="Tips" role="tabpanel" aria-labelledby="Tips-tab" tabindex="0">
                            <div class="mt-4">
                                ${tipsIndex}
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrapper">
                        <button type="button" onclick="changeRecipe()" class="btn btn-secondary col-4"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512" width="14px" height="14px" class="me-2 mb-1">
                                <path fill="#fff"
                                    d="M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z" />
                            </svg>Try Another Recipe</button>
                    </div>
                </div>
            </div>
        `
}

changeRecipe()