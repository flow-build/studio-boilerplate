const Custom500 = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        height: '500px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center'
        }}
      >
        <h1>500 - Ops!</h1>
        <h3>Algo deu errado...</h3>
      </div>
    </div>
  );
};

export default Custom500;
