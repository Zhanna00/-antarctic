import initForm from './modules/form.js';
import initMaps from './modules/map.js';

// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана
window.addEventListener('load', () => {
  const initLazy = () => {
    if (window.pageYOffset <= window.innerHeight) {
      return;
    }

    initMaps(document.querySelectorAll('[data-map][id]'));
    document.querySelectorAll('[data-form]').forEach(initForm);

    document.querySelectorAll('[data-lazy-style]').forEach((lazyStyledElement) => {
      lazyStyledElement.setAttribute('style', lazyStyledElement.dataset.lazyStyle);
      lazyStyledElement.removeAttribute('data-lazy-style');
    });

    document.removeEventListener('scroll', scrollHandler);
  };

  function scrollHandler() {
    initLazy();
  }

  if (window.pageYOffset > window.innerHeight) {
    initLazy();
  } else {
    document.addEventListener('scroll', scrollHandler);
  }
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
