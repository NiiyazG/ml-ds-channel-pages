// Navigation bar injected into lesson pages
(function(){
  if(document.querySelector('.top-nav-injected')) return;

  var nav = document.createElement('nav');
  nav.className = 'top-nav top-nav-injected';
  nav.innerHTML = '<div class="logo">ML и анализ данных по-человечески</div>' +
    '<div class="nav-links">' +
    '<div class="search-wrap">' +
    '<span class="search-icon">🔍</span>' +
    '<input type="text" id="searchInput" placeholder="Поиск уроков..." autocomplete="off">' +
    '</div>' +
    '<a href="../../" class="active">Главная</a>' +
    '<a href="../../profile/">Обо мне</a>' +
    '<a href="https://t.me/ML_DS_one" class="tg-btn" target="_blank">Телеграм-канал</a>' +
    '</div>';

  var first = document.body.firstChild;
  document.body.insertBefore(nav, first);

  // Styles
  var style = document.createElement('style');
  style.textContent = '.top-nav-injected{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;width:100%;margin:0;position:sticky;top:0;z-index:100;background:rgba(10,10,18,.7);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}' +
    '.top-nav-injected .logo{font-weight:800;font-size:1.15rem;background:linear-gradient(135deg,#3481B8,#2673A8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-.03em}' +
    '.top-nav-injected .nav-links{display:flex;gap:8px;align-items:center}' +
    '.top-nav-injected .nav-links a,' +
    '.top-nav-injected .nav-links .tg-btn{color:#9898b0;text-decoration:none;font-size:.85rem;font-weight:500;padding:6px 14px;border-radius:8px;transition:all .2s}' +
    '.top-nav-injected .nav-links a:hover,' +
    '.top-nav-injected .nav-links .tg-btn:hover{color:#e8e8f0;background:rgba(255,255,255,.05)}' +
    '.top-nav-injected .nav-links a.active{color:#fff;background:rgba(21,72,137,.15)}' +
    '.top-nav-injected .search-wrap{position:relative;margin-right:8px}' +
    '.top-nav-injected .search-wrap input{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:6px 12px 6px 32px;font-size:.78rem;color:#e8e8f0;width:160px;outline:none;transition:all .2s;font-family:inherit}' +
    '.top-nav-injected .search-wrap input::placeholder{color:#585870}' +
    '.top-nav-injected .search-wrap input:focus{border-color:rgba(52,129,184,.4);background:rgba(255,255,255,.08);width:200px}' +
    '.top-nav-injected .search-wrap .search-icon{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#585870;font-size:.72rem;pointer-events:none}';

  document.head.appendChild(style);

  // Lesson navigation links
  var navBlock = document.createElement('div');
  navBlock.style.cssText = 'max-width:1200px;margin:40px auto 0;padding:20px 24px 0;';
  navBlock.innerHTML = '<div style="font-size:.85rem;font-weight:700;color:#e8e8f0;margin-bottom:12px">📚 Все уроки курса</div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:6px 12px">' +
    lessons.map(function(l){
      return '<a href="'+l.url+'" style="color:#9898b0;text-decoration:none;font-size:.78rem;padding:2px 0;border-bottom:1px solid transparent;transition:all .2s" onmouseover="this.style.color=\'#3481B8\';this.style.borderBottomColor=\'#3481B8\'" onmouseout="this.style.color=\'#9898b0\';this.style.borderBottomColor=\'transparent\'">' +
        '<span style="color:#3481B8;font-weight:600">Урок '+l.n+'</span> — '+l.title+
      '</a>';
    }).join('') +
    '</div>';
  document.body.appendChild(navBlock);

  // Add copyright footer
  var footer = document.createElement('div');
  footer.style.cssText = 'max-width:1200px;margin:0 auto;padding:20px 24px 40px;display:flex;flex-wrap:wrap;align-items:baseline;gap:12px;border-top:1px solid rgba(255,255,255,.06)';
  footer.innerHTML = '<span style="font-size:.75rem;font-weight:400;color:#ffffff;opacity:.45">© Гарипов Нияз Варисович</span>' +
    '<a href="https://t.me/ML_DS_one" style="font-size:.72rem;color:#3481B8;text-decoration:none" target="_blank">https://t.me/ML_DS_one</a>';
  document.body.appendChild(footer);

  // Search functionality
  var lessons = [
    {n:1,title:'Что такое анализ данных и зачем он нужен',url:'../../lessons/001-тема-1-что-такое-анализ-данных-и-зачем-он-нужен/'},
    {n:2,title:'Что такое машинное обучение простыми словами',url:'../../lessons/002-тема-2-что-такое-машинное-обучение-простыми-словами/'},
    {n:3,title:'Типы данных: количественные и качественные',url:'../../lessons/003-тема-3-типы-данных-количественные-и-качественные/'},
    {n:4,title:'Какие задачи решают данные в бизнесе',url:'../../lessons/004-тема-4-какие-задачи-решают-данные-в-бизнесе/'},
    {n:5,title:'Полный цикл работы с данными',url:'../../lessons/005-тема-5-полный-цикл-работы-с-данными/'},
    {n:6,title:'Меры центральной тенденции',url:'../../lessons/006-урок-6-меры-центральной-тенденции/'},
    {n:7,title:'Меры разброса',url:'../../lessons/007-урок-7-меры-разброса/'},
    {n:8,title:'Ковариация и корреляция',url:'../../lessons/008-урок-8-ковариация-и-корреляция/'},
    {n:9,title:'Структурированные и неструктурированные данные',url:'../../lessons/009-урок-9-структурированные-и-неструктурированные-данные/'},
    {n:10,title:'Как мыслит аналитик и ML-специалист, ошибки новичков',url:'../../lessons/010-урок-10-как-мыслит-аналитик-и-ml-специалист-ошибки-новичков/'},
    {n:11,title:'Среднее, медиана, мода',url:'../../lessons/011-урок-11-среднее-медиана-мода/'},
    {n:12,title:'Дисперсия и стандартное отклонение',url:'../../lessons/012-урок-12-дисперсия-и-стандартное-отклонение/'},
    {n:13,title:'Проценты, доли, темпы роста',url:'../../lessons/013-урок-13-проценты-доли-темпы-роста/'},
    {n:14,title:'Распределения и зачем они нужны',url:'../../lessons/014-урок-14-распределения-и-зачем-они-нужны/'},
    {n:15,title:'Нормальное распределение',url:'../../lessons/015-урок-15-нормальное-распределение/'},
    {n:16,title:'Центральная предельная теорема',url:'../../lessons/016-урок-16-центральная-предельная-теорема/'},
    {n:17,title:'Корреляция',url:'../../lessons/017-урок-17-корреляция/'},
    {n:18,title:'Причинность и почему её часто путают с корреляцией',url:'../../lessons/018-урок-18-причинность-и-почему-е-часто-путают-с-корреляцией/'},
    {n:19,title:'Вероятность для аналитика',url:'../../lessons/019-урок-19-вероятность-для-аналитика/'},
    {n:20,title:'Условная вероятность',url:'../../lessons/020-урок-20-условная-вероятность/'},
    {n:21,title:'Байесово мышление',url:'../../lessons/021-урок-21-байесово-мышление/'},
    {n:23,title:'Логистическая регрессия',url:'../../lessons/023-урок-23-логистическая-регрессия/'},
    {n:24,title:'Decision Tree — дерево решений',url:'../../lessons/024-1-урок-24-1-decision-tree-или-дерево-решений-как-модель-принимает-решения/'},
    {n:25,title:'Random Forest — случайный лес',url:'../../lessons/025-урок-25-random-forest-или-случайный-лес/'},
    {n:26,title:'Bagging — как уменьшать случайные ошибки',url:'../../lessons/026-урок-26-bagging-как-уменьшать-случайные-ошибки-модели/'},
    {n:27,title:'Выбросы',url:'../../lessons/027-урок-27-выбросы/'},
    {n:28,title:'Пропущенные значения (missing values)',url:'../../lessons/028-урок-28-пропущенные-значения-missing-values/'},
    {n:29,title:'Нормализация и масштабирование',url:'../../lessons/029-урок-29-нормализация-и-масштабирование/'},
    {n:30,title:'Переобучение — когда модель зубрит',url:'../../lessons/030-урок-30-переобучение-это-когда-модель-зубрит/'},
    {n:31,title:'Недообучение — когда модель не уловила основу',url:'../../lessons/031-урок-31-недообучение-это-когда-модель-не-уловила-даже-основу/'},
    {n:32,title:'Регуляризация — когда модели не дают разгуляться',url:'../../lessons/032-урок-32-регуляризация-это-когда-модели-не-дают-разгуляться/'},
    {n:33,title:'Валидация — защита от самообмана',url:'../../lessons/033-1-урок-33-1-валидация-это-защита-от-самообмана/'},
    {n:34,title:'Качество данных — бьёт магию модели',url:'../../lessons/034-урок-34-качество-данных-бь-т-магию-модели/'},
    {n:35,title:'Разведочный анализ',url:'../../lessons/035-урок-35-разведочный-анализ/'},
    {n:36,title:'Одномерный анализ',url:'../../lessons/036-урок-36-одномерный-анализ-это-когда-ты-изучаешь-один-столбец-по-настоящему/'},
    {n:37,title:'Двумерный анализ',url:'../../lessons/037-урок-37-двумерный-анализ-это-момент-когда-данные-начинают-показывать-отношения/'},
    {n:38,title:'Гистограмма, boxplot, scatterplot',url:'../../lessons/038-урок-38-гистограмма-histogram-ящик-с-усами-boxplot-и-диаграмма-рассеяния-scatterplot-это-быстрый-спо/'},
    {n:39,title:'Тепловые карты и корреляции',url:'../../lessons/039-урок-39-тепловые-карты-и-корреляции/'},
    {n:40,title:'Как искать закономерности',url:'../../lessons/040-урок-40-как-искать-закономерности/'},
    {n:41,title:'Как замечать странности в данных',url:'../../lessons/041-урок-41-как-замечать-странности-в-данных/'},
    {n:42,title:'Формулировка первых гипотез',url:'../../lessons/042-урок-42-формулировка-первых-гипотез/'},
    {n:43,title:'Как превращать графики в выводы',url:'../../lessons/043-урок-43-как-превращать-графики-в-выводы/'},
    {n:44,title:'Как не дать данным себя обмануть',url:'../../lessons/044-урок-44-как-не-дать-данным-себя-обмануть/'},
    {n:45,title:'Линейная алгебра для ML — минимум',url:'../../lessons/045-урок-45-линейная-алгебра-для-ml-минимум-который-реально-нужен/'},
    {n:46,title:'Нормировка и стандартизация',url:'../../lessons/046-1-урок-46-1-нормировка-и-стандартизация-зачем-это-нужно/'},
    {n:47,title:'Урок 47 из 101',url:'../../lessons/047-ml-урок-47-из-101/'},
    {n:48,title:'Очистка данных',url:'../../lessons/048-ml-урок-48-очистка-данных/'},
    {n:49,title:'Работа с пропусками',url:'../../lessons/049-ml-урок-49-работа-с-пропусками/'},
    {n:50,title:'Дубликаты и мусорные строки',url:'../../lessons/050-1-ml-урок-50-1-дубликаты-и-мусорные-строки/'},
    {n:51,title:'Кодирование категориальных признаков',url:'../../lessons/051-1-ml-урок-51-1-кодирование-категориальных-признаков/'},
    {n:52,title:'Feature Engineering',url:'../../lessons/052-1-ml-урок-52-1-feature-engineering/'},
    {n:53,title:'Как не испортить данные при подготовке',url:'../../lessons/053-1-ml-урок-53-1-как-не-испортить-данные-при-подготовке/'},
    {n:54,title:'Train/Validation/Test',url:'../../lessons/054-1-ml-урок-54-1-train-validation-test/'},
    {n:55,title:'Data Leakage',url:'../../lessons/055-1-ml-урок-55-1-data-leakage/'},
    {n:56,title:'Зачем аналитику SQL',url:'../../lessons/056-1-ml-урок-56-1-зачем-аналитику-sql/'},
    {n:57,title:'SQL — базовые запросы',url:'../../lessons/057-1-ml-урок-57-1-sql/'},
    {n:58,title:'GROUP BY',url:'../../lessons/058-1-ml-урок-58-1-group-by/'},
    {n:59,title:'HAVING и фильтрация групп',url:'../../lessons/059-ml-урок-59-having-и-фильтрация-групп/'},
    {n:60,title:'JOIN — зачем соединять таблицы',url:'../../lessons/060-1-урок-60-1-join-зачем-вообще-соединять-таблицы/'},
    {n:61,title:'INNER JOIN и LEFT JOIN',url:'../../lessons/061-урок-61-inner-join-и-left-join/'},
    {n:62,title:'RIGHT JOIN и FULL JOIN',url:'../../lessons/062-урок-62-right-join-и-full-join/'},
    {n:63,title:'Урок 63',url:'../../lessons/063-ml-и-анализ-данных-урок-63/'},
    {n:64,title:'Урок 64',url:'../../lessons/064-ml-и-анализ-данных-урок-64/'},
    {n:65,title:'Урок 65',url:'../../lessons/065-ml-ds-урок-65/'},
    {n:66,title:'Урок 66',url:'../../lessons/066-ml-ds-урок-66/'},
    {n:67,title:'Урок 67',url:'../../lessons/067-ml-ds-урок-67/'},
    {n:68,title:'Урок 68',url:'../../lessons/068-ml-и-анализ-данных-урок-68/'},
    {n:69,title:'Урок 69',url:'../../lessons/069-ml-и-анализ-данных-урок-69/'},
    {n:70,title:'Агрегатные оконные функции SUM OVER, AVG OVER',url:'../../lessons/070-тема-70-агрегатные-оконные-функции-sum-over-avg-over/'}
  ];

  var input = document.getElementById('searchInput');
  if(input) {
    var results = document.createElement('div');
    results.id = 'searchResults';
    results.style.cssText = 'position:absolute;top:100%;right:0;width:320px;background:#1a1a28;border:1px solid rgba(255,255,255,.1);border-radius:10px;margin-top:4px;max-height:360px;overflow-y:auto;display:none;z-index:999;box-shadow:0 8px 32px rgba(0,0,0,.4)';
    input.parentNode.appendChild(results);

    input.addEventListener('input', function(){
      var q = this.value.trim().toLowerCase();
      if(!q){results.style.display='none';return;}
      var matches = lessons.filter(function(l){
        return l.title.toLowerCase().includes(q) ||
          ('урок '+l.n).includes(q) ||
          l.n.toString() === q;
      });
      if(matches.length===0){
        results.innerHTML='<div style="padding:12px 16px;color:#585870;font-size:.82rem">Ничего не найдено</div>';
      } else {
        results.innerHTML=matches.slice(0,15).map(function(l){
          return '<a href="'+l.url+'" style="display:block;padding:10px 16px;color:#e8e8f0;text-decoration:none;font-size:.82rem;border-bottom:1px solid rgba(255,255,255,.04)">' +
            '<span style="color:#3481B8;font-weight:600">Урок '+l.n+'</span> — '+l.title+'</a>';
        }).join('');
      }
      results.style.display='block';
    });

    document.addEventListener('click', function(e){
      if(!input.parentNode.contains(e.target)) results.style.display='none';
    });

    input.addEventListener('keydown', function(e){
      if(e.key==='Escape') results.style.display='none';
      if(e.key==='Enter'){
        var first = results.querySelector('a');
        if(first) window.location.href=first.href;
      }
    });
  }
})();
