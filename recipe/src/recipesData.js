const recipesData = [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      dietType: 'non-vegetarian',
      ingredients: [
        { name: 'pasta', image: 'https://source.unsplash.com/50x50/?pasta' },
        { name: 'tomato', image: 'https://source.unsplash.com/50x50/?tomato' },
        { name: 'beef', image: 'https://source.unsplash.com/50x50/?beef' },
        { name: 'onion', image: 'https://source.unsplash.com/50x50/?onion' },
        { name: 'garlic', image: 'https://source.unsplash.com/50x50/?garlic' }
      ],
      isFavorite: false, // Initialize with false
      reviews: [],
      description: 'A classic Italian pasta dish with a rich and savory sauce.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnhKS5s2ISPwGWnGvdOGaIQzgyoEe4dczOA70_L95peBcl2lX&s',
      url: 'https://www.edamam.com/results/recipe/?recipe=zesty-sardine-&-purple-kale-spaghetti-7816cce3ea161c44d5557fb0014ae4db/search=spaghetti',
    },
    {
      id: 2,
      name: 'Vegetable Stir-Fry',
      dietType: 'vegan',
      ingredients: [
        { name: 'broccoli', image: 'https://source.unsplash.com/50x50/?broccoli' },
        { name: 'carrot', image: 'https://source.unsplash.com/50x50/?carrot' },
        { name: 'soy sauce', image: 'https://source.unsplash.com/50x50/?soy-sauce' },
        { name: 'garlic', image: 'https://source.unsplash.com/50x50/?garlic' },
        { name: 'ginger', image: 'https://source.unsplash.com/50x50/?ginger' }
      ],
      isFavorite: false, // Initialize with false
      reviews: [],
      description: 'A quick and healthy vegetable stir-fry with Asian flavors.',
      image: 'https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg',
      url: 'https://www.edamam.com/results/recipe/?recipe=recipe:-weeknight-vegetable-stir-fry-05f064fe5ff84dae86b9636fa2d84b00/search=vegetable+stir%20fry',
    },
    {
      id: 3,
      name: 'Chicken Alfredo',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'chicken', image: 'https://source.unsplash.com/50x50/?chicken' },
        { name: 'pasta', image: 'https://source.unsplash.com/50x50/?pasta' },
        { name: 'cream', image: 'https://source.unsplash.com/50x50/?cream' },
        { name: 'parmesan', image: 'https://source.unsplash.com/50x50/?parmesan' },
        { name: 'garlic', image: 'https://source.unsplash.com/50x50/?garlic' }
      ],
      description: 'Creamy pasta with chicken, garlic, and parmesan cheese.',
      image: 'https://momsdinner.net/wp-content/uploads/2020/12/instant-pot-chicken-alfredo-recipe-2.jpg',
      url: 'https://www.edamam.com/results/recipe/?recipe=alfredo-dip-d615b15b1264cefad7bf97a6d3c97b53/search=chicken+alfredo%20dip',
    },
    {
      id: 4,
      name: 'Greek Salad',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'cucumber', image: 'https://source.unsplash.com/50x50/?cucumber' },
        { name: 'tomato', image: 'https://source.unsplash.com/50x50/?tomato' },
        { name: 'feta cheese', image: 'https://source.unsplash.com/50x50/?feta' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' },
        { name: 'olives', image: 'https://source.unsplash.com/50x50/?olives' }
      ],
      description: 'A refreshing salad with cucumber, tomatoes, feta cheese, and olives.',
      image: 'https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9-3.jpeg',
      url: 'https://www.edamam.com/results/recipe/?recipe=greek-salad-ac0fb46c7b72b5d8ab9130cf7ee39714/search=greek+salad',
    },
    {
      id: 5,
      name: 'BBQ Chicken Pizza',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'pizza dough', image: 'https://source.unsplash.com/50x50/?pizza-dough' },
        { name: 'chicken', image: 'https://source.unsplash.com/50x50/?chicken' },
        { name: 'bbq sauce', image: 'https://source.unsplash.com/50x50/?bbq-sauce' },
        { name: 'mozzarella', image: 'https://source.unsplash.com/50x50/?mozzarella' },
        { name: 'onion', image: 'https://source.unsplash.com/50x50/?onion' }
      ],
      description: 'Delicious BBQ chicken pizza topped with mozzarella and onions.',
      image: 'https://lilluna.com/wp-content/uploads/2014/05/barbecue-chicken-pizza-resize-7.jpg',
      url: 'https://www.edamam.com/results/recipe/?recipe=bbq-chicken-pizza-fd8783e6d55b3c4b26e5b41b7cabb5f6/search=bbq+chicken',
    },
    {
      id: 6,
      name: 'Beef Tacos',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'beef', image: 'https://source.unsplash.com/50x50/?beef' },
        { name: 'tortilla', image: 'https://source.unsplash.com/50x50/?tortilla' },
        { name: 'lettuce', image: 'https://source.unsplash.com/50x50/?lettuce' },
        { name: 'cheese', image: 'https://source.unsplash.com/50x50/?cheese' },
        { name: 'salsa', image: 'https://source.unsplash.com/50x50/?salsa' }
      ],
      description: 'Tasty beef tacos with fresh lettuce, cheese, and salsa.',
      image: 'https://www.jocooks.com/wp-content/uploads/2020/08/ground-beef-tacos-1-12.jpg',
      url: 'https://www.edamam.com/results/recipe/?recipe=quick-beef-tacos-97baa73415846b0484daf943d7380e05/search=beef+tacos',
    },
    {
      id: 7,
      name: 'Margarita Pizza',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'pizza dough', image: 'https://source.unsplash.com/50x50/?pizza-dough' },
        { name: 'tomato', image: 'https://source.unsplash.com/50x50/?tomato' },
        { name: 'mozzarella', image: 'https://source.unsplash.com/50x50/?mozzarella' },
        { name: 'basil', image: 'https://source.unsplash.com/50x50/?basil' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' }
      ],
      description: 'Classic Margarita pizza with fresh basil and mozzarella cheese.',
      image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-1080x1080.jpg',
      url: 'https://www.edamam.com/results/recipe/?recipe=four-cheese-margarita-pizza-recipes-8d54181de3bee94daa1ba53c4d3c3990/search=margarita+pizza',
    },
    {
      id: 8,
      name: 'Chicken Curry',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'chicken', image: 'https://source.unsplash.com/50x50/?chicken' },
        { name: 'coconut milk', image: 'https://source.unsplash.com/50x50/?coconut-milk' },
        { name: 'curry powder', image: 'https://source.unsplash.com/50x50/?curry' },
        { name: 'onion', image: 'https://source.unsplash.com/50x50/?onion' },
        { name: 'garlic', image: 'https://source.unsplash.com/50x50/?garlic' }
      ],
      description: 'Spicy chicken curry with rich coconut milk and aromatic spices.',
      image: 'https://www.thespruceeats.com/thmb/heuS-yz2S_1hJBlLXeym-S-EoBc%3D/6016x4016/filters:fill(auto%2C1)/south-indian-style-chicken-curry-1957789-hero-01-4886b469548e40278351a0085a4d9c92.jpg',
      url: 'https://www.edamam.com/results/recipe/?recipe=braised-peanut-chicken-curry-with-thai-gremolata-83e90ed03e96ae394be92995edee726f/search=chicken+curry',
    },
    {
      id: 9,
      dietType: 'non-vegetarian',
      name: 'Pancakes',
      isFavorite: false, // Initialize with false
      reviews: [],

      ingredients: [
        { name: 'flour', image: 'https://source.unsplash.com/50x50/?flour' },
        { name: 'milk', image: 'https://source.unsplash.com/50x50/?milk' },
        { name: 'egg', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'butter', image: 'https://source.unsplash.com/50x50/?butter' },
        { name: 'syrup', image: 'https://source.unsplash.com/50x50/?syrup' }
      ],
      description: 'Fluffy pancakes served with butter and syrup.',
      image: 'https://www.crazyforcrust.com/wp-content/uploads/2019/07/Easy-Fluffy-Pancakes-Recipe-3.jpg',
      url: 'https://example.com/pancakes',
    },
    {
      id: 10,
      dietType: 'non-vegetarian',
      name: 'Caesar Salad',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'lettuce', image: 'https://source.unsplash.com/50x50/?lettuce' },
        { name: 'parmesan', image: 'https://source.unsplash.com/50x50/?parmesan' },
        { name: 'croutons', image: 'https://source.unsplash.com/50x50/?croutons' },
        { name: 'caesar dressing', image: 'https://source.unsplash.com/50x50/?dressing' },
        { name: 'chicken', image: 'https://source.unsplash.com/50x50/?chicken' }
      ],
      description: 'A classic Caesar salad with parmesan, croutons, and grilled chicken.',
      image: 'https://www.foodiecrush.com/wp-content/uploads/2019/09/Caesar-Salad-foodiecrush.com-017.jpg',
      url: 'https://example.com/caesar-salad',
    },
    {
      id: 11,
      name: 'Mango Smoothie',
      dietType: 'vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'mango', image: 'https://source.unsplash.com/50x50/?mango' },
        { name: 'yogurt', image: 'https://source.unsplash.com/50x50/?yogurt' },
        { name: 'honey', image: 'https://source.unsplash.com/50x50/?honey' },
        { name: 'milk', image: 'https://source.unsplash.com/50x50/?milk' },
        { name: 'ice', image: 'https://source.unsplash.com/50x50/?ice' }
      ],
      description: 'A refreshing mango smoothie with yogurt and honey.',
      image: 'https://www.funfoodfrolic.com/wp-content/uploads/2021/05/Mango-Shake-1.jpg',
      url: 'https://www.funfoodfrolic.com/wp-content/uploads/2021/05/Mango-Shake-1.jpg',
    },
    {
      id: 12,
      name: 'Fruit Salad',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'strawberries', image: 'https://source.unsplash.com/50x50/?strawberry' },
        { name: 'banana', image: 'https://source.unsplash.com/50x50/?banana' },
        { name: 'kiwi', image: 'https://source.unsplash.com/50x50/?kiwi' },
        { name: 'blueberries', image: 'https://source.unsplash.com/50x50/?blueberry' },
        { name: 'grapes', image: 'https://source.unsplash.com/50x50/?grapes' }
      ],
      description: 'A colorful and refreshing fruit salad.',
      image: 'https://www.momontimeout.com/wp-content/uploads/2021/06/fruit-salad-square.jpeg',
      url: 'https://example.com/fruit-salad',
    },
    {
      id: 13,
      name: 'Chocolate Cake',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'flour', image: 'https://source.unsplash.com/50x50/?flour' },
        { name: 'cocoa powder', image: 'https://source.unsplash.com/50x50/?cocoa' },
        { name: 'sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
        { name: 'eggs', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'butter', image: 'https://source.unsplash.com/50x50/?butter' }
      ],
      description: 'A rich and moist chocolate cake perfect for any occasion.',
      image: 'https://www.mybakingaddiction.com/wp-content/uploads/2011/10/lr-0968.jpg',
      url: 'https://example.com/chocolate-cake',
    },
    {
      id: 14,
      name: 'Lemonade',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],

      ingredients: [
        { name: 'lemons', image: 'https://source.unsplash.com/50x50/?lemon' },
        { name: 'sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
        { name: 'water', image: 'https://source.unsplash.com/50x50/?water' },
        { name: 'ice', image: 'https://source.unsplash.com/50x50/?ice' },
      ],
      description: 'A refreshing lemonade made with fresh lemons.',
      image: 'https://bellyfull.net/wp-content/uploads/2022/05/Lemonade-blog-2.jpg',
      url: 'https://example.com/lemonade',
    },
    {
      id: 15,
      name: 'Chili Con Carne',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'beef', image: 'https://source.unsplash.com/50x50/?beef' },
        { name: 'kidney beans', image: 'https://source.unsplash.com/50x50/?beans' },
        { name: 'tomato', image: 'https://source.unsplash.com/50x50/?tomato' },
        { name: 'onion', image: 'https://source.unsplash.com/50x50/?onion' },
        { name: 'spices', image: 'https://source.unsplash.com/50x50/?spices' },
      ],
      description: 'A hearty chili made with beef and beans.',
      image: 'https://www.spices-herbs.de/wp-content/uploads/2020/12/shutterstock_1369643876-1.jpg',
      url: 'https://example.com/chili-con-carne',
    },
    {
      id: 16,
      name: 'Omelette',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'eggs', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'cheese', image: 'https://source.unsplash.com/50x50/?cheese' },
        { name: 'bell pepper', image: 'https://source.unsplash.com/50x50/?bell-pepper' },
        { name: 'onion', image: 'https://source.unsplash.com/50x50/?onion' },
        { name: 'salt', image: 'https://source.unsplash.com/50x50/?salt' },
      ],
      description: 'A fluffy omelette filled with cheese and vegetables.',
      image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2021/04/shutterstock_1154209330-2-scaled.jpg',
      url: 'https://example.com/omelette',
    },
    {
      id: 17,
      name: 'Caprese Salad',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'tomato', image: 'https://source.unsplash.com/50x50/?tomato' },
        { name: 'mozzarella', image: 'https://source.unsplash.com/50x50/?mozzarella' },
        { name: 'basil', image: 'https://source.unsplash.com/50x50/?basil' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' },
        { name: 'balsamic vinegar', image: 'https://source.unsplash.com/50x50/?vinegar' },
      ],
      description: 'A fresh salad with tomatoes, mozzarella, and basil.',
      image: 'https://downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-4.jpg',
      url: 'https://example.com/caprese-salad',
    },
    {
      id: 18,
      name: 'Shrimp Fried Rice',
      
       dietType: 'non-vegetarian',
       isFavorite: false, // Initialize with false
      reviews: [],


      ingredients: [
        { name: 'rice', image: 'https://source.unsplash.com/50x50/?rice' },
        { name: 'peas', image: 'https://source.unsplash.com/50x50/?peas' },
        { name: 'carrot', image: 'https://source.unsplash.com/50x50/?carrot' },
        { name: 'soy sauce', image: 'https://source.unsplash.com/50x50/?soy-sauce' },
      ],
      description: 'Delicious fried rice with shrimp and vegetables.',
      image: 'https://natashaskitchen.com/wp-content/uploads/2018/09/Shrimp-Fried-Rice-2-1024x1536.jpg',
      url: 'https://example.com/shrimp-fried-rice',
    },
    {
      id: 19,
      name: 'Pesto Pasta',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'pasta', image: 'https://source.unsplash.com/50x50/?pasta' },
        { name: 'basil', image: 'https://source.unsplash.com/50x50/?basil' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' },
        { name: 'parmesan', image: 'https://source.unsplash.com/50x50/?parmesan' },
        { name: 'pine nuts', image: 'https://source.unsplash.com/50x50/?pine-nuts' },
      ],
      description: 'Pasta tossed with fresh pesto sauce.',
      image: 'https://richanddelish.com/wp-content/uploads/2023/02/creamy-pesto-pasta-9-of-15.jpg',
      url: 'https://example.com/pesto-pasta',
    },
    {
      id: 20,
      name: 'Tom Yum Soup',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'shrimp', image: 'https://source.unsplash.com/50x50/?shrimp' },
        { name: 'lemongrass', image: 'https://source.unsplash.com/50x50/?lemongrass' },
        { name: 'lime', image: 'https://source.unsplash.com/50x50/?lime' },
        { name: 'chili', image: 'https://source.unsplash.com/50x50/?chili' },
        { name: 'mushroom', image: 'https://source.unsplash.com/50x50/?mushroom' },
      ],
      description: 'A hot and sour Thai soup with shrimp and spices.',
      image: 'https://i0.wp.com/www.valerieskeepers.com/wp-content/uploads/2014/11/Tom-Yum-Soup_10-1-sur-1.jpg',
      url: 'https://example.com/tom-yum-soup',
    },
    {
      id: 21,
      name: 'Banana Bread',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'bananas', image: 'https://source.unsplash.com/50x50/?banana' },
        { name: 'flour', image: 'https://source.unsplash.com/50x50/?flour' },
        { name: 'sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
        { name: 'eggs', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'butter', image: 'https://source.unsplash.com/50x50/?butter' },
      ],
      description: 'A moist banana bread perfect for breakfast or dessert.',
      image: 'https://www.simplyrecipes.com/thmb/B2ie9YoVUvh2mVSG1vSDdQLfS00=/4948x3299/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg',
      url: 'https://example.com/banana-bread',
    },
    {
      id: 22,
      name: 'Stuffed Peppers',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'bell pepper', image: 'https://source.unsplash.com/50x50/?bell-pepper' },
        { name: 'rice', image: 'https://source.unsplash.com/50x50/?rice' },
        { name: 'ground beef', image: 'https://source.unsplash.com/50x50/?beef' },
        { name: 'tomato sauce', image: 'https://source.unsplash.com/50x50/?tomato' },
        { name: 'cheese', image: 'https://source.unsplash.com/50x50/?cheese' },
      ],
      description: 'Bell peppers stuffed with a savory mixture of rice and meat.',
      image: 'https://i2.wp.com/wellplated.com/wp-content/uploads/2019/10/Slow-Cooker-Stuffed-Peppers.jpg',
      url: 'https://example.com/stuffed-peppers',
    },
    {
      id: 23,
      name: 'Avocado Toast',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'bread', image: 'https://source.unsplash.com/50x50/?bread' },
        { name: 'avocado', image: 'https://source.unsplash.com/50x50/?avocado' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' },
        { name: 'salt', image: 'https://source.unsplash.com/50x50/?salt' },
        { name: 'pepper', image: 'https://source.unsplash.com/50x50/?pepper' },
      ],
      description: 'Simple and delicious avocado toast topped with salt and pepper.',
      image: 'https://therecipecritic.com/wp-content/uploads/2020/01/avocado_toast.jpg',
      url: 'https://example.com/avocado-toast',
    },
    {
      id: 24,
      name: 'Chicken Quesadilla',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'tortilla', image: 'https://source.unsplash.com/50x50/?tortilla' },
        { name: 'chicken', image: 'https://source.unsplash.com/50x50/?chicken' },
        { name: 'cheese', image: 'https://source.unsplash.com/50x50/?cheese' },
        { name: 'sour cream', image: 'https://source.unsplash.com/50x50/?sour-cream' },
        { name: 'salsa', image: 'https://source.unsplash.com/50x50/?salsa' },
      ],
      description: 'Cheesy quesadilla filled with chicken and served with salsa.',
      image: 'https://www.savorynothings.com/wp-content/uploads/2021/04/chicken-quesadillas-image-3.jpg',
      url: 'https://example.com/chicken-quesadilla',
    },
    {
      id: 25,
      name: 'Potato Wedges',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'potato', image: 'https://source.unsplash.com/50x50/?potato' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' },
        { name: 'salt', image: 'https://source.unsplash.com/50x50/?salt' },
        { name: 'pepper', image: 'https://source.unsplash.com/50x50/?pepper' },
        { name: 'herbs', image: 'https://source.unsplash.com/50x50/?herbs' },
      ],
      description: 'Crispy potato wedges seasoned with herbs and spices.',
      image: 'https://www.jessicagavin.com/wp-content/uploads/2015/08/baked-potato-wedges-10-1200.jpg',
      url: 'https://example.com/potato-wedges',
    },
    {
      id: 26,
      name: 'Pasta Primavera',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'pasta', image: 'https://source.unsplash.com/50x50/?pasta' },
        { name: 'bell pepper', image: 'https://source.unsplash.com/50x50/?bell-pepper' },
        { name: 'zucchini', image: 'https://source.unsplash.com/50x50/?zucchini' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' },
        { name: 'parmesan', image: 'https://source.unsplash.com/50x50/?parmesan' },
      ],
      description: 'Pasta tossed with fresh vegetables and olive oil.',
      image: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/04/a9696fb4dd17254516d5ebca8e3705ac7243dcfa.jpeg',
      url: 'https://example.com/pasta-primavera',
    },
    {
      id: 27,
      name: 'Baked Salmon',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      
      ingredients: [
        { name: 'salmon', image: 'https://source.unsplash.com/50x50/?salmon' },
        { name: 'lemon', image: 'https://source.unsplash.com/50x50/?lemon' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' },
        { name: 'garlic', image: 'https://source.unsplash.com/50x50/?garlic' },
        { name: 'herbs', image: 'https://source.unsplash.com/50x50/?herbs' },
      ],
      description: 'Delicious baked salmon with lemon and herbs.',
      image: 'https://www.eatwell101.com/wp-content/uploads/2020/12/Garlic-Butter-Baked-Salmon-recipe-4.jpg',
      url: 'https://example.com/baked-salmon',
    },
    {
      id: 28,
      name: 'Beef Stroganoff',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'beef', image: 'https://source.unsplash.com/50x50/?beef' },
        { name: 'mushroom', image: 'https://source.unsplash.com/50x50/?mushroom' },
        { name: 'onion', image: 'https://source.unsplash.com/50x50/?onion' },
        { name: 'sour cream', image: 'https://source.unsplash.com/50x50/?sour-cream' },
        { name: 'pasta', image: 'https://source.unsplash.com/50x50/?pasta' },
      ],
      description: 'Creamy beef stroganoff served over egg noodles.',
      image: 'https://www.gimmesomeoven.com/wp-content/uploads/2020/10/Beef-Stroganoff-Recipe-9-1100x1650.jpg',
      url: 'https://example.com/beef-stroganoff',
    },
    {
      id: 29,
      name: 'Egg Fried Rice',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'rice', image: 'https://source.unsplash.com/50x50/?rice' },
        { name: 'egg', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'peas', image: 'https://source.unsplash.com/50x50/?peas' },
        { name: 'soy sauce', image: 'https://source.unsplash.com/50x50/?soy-sauce' },
        { name: 'green onion', image: 'https://source.unsplash.com/50x50/?green-onion' },
      ],
      description: 'Quick and easy egg fried rice with vegetables.',
      image: 'https://i.pinimg.com/originals/34/cd/71/34cd71e4b10e0e66971b9f392e6359b7.jpg',
      url: 'https://example.com/egg-fried-rice',
    },
    {
      id: 30,
      name: 'French Toast',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'bread', image: 'https://source.unsplash.com/50x50/?bread' },
        { name: 'eggs', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'milk', image: 'https://source.unsplash.com/50x50/?milk' },
        { name: 'cinnamon', image: 'https://source.unsplash.com/50x50/?cinnamon' },
        { name: 'syrup', image: 'https://source.unsplash.com/50x50/?syrup' },
      ],
      description: 'Delicious French toast topped with syrup.',
      image: 'https://www.thespruceeats.com/thmb/nDwU5fBvUkU2sAkXe60Kmd0qyeo=/4048x2696/filters:fill(auto,1)/french-toast-481660-Hero-1-69d27bf922084a5a9b9b7fb680b082b2.jpg',
      url: 'https://example.com/french-toast',
    },
    {
      id: 31,
      name: 'Chocolate Chip Cookies',
      dietType: 'vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'flour', image: 'https://source.unsplash.com/50x50/?flour' },
        { name: 'butter', image: 'https://source.unsplash.com/50x50/?butter' },
        { name: 'sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
        { name: 'chocolate chips', image: 'https://source.unsplash.com/50x50/?chocolate' },
        { name: 'vanilla', image: 'https://source.unsplash.com/50x50/?vanilla' },
      ],
      description: 'Classic chocolate chip cookies that are soft and chewy.',
      image: 'https://www.spendwithpennies.com/wp-content/uploads/2022/04/Chocolate-Chip-Cookies-SpendWithPennies-2.jpg',
      url: 'https://example.com/chocolate-chip-cookies',
    },
    {
      id: 32,
      name: 'Roasted Vegetables',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'carrot', image: 'https://source.unsplash.com/50x50/?carrot' },
        { name: 'broccoli', image: 'https://source.unsplash.com/50x50/?broccoli' },
        { name: 'bell pepper', image: 'https://source.unsplash.com/50x50/?bell-pepper' },
        { name: 'olive oil', image: 'https://source.unsplash.com/50x50/?olive-oil' },
        { name: 'herbs', image: 'https://source.unsplash.com/50x50/?herbs' },
      ],
      description: 'A mix of seasonal vegetables roasted to perfection.',
      image: 'https://ifoodblogger.com/wp-content/uploads/2017/10/Scrumptious-Roasted-Vegetables-Recipe-N-2-.jpg',
      url: 'https://example.com/roasted-vegetables',
    },
    {
      id: 33,
      name: 'Tacos',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'tortilla', image: 'https://source.unsplash.com/50x50/?tortilla' },
        { name: 'ground beef', image: 'https://source.unsplash.com/50x50/?beef' },
        { name: 'lettuce', image: 'https://source.unsplash.com/50x50/?lettuce' },
        { name: 'tomato', image: 'https://source.unsplash.com/50x50/?tomato' },
        { name: 'cheese', image: 'https://source.unsplash.com/50x50/?cheese' },
      ],
      description: 'Delicious tacos filled with seasoned ground beef and fresh toppings.',
      image: 'https://www.samtell.com/hs-fs/hubfs/Blogs/Four-Scrumptous-Tacos-Lined-up-with-ingredients-around-them-1.jpg?width=1800&name=Four-Scrumptous-Tacos-Lined-up-with-ingredients-around-them-1.jpg',
      url: 'https://example.com/tacos',
    },
    {
      id: 34,
      name: 'BBQ Ribs',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'ribs', image: 'https://source.unsplash.com/50x50/?ribs' },
        { name: 'bbq sauce', image: 'https://source.unsplash.com/50x50/?bbq' },
        { name: 'salt', image: 'https://source.unsplash.com/50x50/?salt' },
        { name: 'pepper', image: 'https://source.unsplash.com/50x50/?pepper' },
        { name: 'herbs', image: 'https://source.unsplash.com/50x50/?herbs' },
      ],
      description: 'Tender BBQ ribs glazed with a tangy sauce.',
      image: 'https://delishar.com/wp-content/uploads/2013/08/Slow-Cooked-BBQ-Ribs-4.jpg',
      url: 'https://example.com/bbq-ribs',
    },
    {
      id: 35,
      name: 'Cobb Salad',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'lettuce', image: 'https://source.unsplash.com/50x50/?lettuce' },
        { name: 'chicken', image: 'https://source.unsplash.com/50x50/?chicken' },
        { name: 'bacon', image: 'https://source.unsplash.com/50x50/?bacon' },
        { name: 'egg', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'blue cheese', image: 'https://source.unsplash.com/50x50/?blue-cheese' },
      ],
      description: 'A hearty salad with chicken, bacon, and blue cheese.',
      image: 'https://www.herwholesomekitchen.com/wp-content/uploads/2021/02/cobbsaladrecipe-1-1024x1024.jpg',
      url: 'https://example.com/cobb-salad',
    },
    {
      id: 36,
      name: 'Greek Yogurt Parfait',
      dietType: 'vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'yogurt', image: 'https://source.unsplash.com/50x50/?yogurt' },
        { name: 'granola', image: 'https://source.unsplash.com/50x50/?granola' },
        { name: 'berries', image: 'https://source.unsplash.com/50x50/?berries' },
        { name: 'honey', image: 'https://source.unsplash.com/50x50/?honey' },
        { name: 'nuts', image: 'https://source.unsplash.com/50x50/?nuts' },
      ],
      description: 'A healthy parfait layered with yogurt, granola, and fresh berries.',
      image: 'https://windycitydinnerfairy.com/wp-content/uploads/2019/02/greekyogurtparfait-feature--e1649019028710.jpeg',
      url: 'https://example.com/greek-yogurt-parfait',
    },
    {
      id: 37,
      name: 'Baked Ziti',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'pasta', image: 'https://source.unsplash.com/50x50/?pasta' },
        { name: 'marinara sauce', image: 'https://source.unsplash.com/50x50/?sauce' },
        { name: 'cheese', image: 'https://source.unsplash.com/50x50/?cheese' },
        { name: 'ground beef', image: 'https://source.unsplash.com/50x50/?beef' },
        { name: 'herbs', image: 'https://source.unsplash.com/50x50/?herbs' },
      ],
      description: 'Comforting baked ziti with marinara sauce and cheese.',
      image: 'https://laurenslatest.com/wp-content/uploads/2021/01/baked-ziti-06.jpg',
      url: 'https://example.com/baked-ziti',
    },
    {
      id: 38,
      name: 'Pancakes',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'flour', image: 'https://source.unsplash.com/50x50/?flour' },
        { name: 'milk', image: 'https://source.unsplash.com/50x50/?milk' },
        { name: 'eggs', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'baking powder', image: 'https://source.unsplash.com/50x50/?baking-powder' },
        { name: 'syrup', image: 'https://source.unsplash.com/50x50/?syrup' },
      ],
      description: 'Fluffy pancakes served with maple syrup.',
      image: 'http://heartsonglive.co.uk/wp-content/uploads/2018/02/Pancake2-1024x672.jpg',
      url: 'https://example.com/pancakes',
    },
    {
      id: 39,
      name: 'Baked Apples',
      dietType: 'vegan',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'apples', image: 'https://source.unsplash.com/50x50/?apple' },
        { name: 'sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
        { name: 'cinnamon', image: 'https://source.unsplash.com/50x50/?cinnamon' },
        { name: 'butter', image: 'https://source.unsplash.com/50x50/?butter' },
        { name: 'nuts', image: 'https://source.unsplash.com/50x50/?nuts' },
      ],
      description: 'Warm baked apples with a sweet and cinnamon filling.',
      image: 'https://www.elizabethrider.com/wp-content/uploads/2020/09/Baked-Apples-Single.jpg',
      url: 'https://example.com/baked-apples',
    },
    {
      id: 40,
      name: 'Carrot Cake',
      dietType: 'non-vegetarian',
      isFavorite: false, // Initialize with false
      reviews: [],
      ingredients: [
        { name: 'flour', image: 'https://source.unsplash.com/50x50/?flour' },
        { name: 'carrots', image: 'https://source.unsplash.com/50x50/?carrot' },
        { name: 'sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
        { name: 'eggs', image: 'https://source.unsplash.com/50x50/?egg' },
        { name: 'cream cheese', image: 'https://source.unsplash.com/50x50/?cream-cheese' },
      ],
      description: 'Moist and flavorful carrot cake topped with cream cheese frosting.',
      image: 'https://www.cookingclassy.com/wp-content/uploads/2020/04/carrot-cake-20-1.jpg',
      url: 'https://www.edamam.com/results/recipe/?recipe=carrot-cake-with-cream-cheese-frosting-2aa887beda1083a3401db4368b505396/search=carrot+cake',
    },

    {
        id: 41,
        name: 'Paneer Butter Masala',
        dietType: 'vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Paneer', image: 'https://source.unsplash.com/50x50/?paneer' },
          { name: 'Butter', image: 'https://source.unsplash.com/50x50/?butter' },
          { name: 'Tomato', image: 'https://source.unsplash.com/50x50/?tomato' },
          { name: 'Cream', image: 'https://source.unsplash.com/50x50/?cream' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Rich and creamy paneer dish cooked in a tomato-based sauce.',
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg',
        url: 'https://www.example.com/paneer-butter-masala',
      },
      {
        id: 42,
        name: 'Chole Bhature',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Chickpeas', image: 'https://source.unsplash.com/50x50/?chickpeas' },
          { name: 'Flour', image: 'https://source.unsplash.com/50x50/?flour' },
          { name: 'Onions', image: 'https://source.unsplash.com/50x50/?onion' },
          { name: 'Tomatoes', image: 'https://source.unsplash.com/50x50/?tomato' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Spicy chickpeas served with deep-fried bread.',
        image: 'https://www.yumcurry.com/wp-content/uploads/2021/08/chole-bhature.jpg',
        url: 'https://www.example.com/chole-bhature',
      },
      {
        id: 43,
        name: 'Biryani',
        dietType: 'non-vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Rice', image: 'https://source.unsplash.com/50x50/?rice' },
          { name: 'Meat', image: 'https://source.unsplash.com/50x50/?meat' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
          { name: 'Saffron', image: 'https://source.unsplash.com/50x50/?saffron' },
          { name: 'Yogurt', image: 'https://source.unsplash.com/50x50/?yogurt' },
        ],
        description: 'Flavorful rice dish cooked with marinated meat and spices.',
        image: 'https://simmertoslimmer.com/wp-content/uploads/2022/11/Instant-Pot-Chicken-Biryani.jpeg',
        url: 'https://www.example.com/biryani',
      },
      {
        id: 44,
        name: 'Butter Chicken',
        dietType: 'non-vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Chicken', image: 'https://source.unsplash.com/50x50/?chicken' },
          { name: 'Butter', image: 'https://source.unsplash.com/50x50/?butter' },
          { name: 'Tomato', image: 'https://source.unsplash.com/50x50/?tomato' },
          { name: 'Cream', image: 'https://source.unsplash.com/50x50/?cream' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Tender chicken pieces in a creamy tomato sauce.',
        image: 'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg',
        url: 'https://www.example.com/butter-chicken',
      },
      {
        id: 45,
        name: 'Aloo Gobi',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Potatoes', image: 'https://source.unsplash.com/50x50/?potato' },
          { name: 'Cauliflower', image: 'https://source.unsplash.com/50x50/?cauliflower' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
          { name: 'Onions', image: 'https://source.unsplash.com/50x50/?onion' },
        ],
        description: 'A dry curry made with potatoes and cauliflower.',
        image: 'https://www.slimmingeats.com/blog/wp-content/uploads/2020/01/aloo-gobi-26.jpg',
        url: 'https://www.example.com/aloo-gobi',
      },
      {
        id: 46,
        name: 'Dal Makhani',
        dietType: 'vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],

        ingredients: [
          { name: 'Black Lentils', image: 'https://source.unsplash.com/50x50/?lentils' },
          { name: 'Butter', image: 'https://source.unsplash.com/50x50/?butter' },
          { name: 'Cream', image: 'https://source.unsplash.com/50x50/?cream' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Creamy black lentils cooked overnight for a rich flavor.',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg',
        url: 'https://www.example.com/dal-makhani',
      },
      {
        id: 47,
        name: 'Samosa',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],

        ingredients: [
          { name: 'Potatoes', image: 'https://source.unsplash.com/50x50/?potato' },
          { name: 'Peas', image: 'https://source.unsplash.com/50x50/?peas' },
          { name: 'Flour', image: 'https://source.unsplash.com/50x50/?flour' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Crispy pastry filled with spiced potatoes and peas.',
        image: 'https://myfoodstory.com/wp-content/uploads/2017/10/The-Best-Indian-Punjabi-Samosa-3.jpg?fit=1200,9999',
        url: 'https://www.example.com/samosa',
      },
      {
        id: 48,
        name: 'Palak Paneer',
        dietType: 'vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],

        ingredients: [
          { name: 'Spinach', image: 'https://source.unsplash.com/50x50/?spinach' },
          { name: 'Paneer', image: 'https://source.unsplash.com/50x50/?paneer' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
          { name: 'Onions', image: 'https://source.unsplash.com/50x50/?onion' },
        ],
        description: 'Creamy spinach curry with paneer cubes.',
        image: 'https://allwaysdelicious.com/wp-content/uploads/2019/10/palak-paneer-hero-1-2048x1365.jpg',
        url: 'https://www.example.com/palak-paneer',
      },
      {
        id: 49,
        name: 'Masala Dosa',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Rice', image: 'https://source.unsplash.com/50x50/?rice' },
          { name: 'Lentils', image: 'https://source.unsplash.com/50x50/?lentils' },
          { name: 'Potatoes', image: 'https://source.unsplash.com/50x50/?potato' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Crispy rice crepe filled with spiced potatoes.',
        image: 'https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa-1024x683.jpg',
        url: 'https://www.example.com/masala-dosa',
      },
      {
        id: 50,
        name: 'Rogan Josh',
        dietType: 'non-vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Lamb', image: 'https://source.unsplash.com/50x50/?lamb' },
          { name: 'Yogurt', image: 'https://source.unsplash.com/50x50/?yogurt' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Spicy lamb curry with aromatic spices.',
        image: 'http://cdn.shopify.com/s/files/1/2313/8987/articles/Rogan_Josh_01_copy_1200x1200.jpg?v=1625548245',
        url: 'https://www.example.com/rogan-josh',
      },
      {
        id: 51,
        name: 'Pav Bhaji',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Bread', image: 'https://source.unsplash.com/50x50/?bread' },
          { name: 'Mixed Vegetables', image: 'https://source.unsplash.com/50x50/?vegetables' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Spicy vegetable mash served with buttered bread.',
        image: 'https://www.cookwithkushi.com/wp-content/uploads/2016/10/best_mumbai_street_style_pav_bhaji_recipe.jpg',
        url: 'https://www.example.com/pav-bhaji',
      },
      {
        id: 52,
        name: 'Kadai Paneer',
        dietType: 'vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Paneer', image: 'https://source.unsplash.com/50x50/?paneer' },
          { name: 'Bell Peppers', image: 'https://source.unsplash.com/50x50/?bell-pepper' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
          { name: 'Onions', image: 'https://source.unsplash.com/50x50/?onion' },
        ],
        description: 'Stir-fried paneer with bell peppers and spices.',
        image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Best-Kadai-Paneer-Recipe.jpg',
        url: 'https://www.example.com/kadai-paneer',
      },
      {
        id: 53,
        name: 'Dhokla',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Chickpea Flour', image: 'https://source.unsplash.com/50x50/?chickpea' },
          { name: 'Yogurt', image: 'https://source.unsplash.com/50x50/?yogurt' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Steamed savory cake made from chickpea flour.',
        image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/article_1200_800_fallback/public/2020-12/dhokla%C2%A9iStock.jpg?itok=2DVCmwDV',
        url: 'https://www.example.com/dhokla',
      },
      {
        id: 54,
        name: 'Pani Puri',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Semolina', image: 'https://source.unsplash.com/50x50/?semolina' },
          { name: 'Potatoes', image: 'https://source.unsplash.com/50x50/?potato' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
          { name: 'Water', image: 'https://source.unsplash.com/50x50/?water' },
        ],
        description: 'Crispy hollow puris filled with spicy water.',
        image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Sweet__Spicy_Pineapple_Pani_Puri_Recipe_.jpg',
        url: 'https://www.example.com/pani-puri',
      },
      {
        id: 55,
        name: 'Khichdi',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Rice', image: 'https://source.unsplash.com/50x50/?rice' },
          { name: 'Lentils', image: 'https://source.unsplash.com/50x50/?lentils' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Comfort food made with rice and lentils.',
        image: 'https://www.funfoodfrolic.com/wp-content/uploads/2021/05/Dalia-Khichdi-Blog-Thumbnail-1024x1024.jpg',
        url: 'https://www.example.com/khichdi',
      },
      {
        id: 56,
        name: 'Tandoori Chicken',
        dietType: 'non-vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Chicken', image: 'https://source.unsplash.com/50x50/?chicken' },
          { name: 'Yogurt', image: 'https://source.unsplash.com/50x50/?yogurt' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'Marinated chicken grilled in a tandoor.',
        image: 'https://cdn.tasteatlas.com/images/social/733cd5be69a84534b648fca6ef98b2a2.jpg',
        url: 'https://www.example.com/tandoori-chicken',
      },
      {
        id: 57,
        name: 'Gulab Jamun',
        dietType: 'vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Milk Powder', image: 'https://source.unsplash.com/50x50/?milk' },
          { name: 'Flour', image: 'https://source.unsplash.com/50x50/?flour' },
          { name: 'Sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
          { name: 'Syrup', image: 'https://source.unsplash.com/50x50/?syrup' },
        ],
        description: 'Sweet, deep-fried dough balls soaked in syrup.',
        image: 'https://bolnews.s3.amazonaws.com/wp-content/uploads/2020/12/2-12.jpg',
        url: 'https://www.example.com/gulab-jamun',
      },
      {
        id: 58,
        name: 'Bhel Puri',
        dietType: 'vegan',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Puffed Rice', image: 'https://source.unsplash.com/50x50/?puffed-rice' },
          { name: 'Vegetables', image: 'https://source.unsplash.com/50x50/?vegetables' },
          { name: 'Chutneys', image: 'https://source.unsplash.com/50x50/?chutney' },
        ],
        description: 'A tangy snack made with puffed rice and vegetables.',
        image: 'https://i1.wp.com/vegecravings.com/wp-content/uploads/2018/06/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg?fit=1972%2C1874&quality=30&strip=all&ssl=1',
        url: 'https://www.example.com/bhel-puri',
      },
      {
        id: 59,
        name: 'Lassi',
        dietType: 'vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Yogurt', image: 'https://source.unsplash.com/50x50/?yogurt' },
          { name: 'Water', image: 'https://source.unsplash.com/50x50/?water' },
          { name: 'Sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
        ],
        description: 'A refreshing yogurt-based drink.',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2021/06/Salty-Lassi-676x1024.jpg',
        url: 'https://www.example.com/lassi',
      },
      {
        id: 60,
        name: 'Kheer',
        dietType: 'vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Rice', image: 'https://source.unsplash.com/50x50/?rice' },
          { name: 'Milk', image: 'https://source.unsplash.com/50x50/?milk' },
          { name: 'Sugar', image: 'https://source.unsplash.com/50x50/?sugar' },
          { name: 'Nuts', image: 'https://source.unsplash.com/50x50/?nuts' },
        ],
        description: 'Rice pudding made with milk and sugar.',
        image: 'https://api.vip.foodnetwork.ca/wp-content/uploads/2023/03/kheer-feat.jpg?w=3840&quality=75',
        url: 'https://www.example.com/kheer',
      },
      {
        id: 61,
        name: 'Pongal',
        dietType: 'vegetarian',
        isFavorite: false, // Initialize with false
      reviews: [],
        ingredients: [
          { name: 'Rice', image: 'https://source.unsplash.com/50x50/?rice' },
          { name: 'Lentils', image: 'https://source.unsplash.com/50x50/?lentils' },
          { name: 'Spices', image: 'https://source.unsplash.com/50x50/?spices' },
          { name: 'Ghee', image: 'https://source.unsplash.com/50x50/?ghee' },
        ],
        description: 'A comforting dish made with rice and lentils.',
        image: 'https://cdn.cdnparenting.com/articles/2020/01/13154311/612200891-H-1024x700.jpg',
        url: 'https://www.example.com/pongal',
      },
    
  ];
  export default recipesData;
