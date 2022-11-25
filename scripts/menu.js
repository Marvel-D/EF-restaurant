const foodMenu = document.querySelector('.menu_list')
const menu = [
    {
        src: "/img/dish-1 1.png",
        name: "Lumpia with sauce",
        details: {
            features: 'sfrrrrrrrssds',
            price: '500'
        }
    },
    {
        src: "/img/dish-3 1.png",
        name: "Lumpia with sauce",
        details: {
            features: 'fgks2ds',
            price: '500'
        }
    },
]

DisplayMenu()
function DisplayMenu() {
    console.log(menu);

    menu.forEach(ele => {
        console.log(ele.details.features);
        var li = document.createElement('li')
        li.className = 'item'

        var itemImg = document.createElement('img')
        itemImg.src = ele.src
        itemImg.className = 'item_img'


        li.appendChild(itemImg)


        foodMenu.appendChild(li)

    })
    console.log(foodMenu.innerHTML);



}







