import { Link } from "react-router-dom";
import { Footer } from "@ui-kit/footer";
import { Headers } from "@ui-kit/header";
import { RedButton } from "@ui-kit/red-button";
import { useScrollToSection } from "@hooks/useScrollToSection";

export const NotFoundPage = () => {
  const { handleScrollToSection } = useScrollToSection();

  const handleBtnClick = () => {
    handleScrollToSection("/");
  };

  return (
    <div>
      <Headers />
      <div className="container">
        <h1 className="title" style={{ padding: " 0 0 30px 0" }}>
          404 - Страница не найдена
        </h1>
        <Link to="/">
          <RedButton text="Перейти на главную" onClick={handleBtnClick} />
        </Link>
      </div>
      <Footer />
    </div>
  );
};
