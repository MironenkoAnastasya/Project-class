import { Alert, Box, Button } from "@mui/material";
import { useCreateArticleMutation, useGetArticlesQuery, useUpdateArticleMutation } from "../assets/api/articlesApi";
import { Link } from "react-router-dom";







const Home = () => {
    const { data, isLoading, isError } = useGetArticlesQuery();
    const [createArticle, { isLoading: isCreating }] = useCreateArticleMutation();
    const [updateArticle] = useUpdateArticleMutation();

    if (isLoading) {
        return <Box>Loading...</Box>;
    }
    if (isError) {
        return <Alert severity="error">Error fetching articles</Alert>;
    }

    const articles = data?.data || [];
    
    const handlerCreate = () => {
        createArticle({
            title: 'New Article 3',
            content: 'This is a new article 3'
        });
    }

    const handllerUpdate = () => {
        updateArticle({
            id: 1,
            title: 'New Article 1',
            content: 'This is a new article 1'
        });
    }

    const fruits=['apple', 'banana', 'orange', 'kiwi', 'grape']

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,

};

const FAQ = [
  { id: 1, q: 'Що таке React?', a: 'Бібліотека для UI' },
  { id: 2, q: 'Що таке хук?', a: 'Функція з use...' },
  { id: 3, q: 'Що таке JSX?', a: 'Синтаксичний цукор' },
]
 
const numbers = [10, 25, 50, 100];


const products = [
  { id: 1, title: "Смартфон", count: 5 },
  { id: 2, title: "Ноутбук", count: 0 },
  { id: 3, title: "Наушники", count: 12 },
  { id: 4, title: "Клавиатура", count: 0 }
];

const courses = [
  { id: "js-basic", title: "JavaScript Базовый", teacher: "Иван" },
  { id: "react-pro", title: "React для Профи", teacher: "Алексей" },
  { id: "html-css", title: "HTML & CSS Верстка", teacher: "Мария" }
];

const orders = [
  { id: "ord-101", item: "Кроссовки", delivered: true },
  { id: "ord-102", item: "Куртка", delivered: false },
  { id: "ord-103", item: "Кепка", delivered: true },
  { id: "ord-104", item: null, delivered: false } // <-- Ой, тут вместо названия прилетел null!
];

const clothes = [
  { id: "cl-1", title: "Куртка зимняя", isNew: false },
  { id: "cl-2", title: "Футболка белая", isNew: true },
  { id: "cl-3", title: "Худи оверсайз", isNew: true },
  { id: "cl-4", title: "Носки махровые", isNew: false }
];


const workouts = ["Разминка", "Приседания со штангой", "Выпады", "Планка"];

const waterHistory = [
  { id: "w-1", amount: 200, time: "08:15" },
  { id: "w-2", amount: 300, time: "11:30" },
  { id: "w-3", amount: 500, time: "15:45" }
];

const glassesList = [
  { id: 1, name: "Стильные базовые очки", price: 60 },
  { id: 2, name: "Брендовые солнцезащитные очки", price: 160 }
];

const shops = [
  { id: 1, name: "Zara" },
  { id: 2, name: "Bershka" },
  { id: 3, name: "Stradivarius" }
];

const books = [
  { id: 1, title: "Мастер и Маргарита", isRead: true },
  { id: 2, title: "Шерлок Холмс", isRead: true },
  { id: 3, title: "Загадка Эндхауза", isRead: false },
  { id: 4, title: "Позже", isRead: false }
];

const playlist = [
  { id: 1, title: "Симфония ветра (Флейта и скрипка)", genre: "orchestral" },
  { id: 2, title: "Летний хит 2026", genre: "pop" },
  { id: 3, title: "Танец струн (Арфа)", genre: "orchestral" },
  { id: 4, title: "Ритмы ночи", genre: "pop" }
];

const accessories = [
  { id: 1, title: "Черная сумка Zara" },
  { id: 2, title: "Широкополая шляпа" },
  { id: 3, title: "Мини-сумка на цепочке" },
  { id: 4, title: "Кожаный ремень" } // искусственная кожа, конечно же! ;)
];




// Строка поиска (как будто пользователь ввёл её в поисковую строку)
const searchQuery = "сумка";
    return (
        <div>
            <h1>Home</h1>


            <div>
                <h2>Результаты поиска</h2>
                <ul>
                   {accessories
                    .filter((accessary) => accessary.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((accessary) => (
                        <li key={accessary.id}>
                        {accessary.title}
                        </li>
                    ))
                    }
                </ul>
            </div>

        <div>
            <ul>
                {shops.map((shop, index) => (
                    <li key={index}>
                        {shop.name}
                    </li>
                ))}
            </ul>
        </div>


            <div>
                <h2>Фильмы</h2>
                <ul>
                    {playlist.filter((track) => track.genre === "orchestral")
                    .map((track) => (
                        <li key={track.id}>{track.title}</li>
                    ))}
                </ul>
            </div>




        <div>
            <h2>Книги</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        {book.title} {book.isRead ? "Прочитано" : "Не прочитано"}
                    </li>
                ))}
            </ul>
        </div>
        


        <div>
            <h2>История воды</h2>
            <ul>
                {waterHistory.map((item) => (
                    <li>{item.amount} ml в {item.time}</li>
                ))}
            </ul>
        </div>

            {workouts.map((workout, index) => (
                <li key={index}>{workout}</li>
            ))}



            {clothes.filter((item) => item.isNew === true)
            .map(item => (
            <li key={item.id}>{item.title}
            </li>
        ))}

            {orders.map((order) => (
                <li key={order.id}>
                {order.item ?? "Товар поврежден"} {order.delivered ? "Доставлено" : "Не доставлено"}
                
                </li>
            ))}


            {courses.map((course) => (
                <li key={course.id}>
                    предмет {course.title} учитель {course.teacher}
                </li>
            ))}




            {FAQ.map(item => <div><h3>{item.q}</h3><div>{item.a}</div></div>)}
            <p>{user.name}</p>
            <img src='https://i.imgur.com/yXOvdOSs.jpg' style={{width: '90px', height: '90px', borderRadius: '50%'}}></img>


            {numbers.map((num, index) => (
            <li key={index}>
            {num * 40} грн
            </li>
            ))}


            {products.map(product =>
            <li key={product.id}>
            {product.title} {product.count === 0 ? "Нет в наличии" : "В наличии" }
            </li>
            )}

            <p>Фрукт: {fruits.map (fruit => <li>{fruit}</li>)}</p>
            <Button variant="contained" onClick={handlerCreate} disabled={isCreating}>Create Article</Button>
            <Button variant="contained" onClick={handllerUpdate} disabled={isCreating}>Update Article</Button>
            
            {articles.map((article: any) => (
                <div key={article.id}>
                    <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
                    <p>{article.content}</p>
                </div>
            ))}

            <div className="list-one" style={{ backgroundColor: 'blue', border: '1px solid '}}>
                <h1>{FAQ[0].q}</h1>
            </div>
            <div className="list-two" style={{ backgroundColor: 'white', border: '3px solid '}}>
                <p>{FAQ.map(faq => <li>{faq.a}</li>)}</p>
            </div>
        </div>
    );
}

export default Home;



