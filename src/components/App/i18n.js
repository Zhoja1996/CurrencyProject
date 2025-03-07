import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            "home": "Home",
            "currency": "Currency Rates",
            "converter": "Currency Converter",
            "contacts": "Contacts",
            "welcome": "Welcome to the currency website!",
            "description": "On this site, you will find the latest exchange rates and a convenient converter.",
            "popularCurrencies": "Popular Currencies",
            "usd": "US Dollar",
            "eur": "Euro",
            "gbp": "British Pound",
            "jpy": "Japanese Yen",
            "exchangeRates": "Exchange Rates",
            "exchangeRatesDesc": "Get up-to-date exchange rate data right on the homepage.",
            "goToRates": "Go to exchange rates",
            "converterDesc": "Use our converter for quick currency conversions.",
            "goToConverter": "Go to converter",
            "financialNews": "Financial News",
            "news1": "The dollar is falling after the latest economic data.",
            "news2": "New euro forecasts amid political instability in Europe.",
            "news3": "How the crisis in Asia is affecting global currency markets?",
            "ihave": "I have:",
            "search": "Input currency:",
            "prev": "Prev",
            "next": "Next",
            "page": "Page",
        }
      },
      ua: {
        translation: {
            "home": "Головна",
            "currency": "Курси валют",
            "converter": "Конвертер валют",
            "contacts": "Контакти",
            "welcome": "Ласкаво просимо на сайт про валюти!",
            "description": "На цьому сайті ви знайдете актуальні курси валют та зручний конвертер.",
            "popularCurrencies": "Популярні валюти",
            "usd": "Долар США",
            "eur": "Євро",
            "gbp": "Фунт стерлінгів",
            "jpy": "Японська єна",
            "exchangeRates": "Курси валют",
            "exchangeRatesDesc": "Отримуйте актуальні дані по курсах валют прямо на головній сторінці.",
            "goToRates": "Перейти до курсів валют",
            "converterDesc": "Використовуйте наш конвертер для швидкого переведення валют.",
            "goToConverter": "Перейти до конвертера",
            "financialNews": "Фінансові новини",
            "news1": "Курс долара знижується після останніх економічних даних.",
            "news2": "Нові прогнози по євро у світлі політичної нестабільності в Європі.",
            "news3": "Як криза в Азії впливає на світові валютні ринки?",
            "ihave": "В мене є:",
            "search": "Введіть валюту:",
            "prev": "Попередня",
            "next": "Наступна",
            "page": "Сторінка",
        }
      }
    },
    lng: "ua", // Язык по умолчанию
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
