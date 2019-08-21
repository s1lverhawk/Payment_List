var my_news = [
    {
        author: 'Вася Пупкин',
        text: 'В четверг, четвёртого числа...'
    },
    {
        author: 'Финансовый аналитик',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно! Скачать! Лучший в мире сайт - http://localhost:3000'
    }
];



var Comments = React.createClass({
    render: function() {
        return (
            <div className="comments">
                Нет новостей - комментировать нечего.
            </div>
        );
    }
})


var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplates = data.map(function(item,index) {
            return (
                <div key={index}>
                    <p className="news__author">{item.author}:</p>
                    <p className="news__text">{item.text}</p>
                </div>
                )
        })

        return (
            <div className="news">
                {newsTemplates}
            </div>
        );
    }
})


var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем привет, я компонент App! Я умею отображать новости.
                <News data={my_news} /> {/* Добавили свойство data */}
                <Comments />
            </div>
        );
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);