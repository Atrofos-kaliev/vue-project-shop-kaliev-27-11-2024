import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
    const products = ref([
        {
            id: 1,
            name: 'Banana',
            img: 'https://greenspoon.co.ke/wp-content/uploads/2021/11/Greenspoon-Kwik-Basket-Sweet-Banana.jpg',
            price: 15,
            description: 'A banana is a long, curved fruit with a yellow peel and soft, sweet flesh inside. It comes from the *Musa* plant and is typically grown in tropical regions. Bananas are a popular snack and are known for their high potassium content. They are also used in various recipes, smoothies, and desserts.',
            publish_at: '27.11.2024',
            category: 'fruits',
        },
        {
            id: 2,
            name: 'Apple',
            img: 'https://klike.net/uploads/posts/2022-09/1662040166_j-6.jpg',
            price: 10,
            description: 'An apple is a round fruit that grows on apple trees (*Malus domestica*). It typically has a firm, crisp texture and a sweet to tart flavor, depending on the variety. Apples come in a range of colors, including red, green, yellow, and mixed hues. They are widely consumed fresh, used in cooking, or made into juices, sauces, and desserts like apple pie. Apples are a good source of fiber, vitamins, and antioxidants.',
            publish_at: '27.11.2024',
            category: 'fruits',
        },
        {
            id: 3,
            name: 'Passion fruit',
            img: 'https://www.grozny-inform.ru/LoadedImages/2024/01/20/1677474656_3-26_w900_h600.jpg',
            price: 25,
            description: 'Passion fruit is a round, colorful fruit with a tough outer rind and a juicy, seed-filled interior. It comes from the *Passiflora* vine and is typically purple or yellow in color, depending on the variety. Inside, it has a unique, aromatic pulp filled with black seeds. The taste is a combination of sweet and tart, and it’s commonly used in drinks, smoothies, desserts, or eaten fresh. Passion fruit is rich in vitamins A and C, fiber, and antioxidants.',
            publish_at: '27.11.2024',
            category: 'fruits',
        },
        {
            id: 4,
            name: 'Kiwi',
            img: 'https://i.pinimg.com/originals/bd/96/09/bd9609418c69c6edf65c2c351dd4f57b.jpg',
            price: 17,
            description: 'A kiwi, also known as **kiwifruit**, is a small, oval-shaped fruit with fuzzy brown skin and bright green flesh inside. It contains tiny black seeds arranged in a circular pattern. The taste of kiwi is sweet and tangy, with a slightly acidic flavor. It is rich in vitamin C, fiber, antioxidants, and other nutrients. Kiwis are typically eaten raw, either on their own or added to salads, smoothies, and desserts. The skin is edible but is usually peeled before eating due to its texture.',
            publish_at: '27.11.2024',
            category: 'fruits',
        },
        {
            id: 5,
            name: 'Watermelon',
            img: 'https://avatars.mds.yandex.net/i?id=3bc4c225a5c2881bfce95815f0f90639_l-5916170-images-thumbs&n=13',
            price: 7,
            description: 'A watermelon is a large, sweet, juicy fruit with a green rind and a bright red or pink interior. It contains many black or white seeds, although seedless varieties are also available. The flesh is high in water content, making it very hydrating, and it has a mildly sweet flavor with a refreshing taste. Watermelons are commonly eaten fresh, in salads, or as juice, especially during hot weather. They are rich in vitamins A and C, as well as antioxidants like lycopene, which may offer various health benefits.',
            publish_at: '27.11.2024',
            category: 'berries',
        },
        {
        id: 6,
            name: 'Potato',
            img: 'https://posyltorg33.ru/upload/iblock/bdc/bdc6765987ae2f66379fa6d7451915e1.jpg',
            price: 5,
            description: 'A potato is a starchy tuber that grows underground, produced by the plant *Solanum tuberosum*. It has a brown, rough skin and white, yellow, or purple flesh, depending on the variety. Potatoes are one of the most widely consumed vegetables in the world and are incredibly versatile in cooking. They can be boiled, baked, mashed, fried, or roasted, and are often used in dishes like mashed potatoes, fries, and stews. Potatoes are a good source of carbohydrates, vitamin C, and potassium.',
            publish_at: '27.11.2024',
            category: 'vegetables',
        },
        {
            id: 7,
            name: 'Blueberry',
            img: 'https://ogodacha.ru/images/big-images/plodovye-derevya-i-kusty/golybika/obrabotka-golubiki-ot-boleznej-vesnoj/golubika-na-vetke.jpg',
            price: 12,
            description: 'A blueberry is a small, round fruit that is typically blue or purple in color. It grows on shrubs of the *Vaccinium* genus and is known for its sweet, slightly tart flavor. Blueberries are often eaten fresh, added to smoothies, or used in baked goods like muffins and pies. They are also commonly found in jams and juices. Blueberries are packed with antioxidants, particularly anthocyanins, which give them their blue color, and they are a good source of vitamin C, vitamin K, and fiber.',
            publish_at: '27.11.2024',
            category: 'berries',
        },
        {
            id: 8,
            name: 'Cabbege',
            img: 'https://avatars.mds.yandex.net/i?id=5b4378790ce38b1f07f92cd2db54f181_l-5167594-images-thumbs&n=13',
            price: 7,
            description: 'Cabbage is a leafy green, red, or white vegetable that belongs to the Brassica family, which also includes broccoli, cauliflower, and kale. It has a dense, round head formed by tightly packed leaves. Cabbage can be eaten raw, such as in salads or coleslaw, or cooked in various dishes like soups, stews, and stir-fries. It is low in calories and a good source of vitamins C and K, fiber, and antioxidants. Cabbage is also known for its health benefits, including supporting digestion and reducing inflammation.',
            publish_at: '27.11.2024',
            category: 'vegetables',
        },
    ]);

    const filterProductsByCategoryName = computed(() => {
        return (category, search) => {
            if (category) {
                return products.value.filter((product) => product.category === category);
            }
            if (search) {
                return products.value.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
            }
            return products.value;
        };
    });
    return {
        products,
        filterProductsByCategoryName,
    }
});