const Footer = () => {
    return (
        <footer className="bg-amber-400 flex flex-col justify-center items-center gap-2 pt-7 pb-7">
            <p>&copy; 2025 Валюты и Курсы. Все права защищены.</p>
            <div className="flex items-center justify-center gap-3">
            <a href="#" className="hover:text-gray-200">Политика конфиденциальности</a> 
            <a href="#" className="hover:text-gray-200">Контакты</a>
            </div>
        </footer>
    );
}

export default Footer;