export const UseScrollToSection = () => {
  const handleScrollToSection = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView();
    }
  };

  return { handleScrollToSection };
};
