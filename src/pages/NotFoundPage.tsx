import { Link } from "react-router-dom"
import { Footer } from "src/components/footer/footer"
import { Headers } from "src/components/header/header"
import { RedButton } from "src/components/RedButton/RedButton"

export const NotFoundPage = () => {
    return (
        <div>
            <Headers />
            <div className="container">
                <h1 className="title" style={{padding: ' 0 0 30px 0'}}>404 - Страница не найдена</h1>
                <Link to='/' >
                <RedButton text="Перейти на главную"></RedButton>
                </Link>
            </div>
            <Footer />
        </div>
    )
}