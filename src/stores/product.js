import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
    const products = ref([
        {
            id: 1,
            name: 'Banana',
            img: 'https://greenspoon.co.ke/wp-content/uploads/2021/11/Greenspoon-Kwik-Basket-Sweet-Banana.jpg',
            price: 15,
            description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large treelike herbaceous flowering plants in the genus Musa. In some countries, cooking bananas are called plantains, distinguishing them from dessert bananas.',
            publish_at: '27.11.2024',
            category: 'fruits',
        },
        {
            id: 2,
            name: 'Apple',
            img: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/article_1200_800_fallback/public/2021-10/best-apples%C2%A9iStock.jpg?itok=xvBiRvy1',
            price: 10,
            description: 'An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples have been grown for thousands of years in Eurasia and were introduced to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.',
            publish_at: '27.11.2024',
            category: 'fruits',
        },
        {
            id: 3,
            name: 'Passion fruit',
            img: 'https://www.grozny-inform.ru/LoadedImages/2024/01/20/1677474656_3-26_w900_h600.jpg',
            price: 25,
            description: 'A passion fruit is a small, round, brown fruit that is produced by certain types of tropical flower.',
            publish_at: '27.11.2024',
            category: 'fruits',
        },
        {
            id: 4,
            name: 'Kiwi',
            img: 'https://i.pinimg.com/originals/bd/96/09/bd9609418c69c6edf65c2c351dd4f57b.jpg',
            price: 17,
            description: 'kiwi is fruit',
            publish_at: '27.11.2024',
            category: 'fruits',
        },
        {
            id: 5,
            name: 'Water melon',
            img: 'https://avatars.mds.yandex.net/i?id=3bc4c225a5c2881bfce95815f0f90639_l-5916170-images-thumbs&n=13',
            price: 7,
            description: 'water melon is good',
            publish_at: '27.11.2024',
            category: 'berries',
        },
        {
        id: 6,
            name: 'Potato',
            img: 'https://posyltorg33.ru/upload/iblock/bdc/bdc6765987ae2f66379fa6d7451915e1.jpg',
            price: 5,
            description: 'potato is good',
            publish_at: '27.11.2024',
            category: 'vegetables',
        },
        {
            id: 7,
            name: 'Blueberry',
            img: 'https://ogodacha.ru/images/big-images/plodovye-derevya-i-kusty/golybika/obrabotka-golubiki-ot-boleznej-vesnoj/golubika-na-vetke.jpg',
            price: 12,
            description: 'blueberry is good',
            publish_at: '27.11.2024',
            category: 'berries',
        },
        {
            id: 8,
            name: 'Cabbege',
            img: 'https://avatars.mds.yandex.net/i?id=5b4378790ce38b1f07f92cd2db54f181_l-5167594-images-thumbs&n=13',
            price: 7,
            description: 'cabbage is good',
            publish_at: '27.11.2024',
            category: 'vegetables',
        },
    ]);

    const filterProductsByCategoryName = computed(() => {
        return (category, search) => {
            if (category) {
                return products.value.filter((product)  => product.category == category);
            }
            if (search) {
                return products.value.filter((product) => product.name.includes(search));
            }
            return products.value;
        }
    });







    return {
        products,
        filterProductsByCategoryName,
    }

});