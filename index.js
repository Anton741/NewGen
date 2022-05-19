// 1) Проверяем чтобы оба значения не были равны null, в даном случае нам нужно фильтровать по min и max значениям
// 2) Далее расматриваем варианты когда пользователь задает только один параметр фильтрации и отфильтровываем по нему
// 3) Курсы, у которых нет значения цены будут всегда в поисковой выдачи 

let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filterCourseByPrice = (courses, [minPrice, maxPrice]) => {
  return courses.filter(course => {
    if (!course.prices.includes(null)) {
      return course.prices[0] >= minPrice && course.prices[1] <= maxPrice;
    }
    if (course.prices[0] === null) {
      return course.prices[1] <= maxPrice
    }
    return course.prices[0] >= minPrice
  })
}




