'use strict';

var payments = [
    {
        id: "1",
        name_payment: "Refined Granite Bacon",
        sum: "599.00",
        date: "2018-11-08T09:45:24.737Z",
        status_payment: false,
        client_payment: "Ebba Runolfsson",
        comment: "Bedfordshire"
    },
    {
        id: "2",
        name_payment: "Fantastic Plastic Table",
        sum: "914.00",
        date: "2018-11-22T01:15:55.541Z",
        status_payment: true,
        client_payment: "Kenyatta Mohr",
        comment: "Division deploy"
    },
    {
        id: "3",
        name_payment: "Sleek Fresh Shoes",
        sum: "777.00",
        date: "2019-06-04T04:43:38.152Z",
        status_payment: false,
        client_payment: "Abbie Ebert",
        comment: "Credit Card Account Tactics Cotton"
    },
    {
        id: "4",
        name_payment: "Rustic Metal Cheese",
        sum: "440.00",
        date: "2019-05-09T07:33:47.028Z",
        status_payment: true,
        client_payment: "Jerel Doyle",
        comment: "Interactions microchip sensor"
    },
    {
        id: "5",
        name_payment: "Tasty Frozen Tuna",
        sum: "84.00",
        date: "2019-02-21T21:35:57.303Z",
        status_payment: false,
        client_payment: "Ms. Christ Boyer",
        comment: "Legacy monitor Metal"
    }
    /*{
        author: 'Вася Пупкин',
        text: 'В четверг, четвёртого числа...',
        bigText: 'в четыре с четвертью часа четыре черненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Финансовый аналитик',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно! Скачать! Лучший в мире сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'

    }*/
];

window.ee = new EventEmitter();

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            name_payment: React.PropTypes.string.isRequired,
            sum: React.PropTypes.string.isRequired,
            date: React.PropTypes.string.isRequired,
            status_payment: React.PropTypes.string.isRequired,
            client_payment: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function() {
        return {
            visible: false,
        };
    },
    readmoreClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    render: function() {
        var name_payment = this.props.data.name_payment,
            sum = this.props.data.sum,
            date = this.props.data.date,
            status_payment = this.props.data.status_payment,
            client_payment = this.props.data.client_payment,
            comment = this.props.data.comment;
            //visible = this.state.visible;

            if (this.props.data.status_payment == true) {
                status_payment = 'Платеж завершен.'
            } else {
                status_payment = 'Платеж отклонен.'
            }
        return (
            <div className="article">
                <p className="name__payment">{name_payment}:</p>
                <p className="sum__payment">Сумма платежа: {sum} руб.</p>
                <p className="date__payment">Дата совершения платежа: {date}</p>
                <p className="status__payment">Статус платежа: {status_payment}</p>
                <p className="client__payment">Получатель платежа: {client_payment}</p>
                <p className="comment__payment">Комментарий: {comment}</p>
                {/*<a href="#" 
                   onClick={this.readmoreClick} 
                   className={'news__readmore ' + (visible ? 'none':'')}>
                   Подробнее
                </a>
                <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>*/}
            </div>
        )
    }
});

var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    getInitialState: function() {
        return {
            counter: 0
        }
    },
    render: function() {
        var data = this.props.data;
        var newsTemplate;
        
        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
            return (
                <div key={index}>
                    <Article data={item} />
                </div>
                )
        })
    } else {
        newsTemplate = <p>К сожалению совершенных платежей нет</p>
    }

        return (
            <div className="payments">
                {newsTemplate}
                <strong 
                    className={'payments__count ' + (data.length > 0 ? '':'none')}>
                    Всего платежей: {data.length}
                </strong>
            </div>
        );
    }
});
/*
var Add = React.createClass({
    getInitialState: function() { //устанавливаем начальное состояние (state)
        return {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
    },
    componentDidMount: function() { //ставим фокус в input
        ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onBtnClickHandler: function(e) {
        e.preventDefault();
        var textEl = ReactDOM.findDOMNode(this.refs.text);
        
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = textEl.value;
        
        var item = [{
            author: author,
            text: text,
            bigText: '...'
        }];

        window.ee.emit('News.add', item);

        textEl.value = '';
        this.setState({textIsEmpty: true});
    },
    onCheckRuleClick: function(e) {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked})   //Устанавливаем значение в state
    },    
    onFieldChange: function(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({[''+fieldName]:false})
        } else {
            this.setState({[''+fieldName]:true})
        }
    },
    render: function() {
        var agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty
        return (
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                    placeholder='Текст новости'
                    ref='text'
                ></textarea>
                <label className='add__checkrule'>
                    <input 
                        type='checkbox' 
                        ref='checkrule' 
                        onChange={this.onCheckRuleClick}/>
                            Я согласен с правилами
                </label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>
                    Добавить новость
                </button>
            </form>
        );
    }
});
*/
var App = React.createClass({
    getInitialState: function() {
        return {
            news: payments
        };
    },
/*    componentDidMount: function() {
        /* Слушай собтие "Создана новость"
        если событие произошло, обнови this.state.news*/
/*        var self = this;
        window.ee.addListener('News.add', function(item) {
            var nextNews = item.concat(self.state.news);
            self.setState({news: nextNews});
        });
    },
    componentWillUnmount: function() {
        /* Больше не слушай событие "Созданан новость" */
/*        window.ee.removeListener('News.add');
    },*/
    render: function() {
        console.log('render');
        return (
            <div className="app">
                {/*<Add />*/}
                <h3>Список платежей</h3>
                <News data={this.state.news} /> {/* Добавили свойство data */}
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);