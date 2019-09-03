var my_news = [
    /*{
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
    }*/
];


var Article = React.createClass({
    render: function() {
        var author = this.props.data.author,
            text = this.props.data.text;

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
            </div>
        )
    }
});

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplates;
        
        if (data.length > 0) {
            newsTemplates = data.map(function(item,index) {
            return (
                <div key={index}>
                    <Article data={item} />
                </div>
                )
        })
    } else {
        newsTemplates = <p>К сожалению новостей нет</p>
    }

        return (
            <div className="news">
                {newsTemplates}
                <strong className={'news__count ' + (data.length > 0 ? '':'none')}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <News data={my_news} /> {/* Добавили свойство data */}
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);