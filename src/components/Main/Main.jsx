const Main = () => {
    return (
        <main className="py-12">
            <div className="px-6 text-center text-white">
                <h2 className="text-4xl font-semibold mb-4">Ласкаво просимо на сайт про валюти!</h2>
                <p className="text-lg mb-6">На нашому сайті ви знайдете актуальні курси валют та зручний конвертер для переведення між різними валютами.</p>

                <div className="p-18 grid md:grid-cols-3 gap-8 mb-8 text-white">
                    <div className="p-10 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Популярні валюти</h3>
                        <ul className="space-y-2">
                            <li>💵 USD - Долар США</li>
                            <li>💶 EUR - Євро</li>
                            <li>💷 GBP - Фунт стерлінгів</li>
                            <li>💴 JPY - Японська єна</li>
                        </ul>
                    </div>
                    <div className="p-10 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Курси валют</h3>
                        <p className="text-lg mb-4">Отримуйте актуальні дані по курсах валют прямо на головній сторінці.</p>
                        <a href="#rates" className="text-blue-600 font-bold hover:underline">Перейти до курсів валют →</a>
                    </div>
                    <div className="p-10 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Конвертер валют</h3>
                        <p className="text-lg mb-4">Використовуйте наш конвертер для швидкого переведення валют.</p>
                        <a href="#converter" className="text-blue-600 font-bold hover:underline">Перейти до конвертера →</a>
                    </div>
                </div>

                <section id="news" className="py-8 rounded-lg text-white">
                    <h3 className="text-3xl font-semibold mb-4">Фінансові новини</h3>
                    <ul className="space-y-4">
                        <li>📉 Курс долара знижується після останніх економічних даних.</li>
                        <li>📊 Нові прогнози по євро у світлі політичної нестабільності в Європі.</li>
                        <li>💹 Як криза в Азії впливає на світові валютні ринки?</li>
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default Main;
