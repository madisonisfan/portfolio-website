const PageTitleThree = ({ pageTitle }) => {
  return (
    <div
      style={{
        fontWeight: "700",
        color: "white",
        fontSize: 35,
        textAlign: "left",
        marginBottom: "50px",
      }}
    >
      {`{${pageTitle}}`}
    </div>
  );
};

export default PageTitleThree;
