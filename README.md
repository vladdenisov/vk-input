# Тестовое задание

[Посмотреть результат](https://vk-input.vercel.app/)

## Реализованный функционал

- Поле ввода сообщения
- Подсветка ссылок и хэштегов и т.д.
- Интерфейс выбора эмодзи
- Список недавно использованных эмодзи
- Перенос строки на Shift + Enter
- Открытие интерфейса выбора эмодзи на Shift + Tab
- "Отправка" сообщения на Enter (см. консоль)

## Проблемы, с которыми я столкнулся

- При разработке подсветки ссылок и хэштегов, появилось огромное количество багов связанных с переносом строки и сохранением положения курсора в поле ввода
- Некоторые баги удалось исправить только для некоторых браузеров (см. [таблицу совместимости](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType))

## Скрипты для запуска
### `yarn start`

Запуск в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000).

### `yarn build`

Сборка приложения.

## Создано при помощи:

* [ReactJS](https://ru.reactjs.org/) - JavaScript-библиотека для создания пользовательских интерфейсов

