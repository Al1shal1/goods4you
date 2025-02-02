import { Link } from "react-router-dom";
import { RedButton } from "@ui-kit/red-button";
import { useScrollToSection } from "@hooks/useScrollToSection";
import { Helmet } from "react-helmet";

export const NotFoundPage = () => {
  const { handleScrollToSection } = useScrollToSection();

  const handleBtnClick = () => {
    handleScrollToSection("/");
  };

  return (
    <>
      <Helmet>
          <title>404 | Not Found</title>
          <meta
            name="description"
            content="“Any products from famous brands with worldwide delivery”"
          />
        </Helmet>
      <div className="container">
        <div className="not_found">
          <h1 className="title">
            404 - Страница не найдена
          </h1>
          <Link to="/">
            <RedButton text="Перейти на главную" onClick={handleBtnClick} size="big" />
          </Link>
        </div>
      </div>
    </>
  );
};
