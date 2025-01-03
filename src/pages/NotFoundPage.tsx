import { Link } from "react-router-dom";
import { Footer } from "src/ui-kit/footer";
import { Headers } from "src/ui-kit/header";
import { RedButton } from "src/ui-kit/red-button";

export const NotFoundPage = () => {
  return (
    <div>
      <Headers />
      <div className="container">
        <h1 className="title" style={{ padding: " 0 0 30px 0" }}>
          404 - Страница не найдена
        </h1>
        <Link to="/">
          <RedButton text="Перейти на главную" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};
