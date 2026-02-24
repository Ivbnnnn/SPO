# Архитектура фронтенда

       Архитектура фронтенда
# Стек:
 - react
 - react-router-dom
 - react-reader
 - vite
 - tailwind v4+
# Строение проекта:
comps/
    sessionsComps/
        sessionItem.jsx
    profileComps/
        profileCard.jsx
    libraryComps/
        LibraryBook.jsx
    mainComps/
        Card.jsx
        ContinueCard.jsx
        Header.jsx
        NavAside.jsx
        Note.jsx
    readerComps/
        ReaderAside.jsx
        ReaderHeader.jsx
        ReaderModal.jsx (модальное окно с полями страница и текст для добавления заметки/цитаты)
        ReaderNote.jsx
    UI/
        Progressbar.jsx
pages/
    SessionsView.jsx
    ProfileView.jsx
    LibraryView.jsx
    MainView.jsx
    ReaderView.jsx

App.jsx (router)
routes:
    -/ (MainView.jsx)
    -/library (LibraryView.jsx)
    -/reader (ReaderView.jsx)
    -/profile (ProfileView.jsx)
    -/sessions (SessionsView.jsx)

Работа с заметками происходит следующим образом:
Парситься 2 файла notes.json phrazes.json, загружаются в loacalStorage "notes", "phrazes", далее работа с добавлением удалением идет с помощью localStorage, этап с файлами нужен на тестовом этапе, чтобы хоть какие-то начальные данные присутствовали.
Работа с просмотром книги на ReaderView работает следующим образом:
Создается состояние page, rendition. Page отвечает за простой счетчик текущей страницы, rendition это стейт для управление React-reader с помощью внешних кнопок Вперёд и Назад. Подобная реализация обуславливается тем, что попытка вызова изменения состояния page изнутри react-reader приводит к консольной ошибке sandbox (типичная ошибка для iframe)

# Ограничения текущей архитектуры
## нет бекенда - в reader доступна лишь одна книга и способов загрузки новых книг не предусмотрено
## страницы Главная, Сессии, Профиль и Библиотека не содержат функционала
