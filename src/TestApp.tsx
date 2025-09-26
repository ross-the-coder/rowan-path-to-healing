const TestApp = () => {
  console.log("TestApp rendering");
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>Test App - Basic Rendering Works!</h1>
      <p>If you can see this, React is working.</p>
      <p>Current time: {new Date().toISOString()}</p>
    </div>
  );
};

export default TestApp;