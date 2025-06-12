const DashboardEmbed = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="http://localhost:3001"
        title="Dashboard"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default DashboardEmbed;
